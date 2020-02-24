const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routers/pages');

app.use(bodyParser.json());

app.use('/pages', users);

app.listen(4000, () => console.log('I spin your data on my port: 4000'));