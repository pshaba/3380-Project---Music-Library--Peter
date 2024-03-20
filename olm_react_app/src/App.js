import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Root from './routes/Root';
import Navbar from './routes/Navbar';
import DebugDatabase from './routes/DebugDatabase';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Artist from "./routes/artistPage/artistPage";
import Album from './routes/albumPage/albumPage';

export default function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <div className='app'>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/debug-database/*" element={<DebugDatabase />} />
        <Route path ="/Artist/:id" element={<Artist />} />
        <Route path ="/Album/:id" element={<Album />} />
      </Routes>
    
    </div>
    </QueryClientProvider>
  );
}


