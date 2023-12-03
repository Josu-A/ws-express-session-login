const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect('/protected');
    res.send("Hello World");
});

router.get('/protected', (req,res) => {

    if (req.session.userid) {
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }
    else {
        res.redirect('form.html');
    }
});

router.get('/logout', (req,res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
