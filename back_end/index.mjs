// file type: mjs because that allows it to read the ES6 import syntax (for import and export, and probably other things too)
// https://nodejs.org/docs/latest/api/esm.html - for more research on ES6 modules in Node.js

import express from "express"; 
import mysql from "mysql";
import cors from "cors";
import artistRoutes from "./back_routes/Artist.mjs"
import albumRoutes from "./back_routes/Album.mjs"
import findByArtistRoutes from "./back_routes/findByArtist.mjs"

const app = express();

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Team4-3380:",
    database: "online_music_library"

});


app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

app.use("/back_end/Artist", artistRoutes)
app.use("/back_end/Album", albumRoutes)
app.use('/back_end/Album/findByArtist', findByArtistRoutes);


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

app.post("/persons", (req, res) => {
    console.log("Responding to POST /persons")

    const values = [
        req.body.first_name,
        req.body.middle_initial,
        req.body.last_name,
        req.body.email,
        req.body.birthdate,
        req.body.password,
        req.body.address
    ]

    const q = "INSERT INTO person (person_first_name, person_middle_initial, person_last_name, person_email, person_birthdate, person_hashed_password, person_address) VALUES (?)";

    db.query(q, [values], (err, data) => {
        if (err) throw err;

        res.json(data);
    });
});


app.listen(8080, () => {
    console.log("We stan Uma!");
    console.log("Server is running on port 8080");
});

