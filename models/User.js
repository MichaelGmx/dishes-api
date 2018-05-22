var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user_name: String,
  user_password: String,
  user_pic_path: String,
  user_level: Number,
  user_phone: Number,
  user_wechat: Array,
  create_date: { type: Date, default: Date.now },
  update_date: { type: Date, default: Date.now },
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);