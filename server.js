const express = require("express");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 7878;
const app = express()
app.use(cors());
app.use(express.static(path.join(__dirname,'/dist')));
app.get('/', (req, res, next) => {
    res.status(200).send(path.join(__dirname, '/dist/index.html'));
})
app.listen(port, () => console.log("Served on Port ", port));
