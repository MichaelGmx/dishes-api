var mongoose = require('mongoose');

var OrderHeaderSchema = new mongoose.Schema({
  transaction_no: String,
  // user_ID: String,
  // user_name: String,
  user: Object,
  
  order_status: String,
  payment_no: String,
  used_coupon: Object,
  total_actual: Number,
  total_save: Number,
  start_time: {type: Date, default: Date.now },
  end_time: {type: Date, default: Date.now },
  // create_date: { type: Date, default: Date.now },
  // update_date: { type: Date, default: Date.now },
  create_date: Date,
  update_date: Date,
  create_by: String,
  update_by: String,
  mark_del: { type: Boolean, default: false }
});

module.exports = mongoose.model('OrderHeader', OrderHeaderSchema);