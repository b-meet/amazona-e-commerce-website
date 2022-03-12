import React from "react";

const Pagination = ({ totalProducts, productsPerPage, changePage }) => {
	let pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className='pagenumber-container'>
			{pageNumbers.map((pageNumber) => {
				return (
					<li onClick={() => changePage(pageNumber)} key={pageNumber}>
						{pageNumber}
					</li>
				);
			})}
		</ul>
	);
};

export default Pagination;

//props are passed from home.js
