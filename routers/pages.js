const express = require('express');
const PageService = require('../services/PageService');
const pages_router = express.Router();
const {v4: uuidv4} = require('uuid');
// const fs = require('fs');
// const url = require('url');
let id = uuidv4();

// method: GET, path: /pages
pages_router.get('/', (req, res) => {
    try {
        const pages = PageService.readPages();
        res.json(pages)
    } catch (error) {
        console.log('Error while reading pages', error);
        res.json(error);
        res.status(500);
    }
});

pages_router.get('/:page_id', (req, res) => {
    const id = parseInt(req.params.page_id);
    try {
        res.send(PageService.readPage(id));
    } catch (error) {
        res.status(500);
        console.log(`Error while reading page by ${id}`, error);
        res.json(error)
    }
});

pages_router.post('/page', (req, res) => {
    try {
        let reqData = {[id]: {name: req.body.name, pass: req.body.pass, text: req.body.text}};
        res.send(PageService.createPage(reqData));
    } catch (error) {
        //TODO: реализовать корректную обработку ошибок
        console.log(error);
        res.status(400).send();
    }
});

module.exports = pages_router;