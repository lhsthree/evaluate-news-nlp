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
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//get route
app.get('/all', getInfo);
function getInfo (req, res) {
    res.send(projectData);
};
//post route
app.post('/add', sendInfo)
function sendInfo (req, res) {
    projectData= req.body.url
    res.send(projectData)
}