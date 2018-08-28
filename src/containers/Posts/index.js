import React from 'react';
import { Route } from 'react-router-dom';

import { PostForm, PostList } from './components';

export default function Posts() {
  return (
    <section>
      <Route exact path="/posts/" component={PostList} />
      <Route path="/posts/create" component={PostForm} />
      <Route path="/posts/:id/edit" component={PostForm} />
    </section>
  );
}
