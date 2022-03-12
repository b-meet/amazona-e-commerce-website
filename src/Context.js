import React, { useContext, useState } from "react";

const ProductContext = React.createContext();

export const Context = ({ children }) => {
	const [individualProductData, setIndividualProductData] = useState([]);
	const [inCartProductInfo, setInCartProductInfo] = useState([]);
	const [number, setNumber] = useState(1);

	const getIndividualProductInfo = (id, data) => {
		setIndividualProductData(data.find((item) => item.id === id));
	};

	const getInCartProductInfo = (id, data) => {
		const specialItem = data.find((product) => product.id === id);
		setInCartProductInfo([...inCartProductInfo, specialItem]);
	};

	const remove = (id) => {
		setInCartProductInfo(uniqueItemsInCart.filter((item) => item.id !== id));
	};

	const uniqueItemsInCart = [...new Set(inCartProductInfo)];
	const itemsAdded = uniqueItemsInCart.length;

	return (
		<ProductContext.Provider
			value={{
				getIndividualProductInfo,
				individualProductData,
				itemsAdded,
				getInCartProductInfo,
				uniqueItemsInCart,
				remove,
				number,
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
