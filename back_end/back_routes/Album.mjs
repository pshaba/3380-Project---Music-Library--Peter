import express from "express";
import { getAlbum } from "../controllers/Album.mjs";

const router = express.Router();

router.get("/find/:album_id", getAlbum);

export default router;