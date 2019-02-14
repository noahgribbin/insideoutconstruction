const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer'); 
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({ path:`${__dirname}/.env`});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser);
app.use(express.static(`${__dirname}/dist`));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/send-email', function(req, res) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  }); 
  const mailOptionsQuote = {
    from: req.body.email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `(WEBSITE) Quote for ${req.body.project} for ${req.body.name}`,
    text: req.body.message,
  };
  const mailOptionsTestimonial = {
    from: req.body.email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `(WEBSITE) Testimonial from ${req.body.name}`,
    text: req.body.message,
  };
  let mailOptions;
  
  req.body.emailType === 'quote' ? mailOptions = mailOptionsQuote : mailOptions = mailOptionsTestimonial;

  transporter.sendMail(mailOptions, (err, data) => {
    if(err) {
      console.log('USERNAME', process.env.EMAIL_USERNAME)
      console.log('PASSWORD', process.env.EMAIL_PASSWORD)
      return console.log('send mail error', err);
    }
    console.log('Message Sent: %s', data.messageId);
    return res.status(200);
  });
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000);
