import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router';

import Dia1 from './views/dia1/Dia1.jsx';
import Dia2 from './views/dia2/Dia2.jsx';

import './App.css'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dia2 />} />
        <Route path="/dia2" element={<Dia1 />} />
        <Route
          path='/cumplededavi'
          element={
            <img
              src="https://i.postimg.cc/Kzrr4hHz/dav-Cumple.png"
              alt="Feliz Cumple Davi"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
