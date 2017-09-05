const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(morgan('tiny'));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send-email', function(req, res) {
  const { name, email, company, message } = req.body;
  res.json({
    message: 'OK'
  });

  // res.status(400);
  // res.send(err);
});

app.listen(3000, function() {
  console.log('serving on port 3000..');
});
