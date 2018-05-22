var mongoose = require('mongoose');

var DishSchema = new mongoose.Schema({
  dish_name: String,
  dish_description: String,

  // category_ID: String,
  // category_name: String,
  category: Object,

  tags: Array,
  subs: Array,
  has_multi_size: Boolean,
  dish_sizes: Array,

  dish_price: Number,
  dish_pic_path: String,
  dish_sort: Number,
  dish_limit: Number,
  dish_promotions: Array,   // 适用优惠
  dish_coupons: Array,      // 适用优惠券

  comments: Array,

  dish_sales_volume: Number,
  dish_remark: String,
  // create_date: { type: Date, default: Date.now },
  // update_date: { type: Date, default: Date.now },
  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  dish_today_rest: Number,  // 今日剩餘
  dish_on_sale: Boolean,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('Dish', DishSchema);