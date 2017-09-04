const express = require('express');
const mongoose   = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev.config');
const { Contact } = require('./models');

const app = express();
const compiler = webpack(config);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/fact', {
  useMongoClient: true
});

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('tiny'));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', function(req, res) {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.post('/send-email', function(req, res) {
  const { name, email, company, message } = req.body;

  const contact = new Contact();
  contact.name = name;
  contact.email = email;
  contact.company = company;
  contact.message = message;
  contact
    .save()
    .then(function() {
      res.json({
        message: 'OK'
      });
    }).catch(function(err) {
      res.status(400);
      res.send(err);
    });
});

app.listen(3000, function() {
  console.log('serving on port 3000..');
});
