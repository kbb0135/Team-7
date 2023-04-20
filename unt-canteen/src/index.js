import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import Navigator from './Navigator'; 
=======
import SignUpPage from './Pages/SignUpPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
//import App from './App';
>>>>>>> ccf4ef540d142acab786b4657d1af828d3bbf945
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Navigator /> 
=======
    <SignUpPage />
    
>>>>>>> ccf4ef540d142acab786b4657d1af828d3bbf945
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
