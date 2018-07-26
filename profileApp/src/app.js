import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import Home from './components/containers/mainLayout';


const app =(
     <Provider store={store.createStore()}>
          <Home/>
     </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
