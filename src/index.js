import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux"; //i can use combineReducers in order to add multiple reducers in a single store 
import allReducers from "./Reducers/index";


const store =createstore(allReducers)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


