const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {//home page request to be sent the index.html file
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.get("/notes", (req, res) => {//notes page request to be sent the notes.html file
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// Reads the db.json file and shows in terminal
app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err, jsonString) => {
        if (err) {
           return console.log("No go:", err)  
        }
        console.log('File data:', jsonString)
        res.json(JSON.parse(jsonString));
    })
});

//post the data
app.post("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err, jsonString) => {
        if (err) {
           return console.log("No go:", err)  
        }
       
        fs.writeFile(path.join(__dirname, "db", "db.json"), _________, (err) => {
            if (err) {return console.log(err);}
            console.log("Success!");
        });
    })
});


app.listen(port, () => console.log(`Its listening to port ${port}!`));

