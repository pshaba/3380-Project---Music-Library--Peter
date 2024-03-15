import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Root from './routes/Root';
import Navbar from './routes/Navbar';
import DebugDatabase from './routes/DebugDatabase';

import "./styles/App.css";

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/debug-database" element={<DebugDatabase />} />
  
      </Routes>
    
    </div>
  );
}


