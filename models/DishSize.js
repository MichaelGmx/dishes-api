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

  // size_today_rest: Number,  // 今日剩餘
  size_stock: Number,     // 库存
  size_on_sale: Boolean,  // 上架 状态
  is_default: Boolean,    // 是否为默认 被选
  is_selected: { type: Boolean, default: false },

  size_sales_volume: Number,  // 销量
  size_remark: String,
  // create_date: { type: Date, default: Date.now },
  // update_date: { type: Date, default: Date.now },
  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('DishSize', DishSizeSchema);