const express = require('express');
const PageService = require('../services/PageService');
const pages_router = express.Router();
let data = require('../data');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const url = require('url');
const bodyParser = require('body-parser');

// method: GET, path: /pages
pages_router.get('/', (req, res) => {
  try {
    const pages = PageService.readPages();
    return res.json(pages)
  } catch (error) {
    res.status(500);
    console.log('Error while reading pages', error);
    res.json(error)
  }
});

pages_router.get('/:page_id', (req, res) => {
  const id = +req.params.page_id;
  try {
    return res.send(PageService.readPage(id));
  } catch (error) {
    res.status(500);
    console.log(`Error while reading page by ${id}`, error);
    res.json(error)
  }
});

pages_router.post('/page', (res, req) => {
  let newPage;
  try {
    newPage = PageService.createPage()
  } catch (error) {
    //TODO: реализовать корректную обработку ошибок
    console.log(error);
    res.error(400)
  }
  return res.send(newPage)
});

module.exports = pages_router;