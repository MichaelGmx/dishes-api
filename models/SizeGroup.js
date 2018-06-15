var mongoose = require('mongoose');

var SizeGroupSchema = new mongoose.Schema({
  size_group_name: String,
  size_group_description: String,
  size_group_sort: Number,

  size_group_remark: String,

  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('SizeGroup', SizeGroupSchema);