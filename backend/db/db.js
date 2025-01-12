import mongoose, { connect, mongo } from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error in DB connection: ", error);
        process.exit(1);
    }
}
