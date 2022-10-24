import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";
import Rating from "./Rating";

const ProductScreen = () => {
	const params = useParams();
	const [product, setProduct] = useState(null);
	const [ error, setError ] = useState(null);

	// const product = products.find((p) => p._id === params.id);
	useEffect(() => {
		const productId = window.location.pathname.split("/")[2];
		const fetchProduct = async () => {
			try {
				const { data } = await axios.get(`/api/products/${productId}`);
				console.log("data", data);
				setProduct(data);
			} catch (err) {
				const { data } = err.response;
				console.log(data.message);
				setError(data.message);
			}
		};
		fetchProduct();
	}, []);
	console.log("params", params);
	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{!product && error && <h3>{error}</h3>}
			{product && (
				<Row>
					<Col md={6}>
						<Image src={product.image} alt={product.name} fluid />
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{product.name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item>Price: ${product.price}</ListGroup.Item>
						</ListGroup>

						<ListGroup variant='flush'>
							<ListGroup.Item>
								Description: {product.description}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>${product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>
											{product.countInStock > 0 ? "In Stock" : "Out of stock"}
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Button
											className='btn-block'
											type='button'
											disabled={product.countInStock === 0}
										>
											Add to Cart
										</Button>
									</Row>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductScreen;
