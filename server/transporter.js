const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  tls: true,
  auth: {
    user: 'a.rodsott@gmail.com',
    password: 'ixhqymmuwzrzctkc'
  }
});
