import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router';

import Dia1 from './views/dia1/Dia1.jsx';
import Dia2 from './views/dia2/Dia2.jsx';
import Dia3 from './views/dia3/Dia3.jsx';
import Dia4 from './views/dia4/Dia4.jsx';

import './App.css'
import Dia5 from './views/dia5/Dia5.jsx';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dia5/>} />
        <Route path="/dia2" element={<Dia1 />} />
        <Route path='/dia3' element={<Dia2/>} />
        <Route path='/dia4' element={<Dia3/>} /> 
        <Route path='/dia5' element={<Dia4/>}/>
      </Routes>
    </div>
  )
}

export default App
