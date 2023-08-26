import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUpPage from './Pages/SignUpPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
//import App from './App';
import App from './App';
>>>>>>> origin/Karan
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
    <Navigator /> 
=======
    <SignUpPage />
    
>>>>>>> ccf4ef540d142acab786b4657d1af828d3bbf945
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> origin/Karan
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
