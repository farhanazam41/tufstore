import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {

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

	return (
		<Card>
			<Link to={`/product/${_id}`}>
				<Card.Img src={image} variant='top' />
			</Link>
			<Link to={`/product/${_id}`}>
				<Card.Body>
					<Card.Title>
						<strong>{name}</strong>
					</Card.Title>
					<Card.Text as='div'>
						<Rating text={`${numReviews} reviews`} value={rating} />
					</Card.Text>
					<Card.Text as='h3'>${price}</Card.Text>
				</Card.Body>
			</Link>
		</Card>
	);
};

export default Product;
