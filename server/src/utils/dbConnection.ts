import mongoose from "mongoose";
import config from "../config";

export const connectDbase = async () => {
 await mongoose.connect(config.DB_URL);
};
