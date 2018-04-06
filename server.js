const express = require('express');
const app = express();

console.log('Node is working')


//create server
app.listen(3000, function() {
    console.log('listening on 3000')
  })


  app.get('/', function(req, res) {
    res.send('Hello World')
  })