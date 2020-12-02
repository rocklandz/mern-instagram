import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    avatar: {
      type: String,
      default:
        'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=KhY8BuG5Py4AX-pjXPn&oh=7cc9d6508779d33ee5371a603e9b093a&oe=5FF1288F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
