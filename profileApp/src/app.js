import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Adds redux to react app
import {Provider} from 'react-redux';
import store from './store';

import Home from './home';


const app =(
     <Provider store={store.createStore()}>
          <Home/>
     </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
