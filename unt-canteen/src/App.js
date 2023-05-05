import React from 'react';
import {Route, Routes} from 'react-router-dom';

import SignUp from './Models/SignUp.jsx';
import LogIn from './Models/Login.jsx';

const App = () => {
  return (
      <Routes>
              <Route default path="/" element={<LogIn />} />
              <Route path='/signup' element={<SignUp/>} />
      </Routes>
  )
}
export default App;