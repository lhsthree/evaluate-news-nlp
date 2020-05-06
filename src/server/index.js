var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

let projectData = {}

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 8080!')
})
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get("/api", function (req, res) {
  let obj = [];

  textapi.sentiment(
    {
      text: req.query.input,
      mode: "Document",
    },
    function (error, response) {
      if (error === null) {
        //do the mapping work here
      }
      res.send(response);
    }
  );
})