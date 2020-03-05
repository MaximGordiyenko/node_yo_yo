const express = require('express');
const PageService = require('../services/PageService');
const pages_router = express.Router();
// let data = require('../data');
// const { v4: uuidv4 } = require('uuid');
// const fs = require('fs');
// const url = require('url');


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

pages_router.post('/page', (req, res) => {
  // let newPage;
  try {
      let reqData = {name: req.body.name, pass: req.body.pass, text: req.body.text};
      console.log({id: 10, reqData});
      return res.send(PageService.createPage(reqData));
      // res.end();
    // newPage = PageService.createPage()
  } catch (error) {
    //TODO: реализовать корректную обработку ошибок
    console.log(error);
    res.error(400)
  }
  // return res.send(newPage)
});

module.exports = pages_router;