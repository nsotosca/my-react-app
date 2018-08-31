import { combineReducers } from 'redux';

import app from '../containers/App/reducer';
// import comments from '../containers/BackupSettings/reducer';
import posts from '../containers/Posts/reducer';

const rootReducer = combineReducers({
  app,
  posts,
});

export default rootReducer;
