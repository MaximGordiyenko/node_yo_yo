const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pages = require('./routers/pages');
const PORT = process.env.PORT;

// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/pages', pages);

app.listen(PORT, () => console.log('I spin your data on my port: 5000'));