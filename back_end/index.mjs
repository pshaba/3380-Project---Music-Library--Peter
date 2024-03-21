// file type: mjs because that allows it to read the ES6 import syntax (for import and export, and probably other things too)
// https://nodejs.org/docs/latest/api/esm.html - for more research on ES6 modules in Node.js

import express from "express"; 
import cors from "cors";
import artistRoute from "./routes/artist_route.mjs";
import albumRoute from "./routes/album_route.mjs";
import debugPersonRoute from "./routes/debug_person_route.mjs";

//import findAlbumByArtistRoute from "./routes/FindAlbumByArtist.mjs";
//import findByArtistRoutes from "./routes/findByArtist.mjs"


const app = express(); // defines express app for handling requests

// Middleware for handeling JSON data and allowing database requests
app.use(cors());
app.use(express.json());


app.use("/artists", artistRoute);
app.use("/albums", albumRoute);
app.use("/debug_person", debugPersonRoute);


/*
Moving the below 
app.get('/library', (req, LIBRARY page",
        "msg" : "This is my first page",
        "username": "PeterShaba"
    }];
    res.json(str); // Send JSON response
});
app.get('/recentsname": "Coder Peter Shaba",
        "msg" : "This is my first page",
        "username": "PeterShaba"



// Will be where we start direction routes
app.get("/", (req, res) => {
    res.send("Responding to GET /");
    console.log("Responding to GET /");
});

// Test to get all people from db
app.get("/persons", (req, res) => {
    //res.send("Responding to GET /persons");
    console.log("Responding to GET /persons");
    const q = "SELECT * FROM person";
    db.query(q, (err, result) => {
        if (err) throw err;

        res.json(result);
    });
    
});
*/

// Start server listening on port 8080
app.listen(8080, () => {
    console.log("We stan Uma!");
    console.log("Server is running on port 8080");
});

