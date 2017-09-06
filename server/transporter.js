const nodemailer = require('nodemailer');

module.exports = function (user, pass) {
  return nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    tls: true,
    auth: {
      user: user,
      pass: pass
    }
  });
}
