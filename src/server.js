import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from '@xstyled/styled-components';
import { getBundles } from 'react-loadable/webpack';
import { Capture } from 'react-loadable';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';
import nodemailer from 'nodemailer';
import proxy from 'express-http-proxy';

import stats from '../build/assets.json';

import configureStore from './redux/configureStore';
import App from './App';


const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const cookiesBG = [];
var day = '';
var month = '';
var year = '';
var nights = '';
var persons = '';


const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  // proxy to bg login and taking needed cookies
  .use('/api/login', proxy('https://login.bgoperator.ru/auth', {
      userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
        for (let i = 0; i < 3; i++) {
          cookiesBG[i] = proxyRes.headers['set-cookie'][i].split(';')[0];
        }
        return {}
      }
    })
  )
  // endpoint for proxying request from "Поиск номеров" button
  .use('/api/bgreq', (req, res, next) => {
      day = req.query.data.split('.')[0];
      month = req.query.data.split('.')[1];
      year = req.query.data.split('.')[2];
      nights = req.query.f7;
      persons = req.query.p;
      next()
    },
    proxy(`http://export.bgoperator.ru/partners`,
      {
        // For correct parameters parsing
        proxyReqPathResolver: function (req) {
          var parts = req.url.split('?');
          var queryString = parts[1];
          var resolvedPath = 'http://export.bgoperator.ru/partners' + (queryString ? '?' + queryString : '');
          return resolvedPath
        },
        // For joining cookies in request to avoid "401 Unauthorized"
        proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
          proxyReqOpts.headers['Cookie'] = `${cookiesBG.join('; ')}`;
          return proxyReqOpts;
        },
        // Parsing bg server response for user correct output
        userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
          var data = JSON.parse(proxyResData.toString('utf8'));
          return data;
        },
      }
    )
  )
  // endpoint for feedback form data processing and sending email to owner
  .use('/api/feedback', express.json(), (req, res) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'easyvape23@gmail.com',
        pass: 'lrqvwgsdrjfwsyto'
      }
    });
    
    var mailOptions = {
      from: `${req.body.email}`,
      to: 'alex223666@gmail.com',
      subject: `Новая бронь от ${Object.values(req.body.name)[0]}`,
      text: `Детали брони:\n${req.body.introduction}\nБронь от ${Object.values(req.body.name).join(', \n\t')}\nТелефон: ${Object.values(req.body.phone).join(', \n\t')}\nEmail: ${req.body.email}\nПаспорт: ${Object.values(req.body.passport).join(', \n\t')}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  })
  .get('/*', (req, res) => {
    const sheet = new ServerStyleSheet();
    const store = configureStore({});
    const context = {};
    const modules = [];
    const helmet = Helmet.renderStatic();
    console.debug(`Request_URL: ${req.url}`);

    const markup = renderToString(
      sheet.collectStyles(
        <Capture report={moduleName => modules.push(moduleName)}>
          <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
              <App />
            </StaticRouter>
          </Provider>
        </Capture>
    ));
    const styleTags = sheet.getStyleTags();

    if (context.url) {
      res.redirect(context.url);
    } else {
      const bundles = getBundles(stats, modules);
      const chunks = bundles.filter(bundle => bundle.file.endsWith('.js'));
      const styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
      const finalState = store.getState();
      res.status(200).send(
        `<!doctype html>
          <html ${helmet.htmlAttributes.toString()}>
            <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${helmet.title && helmet.title.toString()}
              ${helmet.meta && helmet.meta.toString()}
              ${helmet.link && helmet.link.toString()}
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''
              }
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
              ${styles
                .map(style => {
                  return `<link href="${style.file}" rel="stylesheet"/>`;
                })
                .join('\n')}
              ${styleTags}
            </head>
            <body>
              <div id="root">${markup}</div>
              ${chunks
                .map(
                  chunk =>
                    process.env.NODE_ENV === 'production'
                      ? `<script src="/${chunk.file}"></script>`
                      : `<script src="http://${process.env.HOST}:${parseInt(
                          process.env.PORT,
                          10
                        ) + 1}/${chunk.file}"></script>`
                )
                .join('\n')}
              <script>
                window.__PRELOADED_STATE__ = ${serialize(finalState)}
              </script>
              <script>
                let observer = new MutationObserver(mutationRecords => {
                  // console.log(mutationRecords); // console.log(изменения)
                });

                observer.observe(document.body, {
                  childList: true, // наблюдать за непосредственными детьми
                  subtree: true, // и более глубокими потомками
                  characterDataOldValue: true // передавать старое значение в колбэк
                });
              </script>
            </body>
          </html>`
      );
    }
  });

export default server;
