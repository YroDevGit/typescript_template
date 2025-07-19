import mongoose from 'mongoose';

const MONGO_URI:any = process.env.MONGO_HOST;

const connectMONGO = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: process.env.MONGO_DBNAME || 'nodejs',
      user: process.env.MONGO_USER || undefined,
      pass: process.env.MONGO_PASS || undefined,
      authSource: 'admin',
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectMONGO;
