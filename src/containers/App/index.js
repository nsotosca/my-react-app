import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import React from 'react';

import appSelectors from './selectors';
import { Comments, Home, Posts } from '../index';
import { ErrorMessage, Navbar, Spinner } from '../../components';

const App = ({ error, loading }) => (
  <BrowserRouter>
    <section className="container" style={{ paddingTop: '10px' }}>
      <Spinner loading={loading} />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/comments" component={Comments} />
        <Redirect from="" to="/" />
      </Switch>
      <ErrorMessage error={error} />
    </section>
  </BrowserRouter>
);

const mapStateToProps = createStructuredSelector({
  error: appSelectors.makeSelectError,
  loading: appSelectors.makeSelectLoading,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
};
