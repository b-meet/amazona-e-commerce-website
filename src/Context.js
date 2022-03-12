import React, { useContext, useState } from "react";

const ProductContext = React.createContext();

export const Context = ({ children }) => {
	const [individualProductData, setIndividualProductData] = useState([]); //data of details for an individual product page
	const [inCartProductInfo, setInCartProductInfo] = useState([]); //data of products to be shown in cart
	const [number, setNumber] = useState(1); //number of item

	//gets the product details for product page
	const getIndividualProductInfo = (id, data) => {
		setIndividualProductData(data.find((item) => item.id === id));
	};

	//gets the details of products to be added in cart
	const getInCartProductInfo = (id, data) => {
		const specialItem = data.find((product) => product.id === id);
		setInCartProductInfo([...inCartProductInfo, specialItem]);
	};

	//removes product frmo the cart
	const remove = (id) => {
		setInCartProductInfo(uniqueItemsInCart.filter((item) => item.id !== id));
	};

	//sorts unique products from the products to be added in cart
	const uniqueItemsInCart = [...new Set(inCartProductInfo)];
	const itemsAdded = uniqueItemsInCart.length;

	//total amount to pay
	let grandTotal = uniqueItemsInCart.map((item) => item.price * number);
	let payableAmount = (grandTotal) => {
		let sum = 0;
		grandTotal.map((value) => (sum += value));
		return sum;
	};

	//updates the quantity of products
	const increaseQuantity = (id) => {
		uniqueItemsInCart.map((item) => {
			if (item.id === id) {
				setNumber((prevState) => prevState + 1);
			}
		});
	};

	const decreaseQuantity = (id) => {
		uniqueItemsInCart.map((item) => {
			if (item.id === id) {
				setNumber((prevState) => prevState - 1);
			}
		});
	};

	return (
		<ProductContext.Provider
			value={{
				getIndividualProductInfo,
				individualProductData,
				itemsAdded,
				getInCartProductInfo,
				uniqueItemsInCart,
				increaseQuantity,
				decreaseQuantity,
				remove,
				number,
				grandTotal,
				payableAmount,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(ProductContext);
};

//children prop here is the App component (check index.js)
