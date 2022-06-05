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
					<a href='github.com'>
						<BsGithub />
					</a>
					<a href='facebook.com'>
						<BsFacebook />
					</a>
					<a href='linkedin.com'>
						<FaLinkedinIn />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
