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
    // try {
        const page_id = data[req.params.page_id];
        if (page_id >= 0 || page_id <= data) {
            res.status(200).send(page_id);
        } else {
            res.status(400).send('Error: no exist such id')
        }
    // } catch (e) {
    //     console.log(e);
    // }
});

pages_router.post('/page', (res, req) => {
    // try {
        const id = uuidv4();
        const message = {
            id,
            text: req.body.text,
        };
        data[id] = message;
        console.log(message);
        fs.appendFile("./data.js", JSON.stringify(message), (error) => {

            if (error) throw error; // если возникла ошибка
            console.log("Асинхронная запись файла завершена. Содержимое файла:");
            let data = fs.readFileSync("./data.js", "utf8");
            console.log(data);  // выводим считанные данные
        });
    // }catch (e) {
    //     console.log(e);
    // }

});

module.exports = pages_router;