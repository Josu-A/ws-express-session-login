const express = require('express');
const router = express.Router();
const path = require('path');

function loadUserData() {
    const filePath = path.resolve(__dirname, '../models/datubase.json');
    return require(filePath);
}

router.post('/', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userData = loadUserData();

    const user = userData.find(user => user.username === username && user.password === password);
    
    if (user) {
        req.session.userid = username;
        console.log(req.session);
    }
    res.json({
        "success": user !== undefined
    })
});

module.exports = router;
