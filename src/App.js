import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import './scss/App.scss';
import PageWrapper from './configs/PageWrapper';

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
	const [activeIndex, setActiveIndex] = useState(-1);

	return (
		<>
			<Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
			<Sidebar
				sidebarOpen={sidebarOpen}
				toggleSidebar={toggleSidebar}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			/>
			<PageWrapper activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
		</>
	);
}

export default App;
