import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from './sagas/saga';
import { heroReducer } from './reducers/heroReducer';

const saga = createSagaMiddleware();
export const store = createStore(heroReducer, applyMiddleware(saga));
saga.run(sagaWatcher);
