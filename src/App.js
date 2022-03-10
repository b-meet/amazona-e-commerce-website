import React from "react";
import Navigation from "./Navigation";
import Product from "./Product";
import Footer from "./Footer";
import Cart from "./Cart";

const App = () => {
	return (
		<>
			<Navigation />
			<article className='bunch-of-products'>
				<h1 className='company-name'>AMAZONA</h1>
				<p className='tag-line'>Sabki Appni Appni Dukan</p>
				<Product />
			</article>
			<Footer />
		</>
	);
};

export default App;
