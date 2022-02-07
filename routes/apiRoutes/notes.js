const router = require("express").Router();
const fs = require('fs');
const { append } = require("vary");
const database = require("../db/db.json");

//GET request API route

router.get('/notes', function(req, res) {
  readFileAsync('./develop/db/db.json', 'utf-8').then(function(data) {
      notes = [].concat(JSON.parse(data))
      res.json(notes);
  }); 
});

// POST request API Route

router.post('/notes', function(req, res) {
    const note = req.body;
    readFileAsync('./develop/db/db.json', 'utf-8').then(function(data) {
       const newNote = [].concat(JSON.parse(data));
       note.id = newNote.length + 1 
       newNote.push(note) 
       return notes
    }).then(function(notes) {
        writeFileAsync('./develop/db/db.json', JSON.stringify(notes))
        res.json(note);
    })
});

// Delete Requests
append.delete('/notes/:id', function(req, res) {
    const deleteId = parseInt
});





