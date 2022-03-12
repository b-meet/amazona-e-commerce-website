import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Product from "./Product";

const url = "https://fakestoreapi.com/products";

const Home = () => {
	const reducer = (state, action) => {
		if (action.type === "ARRIVED_DATA") {
			return { ...state, details: action.payload, loading: false };
		}
		if (action.type === "CHANGE_PAGE") {
			return { ...state, currentPage: action.payload };
		}
	};

	//initial value for state

	const initialState = {
		details: [],
		loading: true,
		currentPage: 1,
		productsPerPage: 5,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	//fetching the data

	useEffect(() => {
		const fetchdetails = async () => {
			const request = await axios.get(url);
			dispatch({ type: "ARRIVED_DATA", payload: request.data });
		};

		fetchdetails();
	}, []);

	//get data required for single page

	const indexOfLastItem = state.currentPage * state.productsPerPage;
	const indexOfFirstItem = indexOfLastItem - state.productsPerPage;
	const requiredData = state.details.slice(indexOfFirstItem, indexOfLastItem);

	//change page number

	const changePage = (pageNumber) =>
		dispatch({ type: "CHANGE_PAGE", payload: pageNumber });

	return (
		<article className='bunch-of-products'>
			<h1 className='company-name'>AMAZONA</h1>
			<p className='tag-line'>Sabki Appni Appni Dukan</p>
			<Product data={requiredData} loading={state.loading} />
			<Pagination
				totalProducts={state.details.length}
				productsPerPage={state.productsPerPage}
				changePage={changePage}
			/>
		</article>
	);
};

export default Home;
