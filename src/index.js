import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";

//Store will the store is a place to store dataas 
let store = createstore(counter)
//action
const increment = () =>{
  return{
    type: "DECREMENT"
  }
}
//reducer will tell us what is uspposed happen when we perform an action 
const counter =(state = 0,action) => {
  switch (action.type){
    case"INCREMENT":
      return state+1
      case "DECREMENT":
        return state-1 
  }
}
//store 
let store= createStore(counter)
//to display our counter in the console window 
store.subscribe(() => console.log(store.getState())); // we are loggin the current state of our nstore  
//Dispatcher
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


