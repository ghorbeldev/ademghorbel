import { FiMail } from 'react-icons/fi';
import { MdOutlineInfo } from 'react-icons/md';
import { BsBriefcase } from 'react-icons/bs';
import { IoBulbOutline } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';
const sidebarNav = [
	{
		to: 'home',
		section: 'home',
		text: 'Home',
		icon: <AiOutlineHome />,
	},
	{
		to: 'about',
		section: 'about',
		text: 'About',
		icon: <MdOutlineInfo />,
	},
	{
		to: 'skills',
		section: 'skills',
		text: 'Skills',
		icon: <IoBulbOutline />,
	},
	{
		to: 'portfolio',
		section: 'portfolio',
		text: 'Portfolio',
		icon: <BsBriefcase />,
	},
	{
		to: 'contact',
		section: 'contact',
		text: 'Contact',
		icon: <FiMail />,
	},
];
export default sidebarNav;
