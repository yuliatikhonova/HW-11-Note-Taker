const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
  });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname + "/notes.html"));
  });

  app.listen(port, () => console.log(`Its listening to port ${port}!`))