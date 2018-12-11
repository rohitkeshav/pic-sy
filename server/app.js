/*
  Code reference: Professor Phil Barresi: Lecture 04, Lecture 06
*/

const whitelist = ['http://localhost:8000']
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// allow cross origin calls by port 3000
app.use(cors());
// app.use(cors(corsOptions));

app.use(bodyParser.json());
const configRoutes = require("./routes");

configRoutes(app);

app.listen(3000, () => {
    console.log('Picsy server up');
    console.log("Routes on http://localhost:3000");
});
