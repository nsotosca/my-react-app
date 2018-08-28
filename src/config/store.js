import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import * as sagas from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const composables = [applyMiddleware(...middlewares)];
  const enhacer = compose(...composables);
  const store = createStore(reducer, enhacer);

  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));

  return store;
}
