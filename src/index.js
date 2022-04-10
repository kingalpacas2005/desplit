import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss"
import Menu from "./components/Menu"

ReactDOM.render(
  <React.StrictMode>
    <Menu></Menu>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

