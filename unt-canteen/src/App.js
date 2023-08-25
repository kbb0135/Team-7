import React from 'react';
import {Route, Routes} from 'react-router-dom';

import SignUp from './Models/SignUp.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import MenuPage from './Pages/MenuPage.jsx';

const App = () => {
  return (
    
      <Routes>
        
              <Route default path="/" element={<LoginPage />} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path = '/home' element={<HomePage />} />
              <Route path = "/menu" element={<MenuPage />} />
      </Routes>
  )
}
export default App;