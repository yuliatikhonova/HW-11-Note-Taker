const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {//home page request to be sent the index.html file
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.get("/notes", (req, res) => {//notes page request to be sent the notes.html file
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

//get api note

//post the data



app.listen(port, () => console.log(`Its listening to port ${port}!`));