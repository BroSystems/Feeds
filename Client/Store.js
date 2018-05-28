import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './src/Reducers';

const store = createStore(
    reducers, // all the reducers
    {}, // app initial state
    compose(
        applyMiddleware(logger, thunk)
    )
);

export default store;