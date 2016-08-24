/*
btg.bot@gmail.com
pass= c0d3ch2nge

btg.test.receive@gmail.com
pass=t3streceive
*/


var fs = require('fs'),
https = require('https'),
express = require('express'),
bodyParser = require('body-parser'),
multer = require('multer'),
nodemailer = require('nodemailer'),
upload = multer(),
app = express();

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
   service : "gmail",
   auth    : {
     user     : "btg.bot@gmail.com",
     pass : "c0d3ch2nge"
   }
 });
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
    var emailBody = "Name: " + req.body.name + ". Email: " + req.body.email + ". Reason: " + req.body.reason;
    var mailOptions = {
        from: '"BTG Bot" <btg.bot@gmail.com>',
        subject: 'New Get Help Request',
        to: 'btg.test.receive@gmail.com',
        text: emailBody
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    res.header('Content-type', 'text/html');
    return res.end('<h1>Sent your fuckin email.</h1>');
});
