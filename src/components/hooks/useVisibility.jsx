import { useRef, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
export default function useVisibility(offset = 0, throttleMilliseconds = 100) {
	const [isVisible, setIsVisible] = useState(false);
	const currentElement = useRef();

	const onScroll = throttle(() => {
		if (!currentElement.current) {
			setIsVisible(false);
			return;
		}
		const top =
			currentElement.current.getBoundingClientRect().top +
			document.documentElement.clientHeight +
			5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
		setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
	}, throttleMilliseconds);

	useEffect(() => {
		document.addEventListener('scroll', onScroll, true);
		return () => document.removeEventListener('scroll', onScroll, true);
	});

	return [isVisible, currentElement];
}
