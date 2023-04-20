import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUpPage from './Pages/SignUpPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import MenuPage from './Pages/MenuPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuPage/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
