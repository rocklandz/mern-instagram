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
        '//res.cloudinary.com/duczq6lyl/image/upload/v1609663119/rockland/e8x71f71l9a0mw6zxtqd.jpg',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
