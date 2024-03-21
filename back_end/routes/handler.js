const express = require('express');
const router = express.Router();
router.get('/library', (req, res)=>{
    const str = [{
        "page": "This is the LIBRARY page",
        "msg" : "This is my first page",
        "username": "PeterShaba"
    }];
    res.json(str); // Send JSON response
});
router.get('/recents', (req, res)=>{
    const str = [{
        "name": "Coder Peter Shaba",
        "msg" : "This is my first page",
        "username": "PeterShaba"
    }];
    res.json(str); // Send JSON response
});


module.exports = router;