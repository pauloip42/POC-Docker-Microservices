const express = require('express');
const email = require('./services/mailer');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/', email);

app.listen(port, () => {console.log('Started!')});