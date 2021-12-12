import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from './App.js'

// Must make sure that the only thing inside 'strict' is the component
ReactDOM.render(
<React.StrictMode>
  <App /> 
</React.StrictMode>,
  document.getElementById('root')
  )