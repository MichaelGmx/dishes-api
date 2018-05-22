var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  category_name: { type: String, unique: true, required: true },
  category_description: String,
  category_sort: { type: Number, unique: true, required: true },
  category_pic_path: String,
  // create_date: { type: Date, default: Date.now },
  // update_date: { type: Date, default: Date.now },
  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('Category', CategorySchema);