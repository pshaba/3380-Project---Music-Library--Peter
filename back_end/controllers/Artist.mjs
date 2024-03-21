import { db } from "../index.mjs";


export const getArtist = (req, res) => {
  const artist_id = req.params.artist_id;
  const q = "SELECT * FROM artist WHERE artist_id=?";

  db.query(q, [artist_id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) {
      return res.status(404).json({ message: "Artist not found" });
    };
    const { artist_display_name, artist_email, artist_biography } = data[0];
    const artistInfo = { artist_display_name, artist_email, artist_biography };
    return res.json(artistInfo);
  });
};


