
const express = require('express');
var mongodb = require('mongojs');
var db = mongodb('test_db', ['users']);
var router = express.Router();

router.get("/", function (req, res) {
    res.send("<p>THIS IS JSON</p>");
});

router.get("/users", function (req, res) {
    db.users.find(function (err, db) {
        res.status(200).json(db);

    });
});

router.post("/users", function (req, res) {
    db.users.insert(req.body, function (err, db) {
        res.status(200).send(db._id);
    });
});
    module.exports = router;
