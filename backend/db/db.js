import mongoose from "mongoose";

const mongoURI = "mongodb://user:pass@db:27017/search-request?authSource=admin";
export const conn = await mongoose.connect(mongoURI).then(async () => {
    console.log("Connected to MongoDB");
    // switch to database
    const conn = mongoose.connection.useDb('search-request');

    return conn;

}).catch((err) => {
    console.error(`MongoDB error: ${err}`);
});




