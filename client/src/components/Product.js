import React from "react";
import { Card } from "react-bootstrap";
import Rating from './Rating'

const Product = ({ product }) => {
	console.log("product", product);
	const {
		_id,
		name,
		image,
		description,
		brand,
		category,
		price,
		countInStock,
		rating,
		numReviews,
	} = product;
	console.log("product._id", _id);
	console.log("numReviews", numReviews);
	return (
		<Card>
			<a href={`/product/${_id}`}>
				<Card.Img src={image} variant='top' />
			</a>
			<a href={`/product/${_id}`}>
				<Card.Body>
					<Card.Title>
						<strong>{name}</strong>
					</Card.Title>
					<Card.Text as='div'>
						<Rating text={`${numReviews} reviews`} value={rating}/>
					</Card.Text> 
					<Card.Text as='h3'>${price}</Card.Text>
				</Card.Body>
			</a>
		</Card>
	);
};

export default Product;
