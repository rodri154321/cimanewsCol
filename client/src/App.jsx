import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router';

import Dia1 from './views/dia1/Dia1.jsx';

import './App.css'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dia1/>} />
      </Routes>
    </div>
  )
}

export default App
