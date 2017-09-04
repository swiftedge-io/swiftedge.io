const mongoose = require('mongoose');

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = mongoose.model('Contact', {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: function(value) {
      return emailRegex.test(value);
    }
  },
  company: String,
  message: {
    type: String,
    required: true
  }
});

module.exports = {
  Contact
};
