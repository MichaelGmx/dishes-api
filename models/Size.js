var mongoose = require('mongoose');

var SizeSchema = new mongoose.Schema({
  size_value: String,
  size_value_description: String,
  size_value_sort: Number,

  size_group_ID: String,
  size_group_name: String,

  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('Size', SizeSchema);