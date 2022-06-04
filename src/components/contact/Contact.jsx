import { motion } from 'framer-motion';
import React from 'react';
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
			<div className='container section'>
				<MainHeading>Contact Me</MainHeading>
				<div className='contact__content'>
					<form
						action='https://formsubmit.co/adem.ghorbel9@gmail.com'
						method='POST'
					>
						<input
							className='main-input'
							type='text'
							name='name'
							placeholder='Your Name'
							required
						/>
						<input
							className='main-input'
							type='email'
							name='email'
							placeholder='Your Email'
							required
						/>
						<textarea
							className='main-input'
							name='message'
							placeholder='Your Message'
						></textarea>
						<input type='submit' value='Send Message' />
					</form>
					<div class='info'>
						<h4>Get In Touch</h4>
						<span class='phone'>+00 123.456.789</span>
						<span class='phone'>+00 123.456.789</span>
						<h4>Where We Are</h4>
						<address>
							Awesome Address 17 <br />
							New York,NYC <br />
							123-4567-890 <br />
							USA
						</address>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
