import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router';

import Dia1 from './views/dia1/Dia1.jsx';
import Dia2 from './views/dia2/Dia2.jsx';

import './App.css'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dia1/>} />
        <Route path="/dia2" element={<Dia2/>}/>
      </Routes>
    </div>
  )
}

export default App
