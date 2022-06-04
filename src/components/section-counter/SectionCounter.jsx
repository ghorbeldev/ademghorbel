import { motion } from 'framer-motion';
import React from 'react';
import sidebarNav from '../../configs/sidebarNav';
import { Link } from 'react-scroll';
import './section-counter.scss';
import { fadeUp } from '../../configs/framerVariants';
const sectionCounterVariants = {
	hidden: {},
	visible: {
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.25,
			staggerDirection: 1,
		},
	},
};
const SectionCounter = ({ activeIndex, setActiveIndex }) => {
	return (
		<div className='section-counter'>
			<motion.ul
				variants={sectionCounterVariants}
				animate='visible'
				initial='hidden'
				className='section-counter__balls'
			>
				{sidebarNav.map((item, index) => (
					<motion.li
						variants={fadeUp}
						className={`section-counter__balls__ball`}
						key={index}
					>
						<Link
							to={item.to}
							smooth={true}
							duration={500}
							spy={true}
							onClick={() => setActiveIndex(index)}
							offset={-80}
						></Link>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

export default SectionCounter;
