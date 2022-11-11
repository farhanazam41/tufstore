import React, { useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./Product.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions.js";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";

const HomeScreen = () => {

	const dispatch = useDispatch()
	const selector = useSelector(state => state.productList)

	const { loading, error, products } = selector;

	console.log('selector', selector)

	useEffect(() => {
		dispatch(fetchProducts());
	},[dispatch])

	const productsList = products?.map((product) => (
		<Col sm={12} md={4} lg={3} xl={3} key={product._id}>
			<Product product={product} />
		</Col>
	));

	if(loading) {
		return (
			<Loader/>
		)
	}
	if(error) {
		return (
			<Message variant='danger'>{error}</Message>
		)
	}
	if(!loading && !error){
		return (
			<>
				<Row>{productsList}</Row>
			</>
		);
	}
	
};

export default HomeScreen;
