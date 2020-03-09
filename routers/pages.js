const express = require('express');
const PageService = require('../services/PageService');
const pages_router = express.Router();

// method: GET, path: /pages
pages_router.get('/', (req, res) => {
    try {
        const pages = PageService.readPages();
        return res.json(pages)
    } catch (error) {
        console.log('Error while reading pages', error);
        return res.status(500).send(error);
    }
});

pages_router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        return res.send(PageService.readPage(id));
    } catch (error) {
        console.log(`Error while reading page by ${id}`, error);
        return res.status(500).send(error);
    }
});

pages_router.post('/page', (req, res) => {
    try {
        let reqData = {
            name: req.body.name,
            pass: req.body.pass,
            text: req.body.text
        };
        return res.send(PageService.createPage(reqData));
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
});

module.exports = pages_router;