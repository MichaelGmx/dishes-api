var mongoose = require('mongoose');

var OrderDetailSchema = new mongoose.Schema({
  order_header_ID: String,
  
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

  price_actual: Number,

  total_actual: Number,
  total_save: Number,
  // create_date: { type: Date, default: Date.now },
  // update_date: { type: Date, default: Date.now },
  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('OrderDetail', OrderDetailSchema);