import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Navigation = () => {
	const { itemsAdded } = useGlobalContext();

	return (
		<nav>
			<ul className='nav-ul'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about-us'>About Us</Link>
				</li>
				<li>
					<Link to='/cart'>
						{itemsAdded ? `Cart ( ${itemsAdded} )` : `Cart`}
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
