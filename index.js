const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();

// DOTENV CONFIG
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// MONGO CONFIG
const mongoConnect = require('./src/config/mongo.js');
mongoConnect();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world!');
});
app.use('/user', require('./src/routes/user.js'));

app.listen(5000, () => {
    console.log(`Listening on port 5000`);
});

module.exports = app;