import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import sidebarNav from '../../configs/sidebarNav';
import './sidebar.scss';
import variables from '../../scss/abstracts/_variables.scss';
import { sidebarVariants, fadeUp } from '../../configs/framerVariants';
import { AiOutlineHome } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
const Sidebar = ({
	sidebarOpen,
	toggleSidebar,
	activeIndex,
	setActiveIndex,
}) => {
	const indicatorRef = useRef();
	useEffect(() => {
		if (sidebarOpen) {
			indicatorRef.current.style.opacity = 1;
			indicatorRef.current.style.transitionDelay = `${
				0.25 * activeIndex
			},0s,0s`;
		}
	}, [sidebarOpen, activeIndex]);
	return (
		<AnimatePresence>
			{sidebarOpen && (
				<>
					<motion.div
						className='sidebar__overlay'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={toggleSidebar}
					></motion.div>
					<motion.aside
						variants={sidebarVariants}
						animate='visible'
						initial='hidden'
						exit='exit'
						className='sidebar'
					>
						<motion.div variants={fadeUp} className='sidebar__top'>
							<div className='sidebar__social'>
								<a
									href='https://github.com/ghorbeldev'
									variants={fadeUp}
									className='sidebar__social__item'
								>
									<FaGithub />
									<span>Github</span>
								</a>
								<a
									href='mailto: adem.ghorbel9@gmail.com'
									variants={fadeUp}
									className='sidebar__social__item'
								>
									<MdOutlineMail />
									<span>Mail</span>
								</a>
							</div>
							<motion.div
								whileHover={{
									scale: [1, 1.05],
									transition: {
										duration: 0.3,
										repeat: Infinity,
										repeatType: 'reverse',
									},
								}}
								whileTap={{ scale: 0.8 }}
								className='sidebar__menu-toggle'
								onClick={toggleSidebar}
							>
								<span className='bar'></span>
								<span className='bar'></span>
							</motion.div>
						</motion.div>

						<motion.div className='sidebar__menu'>
							<div
								ref={indicatorRef}
								className='sidebar__menu__indicator'
								style={{
									top: `calc(${variables.navbarHeight}*${activeIndex})`,
								}}
							></div>
							{sidebarNav.map((item, index) => (
								<Link
									className={`sidebar__menu__item`}
									key={index}
									to={item.to}
									smooth={true}
									duration={500}
									spy={true}
									onSetActive={() => setActiveIndex(index)}
									offset={-80}
									onClick={() => setTimeout(toggleSidebar, 1500)}
								>
									<motion.div variants={fadeUp}>
										<div className='sidebar__menu__item--icon'>{item.icon}</div>
										<span className='sidebar__menu__item--text'>
											{item.text}
										</span>
									</motion.div>
								</Link>
							))}
						</motion.div>
						<motion.div className='sidebar__contact'>
							<motion.address
								variants={fadeUp}
								className='sidebar__contact__item'
							>
								<div className='sidebar__contact__item--icon'>
									<AiOutlineHome />
								</div>
								<div className='sidebar__contact__item--text'>
									Tunisia, Sfax, Rue Mahdia +3054
								</div>
							</motion.address>
							<motion.a
								variants={fadeUp}
								href='tel:+216-21-033-874'
								className='sidebar__contact__item'
							>
								<div className='sidebar__contact__item--icon'>
									<FiPhoneCall />
								</div>
								<div className='sidebar__contact__item--text'>
									+216-21-033-874
								</div>
							</motion.a>
						</motion.div>
					</motion.aside>
				</>
			)}
		</AnimatePresence>
	);
};

export default Sidebar;
