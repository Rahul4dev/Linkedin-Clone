import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default Store;
