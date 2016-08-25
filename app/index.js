var fs = require('fs'),
https = require('https'),
express = require('express'),
bodyParser = require('body-parser'),
multer = require('multer'),
upload = multer(),
app = express();

https.createServer(
    { key: fs.readFileSync('./ssl/key.pem'),
      cert: fs.readFileSync('./ssl/cert.pem') }
 ,app).listen(8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/', function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>Welcome to Secure BTG.</h1>');
});

app.post('/sendEmail', upload.array(), function(req, res, next){
    console.log(req.body);
    res.header('Content-type', 'text/html');
    return res.end('<h1>You want some shit?.</h1>');
});
