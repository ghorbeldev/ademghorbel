import { motion } from 'framer-motion';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMail } from 'react-icons/md';

import { fadeDown, fadeLeft, fadeUp } from '../../configs/framerVariants';
import MainHeading from '../main-heading/MainHeading';
import './contact.scss';
const Contact = () => {
	return (
		<motion.div
			id='contact'
			className='contact'
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
			viewport={{ once: true, amount: 0.8 }}
		>
			<div className='container'>
				<MainHeading>Contact Me</MainHeading>
				<div className='contact__content'>
					<motion.form
						variants={{
							visible: {
								transition: {
									staggerChildren: 0.2,
								},
							},
						}}
						action='https://formsubmit.co/adem.ghorbel9@gmail.com'
						method='POST'
					>
						<motion.input
							className='main-input'
							type='text'
							name='name'
							placeholder='Your Name'
							required
							variants={fadeLeft}
						/>
						<motion.input
							className='main-input'
							type='email'
							name='email'
							placeholder='Your Email'
							required
							variants={fadeLeft}
						/>
						<motion.textarea
							className='main-input'
							name='message'
							placeholder='Your Message'
							variants={fadeLeft}
						></motion.textarea>
						<motion.input
							type='submit'
							value='Send Message'
							variants={fadeDown}
						/>
					</motion.form>
					<motion.div
						variants={{
							visible: {
								transition: {
									// delay: 0.8,
									staggerChildren: 0.2,
								},
							},
						}}
						className='info'
					>
						<motion.h4 variants={fadeUp}>Want To Discuss</motion.h4>
						<motion.a
							className='info__contact'
							href='tel:+216-21-049-540'
							variants={fadeDown}
						>
							<FiPhoneCall />
							<span>+21621049540</span>
						</motion.a>
						<motion.a
							className='info__contact'
							href='mailto:adem.ghorbel9@gmail.com'
							variants={fadeDown}
						>
							<MdOutlineMail />
							<span>Mail</span>
						</motion.a>
						<motion.h4 className='info__thanks' variants={fadeUp}>
							THANKS FOR YOUR VISIT!
						</motion.h4>
						<motion.p variants={fadeDown}>
							Send Me a Message <span className='text-primary'>Now</span> and
							Let's Start Talking
						</motion.p>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
