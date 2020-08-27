require("marko/node-require");
const express = require('express');
var markoExpress = require("marko/express");
const routes = require('./routes');

const app = express();

app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use(markoExpress());
app.use(routes)


app.listen(3333)