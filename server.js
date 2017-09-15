const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname+ '/dist'));

app.listen(process.env.Port || 8080);

app.get('/*', function (request,response) {
   response.send(path.join(__dirname + '/dist/index.html'));
})

console.log('Server is running');

