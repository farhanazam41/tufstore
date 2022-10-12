import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "./Product.js";

const HomeScreen = () => {
	const productsList = products.map((product) => (
		<Col sm={12} md={4} lg={3} xl={3} key={product._id}>
			<Product product={product} />
		</Col>
	));
	return (
		<>
			<Row>{productsList}</Row>
		</>
	);
};

export default HomeScreen;
