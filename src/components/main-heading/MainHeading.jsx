import React from 'react';
import { motion } from 'framer-motion';
import { fadeLeft } from '../../configs/framerVariants';
import './main-heading.scss';
const MainHeading = ({ children, ...props }) => {
	return (
		<motion.h1 variants={fadeLeft} className='main-heading' {...props}>
			{children}
		</motion.h1>
	);
};

export default MainHeading;
