import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss"
import Menu from "./components/Menu"
import MetaMask from "./components/MetaMask"

ReactDOM.render(
  <React.StrictMode>
    <Menu></Menu>
    <App />
    <MetaMask></MetaMask>
  </React.StrictMode>,
  document.getElementById('root')
);

