const mongoose = require('mongoose');

const perfumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  scentType: {
    type: String, // e.g., "Eau de Parfum", "Eau de Toilette"
    enum: ['Eau de Parfum', 'Eau de Toilette', 'Cologne', 'Parfum', 'Body Mist'],
    required: true
  },
  gender: {
    type: String,
    enum: ['Men', 'Women', 'Unisex'],
    required: true
  },
  topNotes: [String],
  middleNotes: [String],
  baseNotes: [String],
  description: {
    type: String,
    maxlength: 2000
  },
  volumeML: {
    type: Number, // e.g., 50ml, 100ml
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  discount: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  images: {
    type: [String],
    validate: {
      validator: arr => arr.every(url => typeof url === 'string' && url.startsWith('http')),
      message: 'All images must be valid URLs.'
    }
  },
  sku: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    match: /^[A-Z0-9\-]+$/
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  tags: {
    type: [String],
    index: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  ratings: {
    average: { type: Number, default: 0, min: 0, max: 5 },
    count: { type: Number, default: 0 }
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

// Full-text search support
perfumeSchema.index({ name: 'text', description: 'text', brand: 'text', tags: 'text' });

module.exports = mongoose.model('Perfume', perfumeSchema);