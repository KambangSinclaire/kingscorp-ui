const express = require("express");
const serveStatic = require('serve-static')
const path = require("path");

const port = process.env.PORT || 7878;
const app = express()
app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.get('/.*/', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})
app.listen(port, () => console.log("Served frontend on Port ", port));
