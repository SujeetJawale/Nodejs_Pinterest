const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  user:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  }],
  currentDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: []
  }
});

// Create the Post model
module.exports = mongoose.model('Post', postSchema);
