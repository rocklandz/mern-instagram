import mongoose from 'mongoose';
import colors from 'colors';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected'.cyan.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`.yellow);
    process.exit(1);
  }
};

export default connectDb;
