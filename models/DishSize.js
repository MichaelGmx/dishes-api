var mongoose = require('mongoose');

var DishSizeSchema = new mongoose.Schema({
  size_category: String,
  size_name: String,
  size_price: Number,
  size_pic_path: String,
  size_sort: Number,
  size_limit: Number,
  size_promotions: Array,  // 适用优惠
  size_coupons: Array,     // 适用优惠券
  size_sales_volume: Number,
  size_remark: String,
  // create_date: { type: Date, default: Date.now },
  // update_date: { type: Date, default: Date.now },
  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  size_today_rest: Number,  // 今日剩餘
  is_default: Boolean,
  size_on_sale: Boolean,
  is_selected: { type: Boolean, default: false },
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('DishSize', DishSizeSchema);