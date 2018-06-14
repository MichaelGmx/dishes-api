var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  published_year: String,
  publisher: String,
  price: String,
  description: String,
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);