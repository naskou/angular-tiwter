const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  posts: [
    {
      postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
      post: { type: String },
      created: { type: Date, default: Date.now() }
    }
  ],
  following: [
    { userFollowed: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }
  ],
  followers: [
    { follower: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }
  ],
  notifications: [
    {
      senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      message: { type: String },
      viewProfile: { type: Boolean, default: false },
      created: { type: Date, default: Date.now() },
      read: { type: Boolean, default: false },
      date: { type: String, default: '' }
    }
  ],
  chatList: [
    {
      receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      msgId: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }
    }
  ],
  picVersion: { type: String, default: '1584213063' },
  picId: { type: String, default: 'iStock-476085198_h8n42f.jpg' },
  images: [
    {
      imgId: { type: String, default: '' },
      imgVersion: { type: String, default: '' }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
