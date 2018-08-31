import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import * as sagas from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const composables = [applyMiddleware(...middlewares)];
  const enhacer = compose(...composables);
  const store = createStore(rootReducer, enhacer);

  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));

  return store;
}
