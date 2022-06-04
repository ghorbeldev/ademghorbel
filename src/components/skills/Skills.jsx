import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { Link } from 'react-scroll';
import {
	arrowVariants,
	fadeDown,
	fadeLeft,
} from '../../configs/framerVariants';
import useWindowSize from '../hooks/useWindowSize';
import skills from '../../configs/skills';
import MainHeading from '../main-heading/MainHeading';
import './skills.scss';
const skillsVariants = {
	hidden: { right: -200, opacity: 0 },
	visible: {
		right: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
			when: 'beforeChildren',
			type: 'spring',
		},
	},
};
const Skills = () => {
	const [width] = useWindowSize();
	return (
		<motion.div
			id='skills'
			className='skills'
			initial='hidden'
			whileInView='visible'
			variants={{
				visible: {
					transition: {
						delay: 0.2,
						staggerChildren: 0.8,
					},
				},
			}}
			viewport={{ once: true, amount: 0.25 }}
		>
			<div className='container section'>
				<MainHeading className='main-heading'>My Skills</MainHeading>
				<div className='skills__content'>
					<motion.div className='skills__content--text'>
						<motion.p className='skill--show' variants={fadeLeft}>
							Work With All this{' '}
							<span className='text-primary'>Tools & Technologies</span>
						</motion.p>
						{width > 1100 && (
							<motion.p className='more' variants={fadeLeft}>
								I'm always working on{' '}
								<span className='text-primary'>learning skills</span>, and this
								some of my current <span className='text-primary'>skills</span>{' '}
								that help me for creating perfect applications
							</motion.p>
						)}
					</motion.div>
					<motion.div
						variants={skillsVariants}
						className='skills__content--imgs'
					>
						{skills.map((skill, index) => (
							<motion.div key={index} variants={fadeDown}>
								<img src={skill.logo} alt={skill.skill} />
							</motion.div>
						))}
					</motion.div>
					{width < 1100 && (
						<motion.div className='skills__content--text' variants={fadeLeft}>
							<p className='more'>
								I'm always working on{' '}
								<span className='text-primary'>learning skills</span>, and this
								some of my current <span className='text-primary'>skills</span>{' '}
								that help me for creating perfect applications
							</p>
						</motion.div>
					)}
				</div>
			</div>
			<Link to='portfolio' smooth={true} duration={500} offset={-80}>
				<motion.div
					variants={arrowVariants}
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.8 }}
					className='skills__scrolldown'
				>
					<BsArrowDown />
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default Skills;
