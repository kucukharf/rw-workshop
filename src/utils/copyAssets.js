var ncp = require('ncp').ncp;
 
ncp.limit = 16;

var source = './api/';
var destination = './build/api/';
 
ncp(source, destination, function (err) {
 if (err) {
   return console.error(err);
 } 
 console.log('done!');
});