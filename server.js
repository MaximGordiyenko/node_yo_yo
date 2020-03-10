require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pages = require('./routers/pages');
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/pages', pages);

app.use(express.static('public')); // relative path of client-side code
app.get('/', (req, res) => {
    res.sendFile("index.html", {root: __dirname});
});

app.listen(PORT, () => console.log('I spin your data on my port: 5000'));