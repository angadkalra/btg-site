var fs = require('fs'),
https = require('https'),
express = require('express'),
app = express();

https.createServer(
    { key: fs.readFileSync('./ssl/key.pem'),
      cert: fs.readFileSync('./ssl/cert.pem') }
 ,app).listen(8080);

app.get('/', function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>Welcome to the Secure BTG Portal.</h1>');
});
