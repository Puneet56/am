import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './components/HeroSection';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<HeroSection />
		</BrowserRouter>
	);
}

export default App;
