'use client';
import { useEffect } from 'react';

const SnapScroll = () => {
	useEffect(() => {
		let isScrolling = false;

		const handleWheel = (e: WheelEvent) => {
			if (isScrolling) return;
			if (window.innerWidth < 1024) return;

			isScrolling = true;

			const sections = document.querySelectorAll('section');
			const current = [...sections].findIndex((section) => {
				const rect = section.getBoundingClientRect();
				return rect.top >= -10 && rect.top < window.innerHeight / 2;
			});

			let nextIndex = current;

			if (e.deltaY > 0) {
				nextIndex = Math.min(current + 1, sections.length - 1);
			} else {
				nextIndex = Math.max(current - 1, 0);
			}

			sections[nextIndex].scrollIntoView({ behavior: 'smooth' });

			setTimeout(() => {
				isScrolling = false;
			}, 1100); // controls speed
		};

		window.addEventListener('wheel', handleWheel);

		return () => window.removeEventListener('wheel', handleWheel);
	}, []);
	return null;
};

export default SnapScroll;
