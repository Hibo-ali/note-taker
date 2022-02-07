const router = require("express").Router();
const fs = require('fs');
const database = require("../db/db.json");

//GET request API route
router.get('/notes', function(req, res) {
  readFileAsync(./develop)
});



