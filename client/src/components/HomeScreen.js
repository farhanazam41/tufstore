import React, { useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Product from "./Product.js";
import axios from 'axios';

const HomeScreen = () => {

	const [ products, setProducts] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try{
				const { data } = await axios.get('/api/products');
				setProducts(data);
			}catch(err){
				console.log(err);
			}
		}
		fetchProducts()
	},[])

	const productsList = products?.map((product) => (
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
