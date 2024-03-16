// file type: mjs because that allows it to read the ES6 import syntax (for import and export, and probably other things too)
// https://nodejs.org/docs/latest/api/esm.html - for more research on ES6 modules in Node.js

import express from "express"; 
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "X9f3ph$q",
    database: "Online_Music_Library"

});

app.use(express.json());

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
    const q = "INSERT INTO person (person_first_name, person_middle_inital, person_last_name, person_email, person_birthdate, person_hashed_password, person_address) VALUES (?)";

    db.query(q, [], (err, data) => {
        if (err) throw err;

        res.json(data);
    });
});



app.listen(8080, () => {
    console.log("We stan Uma!");
    console.log("Server is running on port 8080");
});