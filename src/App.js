import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./Home";
import Cart from "./Cart";
import Aboutus from "./Aboutus";
import IndividualProduct from "./IndividualProduct";

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
