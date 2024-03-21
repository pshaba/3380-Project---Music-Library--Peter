import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import Recents from './routes/Recents';
import Library from './routes/library';
//import Navbar from './routes/Navbar';
import Nav from './routes/Nav';
import DebugDatabase from './routes/DebugDatabase';

import "./styles/App.css";

export default function App() {
  return (
    
      <div className='app'>
      <header className="App-header">{/*changing the Navbar to my Navbar... */}
          <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recents" element={<Recents />} />
          <Route path="/library" element={<Library />} />
          <Route path="/debug-database/*" element={<DebugDatabase />} />
          
        </Routes>
      </main>
    </div>
    
    
  );
}


