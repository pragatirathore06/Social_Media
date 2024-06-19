import mongoose from "mongoose";

let isConnected = false; // Track connection status

const connectToDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // Establish MongoDB connection
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "VibeZone",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true; // Update connection status

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    isConnected = false; // Reset connection status on error
    // Optionally, you may choose to rethrow the error or handle it further
  }
};

export default connectToDB;
