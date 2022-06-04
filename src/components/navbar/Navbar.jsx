import './navbar.scss';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { fadeUp } from '../../configs/framerVariants';
import { useEffect, useState } from 'react';
const navbarVariants = {
	hidden: {
		transition: { staggerChildren: 0.3 },
	},
	visible: {
		transition: { staggerChildren: 0.3 },
	},
};
const Navbar = ({ sidebarOpen, toggleSidebar }) => {
	const [isScrollToDown, setIsScrollToDown] = useState();
	const handleScroll = () => {
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			setIsScrollToDown(true);
		} else {
			setIsScrollToDown(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<motion.div
			variants={navbarVariants}
			animate='visible'
			initial='hidden'
			className={`navbar${isScrollToDown ? ' shrinked' : ''}`}
		>
			<div className='navbar__container'>
				<div className='navbar__social'>
					<motion.a
						href='https://github.com/ghorbeldev'
						variants={fadeUp}
						className='navbar__social__item'
					>
						<FaGithub />
						<span>Github</span>
					</motion.a>
					<motion.a
						href='mailto: adem.ghorbel9@gmail.com'
						variants={fadeUp}
						className='navbar__social__item'
					>
						<MdOutlineMail />
						<span>Mail</span>
					</motion.a>
				</div>
				<motion.div
					variants={fadeUp}
					whileHover={{
						scale: [1, 1.05],
						transition: {
							duration: 0.3,
							repeat: Infinity,
							repeatType: 'reverse',
						},
					}}
					whileTap={{
						scale: 0.8,
					}}
					className={`navbar__toggle${sidebarOpen ? ' close' : ''}`}
					onClick={toggleSidebar}
				>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Navbar;
