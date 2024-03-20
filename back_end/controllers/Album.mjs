import { db } from "../index.mjs";


export const getAlbum = (req, res) => {
  const album_id = req.params.album_id;
  const q = "SELECT * FROM album WHERE album_id=?";

  db.query(q, [album_id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) {
      return res.status(404).json({ message: "Album not found" });
    };
    const { album_title, album_description } = data[0];
    const albumInfo = { album_title, album_description };
    return res.json(albumInfo);
  });
};



export const findByArtist = (req, res) => {
    const artist_id = req.params.artist_id;
    const q = "SELECT * FROM album WHERE album_primary_artist_id=?";
  
    db.query(q, [artist_id], (err, albums) => {
      if (err) return res.status(500).json(err);
      if (albums.length === 0) {
        return res.status(404).json({ message: "No albums found for this artist" });
      };
      return res.json(albums);
    });
};