#!/bin/env node

var fs = require('fs');

fs.readFile('posters.html', 'utf-8', function(err, data) {

  console.log(data);


  var posters = data.match(/\w*.jpg/gi);

  console.log('found ' + posters.length + ' posters.');

});
