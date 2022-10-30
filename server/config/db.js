import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		console.log(`Mongo DB Connected: ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.error(`error : ${error.message}`.red.bold);
		process.exit(1);
	}
};

export default connectDB;
