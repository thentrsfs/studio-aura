'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

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
		{ name: 'Cenik', href: '#cenik' },
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
	return (
		<div
			className={`fixed inset-0 bg-background ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}   flex flex-col items-center justify-center gap-8 text-xl uppercase font-sora font-medium text-black z-25 h-dvh`}>
			{menu.map((item) => (
				<Link
					className='item'
					key={item.href}
					onClick={() => setIsMenuOpen(false)}
					href={item.href}>
					{item.name}
				</Link>
			))}
		</div>
	);
};

export default NavMobile;
