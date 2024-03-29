const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./user.route');
const mongoose = require('mongoose');
const path = require('path');

app.use(require('cors')());
app.use(express.static(path.join(__dirname, 'main/dist/main')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/user', user);

mongoose.connect('mongodb://0.0.0.0:27017/blog', { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', err => console.log('MongoDB connection error:', err));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'main/dist/main/index.html'));
});
 
app.listen(8080, (err) => {
  if (err) throw err;
  console.log("Server running on port 8080");
});
