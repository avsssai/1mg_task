import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors());
dotenv.config();

app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to the API route.",
	});
});

app.use("/todos", todoRoutes);

mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(5000, () => {
			console.log("Listenting on Port 5000");
		});
	});

mongoose.set("useFindAndModify", false);
