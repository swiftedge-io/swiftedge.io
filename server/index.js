const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('../config');
const transporter = require('./transporter')(config.gmailUser, config.gmailPass);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('tiny'));

app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/send-email', function(req, res) {
  const { name, email, company, message } = req.body;

  transporter.sendMail({
        from: `"${name}" <a.rodsott@gmail.com>`,
        replyTo: `${email}`,
        to: 'a.rodsott@gmail.com',
        subject: `${company} - Contacto Web`,
        text: message
    }, (error, info) => {
        if (error) {
          res.status(400);
          return res.send(error);
        } else {
          return res.json({
            message: 'OK'
          });
        }
      }
    );
});

app.listen(3000, function() {
  console.log('serving on port 3000..');
});
