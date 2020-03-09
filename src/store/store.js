import {applyMiddleware, compose, createStore} from 'redux';
import {logger} from 'redux-logger/src/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import * as sagas from '../sagas/rootSaga'
import reducers from '../reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware();

const sagaConnect = () => Object.values(sagas).map(saga => sagaMiddleware.run(saga));

const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = composeEnhancers(
  applyMiddleware(
    thunk,
    logger,
    sagaMiddleware
  ));

const createStoreWithMiddleware = middleware(createStore);

const store = createStoreWithMiddleware(reducers);

sagaConnect();

export default store;