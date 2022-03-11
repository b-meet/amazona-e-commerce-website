import React from "react";

const url = "https://fakestoreapi.com/products";

const Product = ({ data, loading }) => {
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
									<a href='#'>
										{title.length > 35 ? title.slice(0, 35) + "..." : title}
									</a>
								</h2>
								<p>
									{" "}
									{description.length > 150
										? description.slice(0, 150) + "..."
										: description}
								</p>
								<span>$ {price}</span>
								<button className='add-btn'>Add to Cart</button>
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
