const express = require('express');
const app = express();
const port = 4500;

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index.html");
});


app.listen(port, function () {
    console.log(`Assignment running at http://localhost:${port}`);
});