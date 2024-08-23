//Tool to conect app with DB
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

// Config header HTTP - CORS
app.use(cors());


// import Routes
//...

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Static Folder
app.use(express.static('uploads'));


//Config Routes
// ...
module.exports = app
