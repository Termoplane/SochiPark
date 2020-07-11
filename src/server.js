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

import stats from '../build/assets.json';

import configureStore from './redux/configureStore';
import App from './App';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
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
