import React, { useContext, useState } from "react";

const ProductContext = React.createContext(); // creating a context

export const Context = ({ children }) => {
	//the data for the single product is in the state value, which will be updated as the user clicks on the product title
	const [individualProductData, setIndividualProductData] = useState([]);
	const [itemsAdded, setItemsAdded] = useState(0);
	//items in the cart
	const [selectedProductInfo, setSelectedProductInfo] = useState([]);

	// this function gets the info of individual product to display it on product page
	const getIndividualProductInfo = (id, data) => {
		setIndividualProductData(data.find((item) => item.id === id));
	};

	// this function gets info of the products added to cart by users
	const getSelectedProductInfo = (id, data) => {
		let selectedProduct = data.find((item) => item.id === id);
		setSelectedProductInfo([...selectedProductInfo, selectedProduct]);

		setItemsAdded((prevState) => prevState + 1);
	};

	return (
		<ProductContext.Provider
			value={{
				getIndividualProductInfo,
				individualProductData,
				itemsAdded,
				getSelectedProductInfo,
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
