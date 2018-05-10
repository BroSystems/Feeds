import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/Reducers';

const store = createStore(
    reducers, // all the reducers
    {}, // app initial state
    compose(
        applyMiddleware(thunk)
    )
);

export default store;