'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');
var bodyParser= require('body-parser');
var app = express();
app.use(bodyParser.json());
var upload = multer({dest: 'api/fileanalyse/'});
// require and use "multer"...



app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });


app.post('/api/fileanalyse',upload.single('upfile'), function(req, res,next){
  return res.json(req.file);
});




app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
