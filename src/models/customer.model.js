let mongoose = require('mongoose');

const server = 'ds217310.mlab.com:17310';
const database = 'rest-api-node';
const user = 'igorpaschoa';
const password = 'admin1';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);
