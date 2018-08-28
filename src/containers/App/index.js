import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';

import Comments from '../Comments';
import Home from '../Home';
import { Navbar } from '../../components';
import Posts from '../Posts';

export default function App() {
  return (
    <BrowserRouter>
      <section className="container" style={{ paddingTop: '10px' }}>
        {/* <Spinner loading={loading} /> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/comments" component={Comments} />
          <Redirect from="" to="/" />
        </Switch>
        {/* <ErrorMessage error={error} /> */}
      </section>
    </BrowserRouter>
  );
}
