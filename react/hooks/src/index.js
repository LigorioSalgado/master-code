import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
//import Counter from './Counter';
//import Input from './Input';
import MessageInput from './MessageInput'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MessageInput />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
