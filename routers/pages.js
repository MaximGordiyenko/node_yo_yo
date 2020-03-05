const express = require('express');
const pages_router = express.Router();
let data = require("../data/data");
const {v4: uuidv4} = require('uuid');
const fs = require("fs");

// method: GET, path: /pages
pages_router.get('/', (req, res) => {
    res.json(Object.values(data));
});

pages_router.get('/:page_id', (req, res) => {
    try {
        const page_id = data[req.params.page_id];
        if (page_id >= 0 || page_id <= data) {
            res.status(200).send(page_id);
        } else {
            res.status(400).send('Error: no exist such id')
        }
    } catch (e) {
        console.log(e);
    }
});

pages_router.post('/page', (req, res) => {
    try {
        let name = req.body.name;
        let pass = req.body.pass;
        let text = req.body.text;
        console.log("name:", name, "pass:", pass, "text:", text);
        res.end();
    } catch (e) {
        console.log(e);
    }
});

module.exports = pages_router;