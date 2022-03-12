import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components.js/Navigation";
import Footer from "./components.js/Footer";
import Home from "./components.js/Home";
import Cart from "./components.js/Cart";
import Aboutus from "./components.js/Aboutus";
import IndividualProduct from "./components.js/IndividualProduct";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} exact />
					<Route path='/cart' element={<Cart />} />
					<Route path='/about-us' element={<Aboutus />} />
					<Route path='/product-page' element={<IndividualProduct />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
