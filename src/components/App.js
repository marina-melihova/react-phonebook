import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import routes from '../routes';
import styles from './App.module.css';

import Header from './header/Header';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.container}>
          <Header />
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToPros = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToPros)(App);
