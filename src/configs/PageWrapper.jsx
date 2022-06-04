import React from 'react';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Hero from '../components/hero/Hero';
import Portfolio from '../components/portfolio/Portfolio';
import SectionCounter from '../components/section-counter/SectionCounter';
import Skills from '../components/skills/Skills';
const PageWrapper = ({ activeIndex, setActiveIndex }) => {
	return (
		<>
			<Hero />
			<SectionCounter
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			/>
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</>
	);
};

export default PageWrapper;
