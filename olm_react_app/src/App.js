import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import Root from './routes/Root';
import Home from './routes/Home';
import Recents from './routes/Recents';
import Library from './routes/library';
import Account from './routes/accountsPage';
//import Navbar from './routes/Navbar';
import Nav from './routes/Nav';
import DebugDatabase from './routes/debugDatabasePage';
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ArtistPage from "./routes/artistPage/artistPage"; // change path
import ArtistsPage from './routes/artistsPage';
import Album from './routes/albumPage/albumPage';
import Albums from './routes/albumsPage';

export default function App() {

  //const queryClient = new QueryClient();

  return (
    <div className='app'>
      


    
      <header className="App-header">{/*changing the Navbar to my Navbar... */}
          <Nav />
      </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path ="/artist/:id" element={<ArtistPage />} />
          <Route path="/albums" element={<Albums />} />
          <Route path ="/album/:id" element={<Album />} />
          <Route path="/recents" element={<Recents />} />
          <Route path="/library" element={<Library />} />
          <Route path="/debug-database/*" element={<DebugDatabase />} />
          
        </Routes>
    </div>

  );
}


