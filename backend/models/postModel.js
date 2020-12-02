import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: { type: String, required: true },
    avatar: {
      type: String,
    },
    image: { type: String, required: true },
    caption: { type: String },
    likes: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        name: { type: String },
      },
    ],
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        name: { type: String },
        comment: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
