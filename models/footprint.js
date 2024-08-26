const mongoose = require ('mongoose');

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
          required: false,
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


const Footprint = mongoose.model('Footprint', footprintSchema);

module.exports = Footprint;