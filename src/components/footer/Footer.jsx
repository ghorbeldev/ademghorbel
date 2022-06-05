import React from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import './footer.scss';
const Footer = () => {
	return (
		<div className='footer' od='footer'>
			<div className='container'>
				<p>
					Made With &lt;3 By <span className='text-primary'>Adem Ghorbel</span>
				</p>
				<div className='social'>
					<h4>Check out My Networks </h4>
					<a href='https://github.com/ghorbeldev'>
						<BsGithub />
					</a>
					<a href='https://www.facebook.com/adem.ghorbel.98'>
						<BsFacebook />
					</a>
					<a href='https://www.linkedin.com/in/adem-ghorbel-324659219/'>
						<FaLinkedinIn />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
