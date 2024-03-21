import express from "express";
import { findByArtist} from "../controllers/Album.mjs";

const router = express.Router();

router.get("/:artist_id", findByArtist);

export default router;