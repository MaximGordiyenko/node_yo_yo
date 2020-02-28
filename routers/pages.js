const express = require('express');
const PageService = require('../services/PageService');
const pages_router = express.Router();
let data = require('../data');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// method: GET, path: /pages
pages_router.get('/', (req, res) => {
  res.json(Object.values(data));
});

pages_router.get('/:page_id', (req, res) => {
  let page;
  try {
    page = PageService.readPage()
  } catch (error) {
    //TODO: реализовать корректную обработку ошибок
    console.log(error);
    res.error(400)
  }
  return res.send(page)
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