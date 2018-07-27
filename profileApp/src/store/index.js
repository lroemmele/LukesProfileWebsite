import {combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {testReducer} from '../reducers';

const enhancers = compose(
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

 const reducers = combineReducers({
      testReducer: testReducer
 });

let store = null;
export default {

     createStore: ()=>{
          store = createStore(reducers, applyMiddleware(thunk, logger), enhancers);
          return store;
     },

     currentStore: ()=>{
          return store;
     }
}
