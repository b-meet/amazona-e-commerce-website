import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
	const navigate = useNavigate();

	return (
		<section className='empty-cart'>
			<p>Your Cart Is Empty !</p>
			<button onClick={() => navigate("/")}>Contiune Shopping</button>
		</section>
	);
};

export default Cart;
