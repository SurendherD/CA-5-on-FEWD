import React from 'react';
import {Routes,Route} from 'react-router';
import Home from './Home';
import RegisterForm from './RegisterForm';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App

