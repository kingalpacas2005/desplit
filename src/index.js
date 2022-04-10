import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss"
import Menu from "./components/Menu"
import MetaMask from "./components/MetaMask"

let wallet;

function changeWallet(_wallet) {
  wallet = _wallet;
}

ReactDOM.render(
  <React.StrictMode>
    <Menu></Menu>
    <App />
    <MetaMask onChangeWallet={changeWallet}></MetaMask>
  </React.StrictMode>,
  document.getElementById('root')
);

