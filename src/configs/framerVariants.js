import variables from '../scss/abstracts/_variables.scss';
export const fadeUp = {
	hidden: {
		opacity: 0,
		y: -100,
	},
	visible: { opacity: 1, y: 0 },
};
export const fadeDown = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: { opacity: 1, y: 0 },
};
export const fadeLeft = {
	hidden: {
		x: -200,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 120,
		},
	},
};
export const sidebarVariants = {
	hidden: {
		width: 0,
		transition: {
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	visible: {
		width: variables.sidebarWidth,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.25,
			staggerDirection: 1,
		},
	},
	exit: { width: 0 },
};
export const containerVariants = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			delay: 1,
			type: 'spring',
			stiffness: 140,
			staggerChildren: 0.3,
		},
	},
};
export const sectionVariants = {
	hidden: {
		y: -300,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 140,
		},
	},
};
export const animation = {
	bouncing: {
		y: [-25, 25],
		transition: {
			y: {
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 1,
			},
		},
	},
};
export const arrowVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			y: {
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 0.5,
				ease: 'easeIn',
			},
		},
	},
};
export const sentence = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.15,
		},
	},
};
export const letter = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
	},
};
