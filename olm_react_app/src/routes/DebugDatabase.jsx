import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import DebugAddPerson from './DebugAddPerson';
import DebugFetchPerson from './DebugFetchPerson';

import '../styles/DebugDatabase.css';

const DebugDatabase = () => {
    return (
        <div className='debug-database'>
            <h1>Debug Database</h1>

            <Link className="link" to="add-person">Add Person</Link>
            <Link className="link" to="fetch-person">Fetch Person</Link>
            <Routes>
                <Route path="add-person" element={<DebugAddPerson />} />
                <Route path="fetch-person" element={<DebugFetchPerson />} />
            </Routes>
        </div>
        
        
    );

    
}

export default DebugDatabase;