import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<Container className='py-3'>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/product/:id' element={<ProductScreen />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
