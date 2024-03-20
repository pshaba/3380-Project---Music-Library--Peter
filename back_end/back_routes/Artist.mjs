import express from "express";
import { getArtist } from "../controllers/Artist.mjs";

const router = express.Router();

router.get("/find/:artist_id", getArtist);

export default router;