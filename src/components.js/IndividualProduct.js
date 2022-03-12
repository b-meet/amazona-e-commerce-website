import React from "react";
import { useGlobalContext } from "./Context";
import { useNavigate } from "react-router-dom";

const IndividualProduct = () => {
	const { individualProductData, getInCartProductInfo } = useGlobalContext();
	const navigate = useNavigate();

	const { id, title, description, price, category, image, rating } =
		individualProductData;
	const { rate, count } = rating;

	return (
		<>
			<article className='product-page'>
				<img src={image} alt='Product' />
				<section className='product-info'>
					<h1>{title}</h1>
					<h4 className='category'>{category}</h4>
					<p>{description}</p>
					<span>$ {price}</span>
					<button
						className='add-btn'
						onClick={() => getInCartProductInfo(id, [individualProductData])}
					>
						Add to cart
					</button>
					<button className='buy-btn'>Buy now</button>
					<button onClick={() => navigate("/")}>Continue Shopping</button>
					<p className='rating'>coustomer Rating: {rate}/5</p>
					<p className='stock'>Stock: {count}</p>
				</section>
			</article>
		</>
	);
};

export default IndividualProduct;
