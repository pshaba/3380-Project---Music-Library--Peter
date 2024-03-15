import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import DebugAdd from './DebugAdd';
import DebugFetch from './DebugFetch';

const DebugDatabase = () => {
    return (
        <><div className='debug-database'>
            <h1>Debug Database</h1>
        </div>
        <Routes>
                <Route path="./add" element={<DebugAdd />} />
                <Route path="./fetch" element={<DebugFetch />} />
        </Routes>
        </>
    );

    
}

export default DebugDatabase;