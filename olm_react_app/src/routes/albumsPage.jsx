import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const AlbumsPage = () => {
    const [albumsData, setAlbumsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [noAlbums, setNoAlbums] = useState(false);

    return (
        <div>
            <h1>Albums</h1>

            
        </div>
    );
}

export default AlbumsPage;
