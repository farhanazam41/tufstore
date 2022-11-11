import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get(
	"/",
	asyncHandler(async (req, res) => {
		try {
			const products = await Product.find({});

			res.send(products);
		} catch (error) {}
	})
);

router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		const { id } = req.params;
		const product = await Product.findById(id);
		if (product) {
			res.send(product);
		} else {
			res.status(404);
			throw new Error('Product Not found')
		}
	})
);

export default router;
