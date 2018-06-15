var mongoose = require('mongoose');

var DishSizeSchema = new mongoose.Schema({
  size_group_ID: String,
  size_group_name: String,
  size_value_ID: String,
  size_value_name: String,

  dish_size_price: Number,
  dish_size_pic_path: String,
  
  dish_size_sort: Number,
  dish_size_limit: Number,

  dish_size_promotions: Array,  // 适用优惠
  dish_size_coupons: Array,     // 适用优惠券

  // size_today_rest: Number,  // 今日剩餘
  dish_size_stock: Number,     // 库存
  dish_size_on_sale: Boolean,  // 上架 状态
  is_default: Boolean,    // 是否为默认 被选
  is_selected: { type: Boolean, default: false },

  dish_size_sales_volume: Number,  // 销量
  dish_size_remark: String,
  // create_date: { type: Date, default: Date.now },
  // update_date: { type: Date, default: Date.now },
  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('DishSize', DishSizeSchema);