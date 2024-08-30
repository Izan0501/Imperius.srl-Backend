//Tool to conect app with DB
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const apiVersion = process.env.API_VERSION

// require('dotenv').config();

const app = express();

// Config header HTTP - CORS
app.use(cors());

// import Routes
const authRouter = require('./router/auth')

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Static Folder
app.use(express.static('uploads'));


//Config Routes
app.use(`/api/${apiVersion}`, authRouter);

module.exports = app
