const mongoose = require ('mongoose');
const Footprint = mongoose.model('Footprint', footprintSchema);

const footprintSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: {
          type: String,
          required: false,
        }
      }
    ],
    author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    comments: [commentSchema]
  },
  { timestamps: true }
);

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  },
  { timestamps: true }
);

module.exports = Footprint;