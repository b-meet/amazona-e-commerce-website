import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";

const Cart = () => {
	const {
		uniqueItemsInCart,
		getIndividualProductInfo,
		remove,
		number,
		grandTotal,
		payableAmount,
	} = useGlobalContext();

	const navigate = useNavigate();

	return (
		<>
			{uniqueItemsInCart.length ? (
				<>
					{uniqueItemsInCart.map(({ image, title, price, id }) => {
						let subTotal = price * number;
						return (
							<article className='container' key={id}>
								<img src={image} alt='product' />
								<section className='selected-product-info'>
									<div>
										<Link
											onClick={() =>
												getIndividualProductInfo(id, uniqueItemsInCart)
											}
											to='/product-page'
										>
											<h4>{title}</h4>
										</Link>
										<h5>$ {price}</h5>
									</div>
									<div className='counter'>
										<button>-</button>
										<p>{number}</p>
										<button>+</button>
										<button onClick={() => remove(id)} className='remove-item'>
											Remove Form Cart
										</button>
									</div>
								</section>
								<p className='total'>Total: $ {subTotal}</p>
							</article>
						);
					})}
					<article className='price-details-container'>
						<p>Total: $ {payableAmount(grandTotal)}</p>
						<button>Proceed To Pay</button>
					</article>
				</>
			) : (
				<section className='empty-cart'>
					<p>Your Cart Is Empty !</p>
					<button onClick={() => navigate("/")}>Contiune Shopping</button>
				</section>
			)}
		</>
	);
};

export default Cart;
