'use client';
import { useEffect } from 'react';
import gsap from 'gsap';

const NavMobile = ({
	isMenuOpen,
	setIsMenuOpen,
}: {
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const menu = [
		{ name: 'Home', href: '#hero' },
		{ name: 'Služby', href: '#sluzby' },
		{ name: 'Ceník', href: '#cenik' },
		{ name: 'Galerie', href: '#galerie' },
		{ name: 'Kontakt', href: '#kontakt' },
	];

	useEffect(() => {
		if (isMenuOpen) {
			gsap.from('.item', {
				y: 100,
				opacity: 0,
				duration: 0.4,
				ease: 'power3.out',
				stagger: 0.1,
			});
		}
	}, [isMenuOpen]);

	const handleNavigation = (href: string) => {
		// Close the menu first
		setIsMenuOpen(false);

		// Wait for the closing animation, then scroll manually
		setTimeout(() => {
			const id = href.replace('#', '');
			const section = document.getElementById(id);

			if (section) {
				section.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}

			// Remove hash from URL so the browser doesn't jump unexpectedly later
			window.history.replaceState(null, '', window.location.pathname);
		}, 300); // Match your menu closing animation duration
	};

	return (
		<div
			className={`fixed inset-0 bg-background ${
				isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
			} flex flex-col items-center justify-center gap-8 text-xl uppercase font-sora font-medium text-black z-25 h-dvh transition-opacity duration-300`}>
			{menu.map((item) => (
				<button
					type='button'
					className='item'
					key={item.href}
					onClick={() => handleNavigation(item.href)}>
					{item.name}
				</button>
			))}
		</div>
	);
};

export default NavMobile;
