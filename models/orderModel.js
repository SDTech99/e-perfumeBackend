const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }],
  total: { type: Number, required: true },
  status: { type: String, default: 'Pending' }  // e.g., Pending, Shipped, Delivered
}, { timestamps: true });

module.exports = mongoose.model('orderModel', orderSchema);
