import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {testReducer} from '../reducers';


let store = null;
export default {

     //creat a store and returns store
     createStore: ()=>{
          console.log('in createstore');
          //combines reducers
          const reducers = combineReducers({
               test: testReducer
          })
          console.log('after combinereducers');
          //creates store using reducers

          //console.log(store.state.tests);
          store = createStore(reducers, applyMiddleware(thunk));
          console.log('after store create');
          return store;
     },

     currentStore: ()=>{
          return store
     }
}
