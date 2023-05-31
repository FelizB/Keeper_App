import React from 'react';
import ReactDOM from 'react-dom';
import {App, Signed} from "./components/App";

var isLogged = true;

if(isLogged){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

}else{
  ReactDOM.render(
    <Signed />,
    document.getElementById('root1') 
  )

  }

