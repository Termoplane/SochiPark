import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { withTheme } from '@xstyled/styled-components';
import loadable from 'loadable-components';
import { ThemeProvider } from '@xstyled/styled-components';
import { Helmet } from 'react-helmet';
import 'antd/dist/antd.css';

import * as Themes from './baseStyles/themes';
import * as ThemeActions from './actions/themeActions';
import ThemeToggleButton from './components/ThemeToggleButton'

import Landing from './Pages/Landing'
import SPA from './Pages/SPA'
import Tour from './Pages/Tour'
import Food from './Pages/Food'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Reviews from './Pages/Reviews'
import Room from './Pages/Room'

import { BaseContainer } from './baseStyles/styles';
import './baseStyles/base.css';


class App extends React.Component {
  componentDidCatch(error, info) {
		console.error(error, info);
  }

  toggleTheme = () => {
    this.props.ThemeActions.changeTheme();
  }

  render() {
    const { theme } = this.props;
    const selectedTheme = Themes[theme.type];

    return(
      <ThemeProvider theme={selectedTheme}>
        <Helmet>
          <title>🔋 Сервис по ремонту iPhone в Краснодаре - Цена, отзывы</title>
        </Helmet>
        <Switch>
          <Route exact path='/' >
            <Landing/>
          </Route>
          <Route exact path='/SPA' >
            <SPA/>
          </Route>
          <Route exact path='/Tour' >
            <Tour/>
          </Route>
          <Route exact path='/Food' >
            <Food/>
          </Route>
          <Route exact path='/Gallery' >
            <Gallery/>
          </Route>
          <Route exact path='/Contact' >
            <Contact/>
          </Route>
          <Route exact path='/Reviews' >
            <Reviews/>
          </Route>
          <Route exact path='/Room/:id' >
            <Room/>
          </Route>
        </Switch>
      </ThemeProvider>
    );
  }
};

const mapStateToProps = state => ({
  theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
  ThemeActions: bindActionCreators(ThemeActions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withTheme(App)));
