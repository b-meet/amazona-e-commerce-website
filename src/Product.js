import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Product = ({ data, loading }) => {
	const { getIndividualProductInfo, getSelectedProductInfo } =
		useGlobalContext();

	return (
		<>
			{loading ? (
				<h1 className='loading'>Loading...</h1>
			) : (
				data.map(({ id, image, title, description, price }) => {
					return (
						<section key={id} className='single-product'>
							<img src={image} alt='product preview' />
							<div className='product-details'>
								<h2>
									<Link
										onClick={() => getIndividualProductInfo(id, data)}
										to={"/product-page"}
									>
										{title.length > 35 ? title.slice(0, 35) + "..." : title}
									</Link>
								</h2>
								<p>
									{" "}
									{description.length > 150
										? description.slice(0, 150) + "..."
										: description}
								</p>
								<span>$ {price}</span>
								<button
									onClick={() => getSelectedProductInfo(id, data)}
									className='add-btn'
								>
									Add to Cart
								</button>
								<button className='buy-btn'>Buy Now</button>
							</div>
						</section>
					);
				})
			)}
		</>
	);
};

export default Product;
