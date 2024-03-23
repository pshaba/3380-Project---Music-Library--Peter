import db from "../database.mjs";

// This is the controller for the POST /login route
export const login = (req, res) => {
    //console.log("Responding to POST /login")
    const username = req.body.username;
    const password = req.body.password;

    const q = "SELECT * FROM person WHERE person_email = ? AND person_hashed_password = ?";

    db.query(q, [username, password], (err, data) => {
        if (err) {
            res.send("error: " + err);
        }

        if (data.length > 0) {
            res.send(data);
        } else {
            res.status(401).send("Incorrect username and/or password!");
        }
    });
};