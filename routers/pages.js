const express = require('express');
const PageService = require('../services/PageService');
const pages_router = express.Router();

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

pages_router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        return res.send(PageService.deletePage(id))
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
});

pages_router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {name, pass, text} = req.body;

    if(!name || !pass || !text || !id) {
        return res.status(666).send('name pass text id required');
    }

    try {
    return res.send(PageService.updatePage(id, {name, pass, text}))
    } catch (error) {
        console.log(error);
        return res.status(400).send(error.message);
    }
});

pages_router.post('/', (req, res) => {
    const {name, pass, text} = req.body;
    if(!name || !pass || !text) {
        return res.status(666).send('name pass text required');
    }
    try {
        return res.send(PageService.createPage({name, pass, text}));
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
});

module.exports = pages_router;