const express = require('express');
const randomWords = require('random-words');
require("./config.js");

var app = express();
app.set("view engine", 'ejs');

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
	res.render('../public/views/index.ejs');
});

console.log(randomWords(20));
app.listen(process.env.PORT || 3000, () => {
	"Server is running on port 3000!";
});