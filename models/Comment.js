var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  comment_text: String,
  comment_pic_path: String,
  comment_star: Number,
  
  // user_ID: String,
  // user_name: String,
  // user_pic_path: String,
  user: Object,

  // create_date: { type: Date, default: Date.now },
  // update_date: { type: Date, default: Date.now },
  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('Comment', CommentSchema);