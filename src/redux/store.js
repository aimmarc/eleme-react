import { createStore, applyMiddleware } from 'redux';
import exampleApp from './reducer';
import thunk from 'redux-thunk';

let store = createStore(
    exampleApp,
    applyMiddleware(thunk),
);

export default store;
