var mongoose = require('mongoose');

var CartLineSchema = new mongoose.Schema({
  user_ID: { type: String, required: true },
  // category_ID: String,
  // category_name: String,
  category: Object,

  // dish_ID: String,
  // dish_name: String,
  // dish_description: String,
  // dish_pic_path: String,
  // dish_price: Number,
  // dish_qty: Number,
  // dish_promotion: Object,
  // dish_coupon: Object,
  dish: Object,

  // size_ID: String,
  // size_name: String,
  // size_pic_path: String,
  // size_price: Number,
  // size_qty: Number,
  // size_promotion: Object,
  // size_coupon: Object,
  dish_size: Object,

  total_price: Number,  // 小計
  // create_date: { type: Date, default: Date.now },
  // update_date: { type: Date, default: Date.now },
  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('CartLine', CartLineSchema);