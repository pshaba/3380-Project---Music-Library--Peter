import React from 'react';
import { useQuery } from "@tanstack/react-query";
import makeRequest from "axios";
import { useParams, Link } from "react-router-dom";

const Artist = () => {
  const { id } = useParams(); 
  const artistId = parseInt(id);

  const artistQuery = useQuery({
    queryKey: ["artist"], 
    queryFn: () => makeRequest.get(`http://localhost:8080/back_end/Artist/find/${artistId}`).then((res) => res.data)
  });

  const albumsQuery = useQuery({
    queryKey: ["albums"], 
    queryFn: () => makeRequest.get(`http://localhost:8080/back_end/Album/findByArtist/${artistId}`).then((res) => res.data)
  });

  const { data: artistData, isLoading: isArtistLoading, isError: isArtistError } = artistQuery;
  const { data: albumsData, isLoading: isAlbumsLoading, isError: isAlbumsError } = albumsQuery;

  if (isArtistLoading || isAlbumsLoading) return <div>Loading...</div>;
  if (isArtistError || isAlbumsError) return <div>Error fetching data</div>;

  return (
    <div>
      <h2>Artist Details</h2>
      <div>
        <strong>Email:</strong> {artistData.artist_email}
      </div>
      <div>
        <strong>Display Name:</strong> {artistData.artist_display_name}
      </div>
      <div>
        <strong>Bio:</strong> {artistData.artist_biography}
      </div>
      
      <h2>Albums</h2>
      {albumsData.map(album => (
        <div key={album.album_id}>
          <Link to={`/Album/${album.album_id}`}>
            {album.album_title}
          </Link>
        </div>
      ))}
    </div>
  )

};

export default Artist;