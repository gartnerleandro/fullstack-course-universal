"use strict"

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(3000, function(req, res){
  console.log('Web-server at port 3000');
})