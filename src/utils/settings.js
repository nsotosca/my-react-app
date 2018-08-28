const settings = {
  endpoints: {
    comments: 'comments',
    posts: 'posts',
  },
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  url: 'http://localhost:3000/',
};

export default settings;
