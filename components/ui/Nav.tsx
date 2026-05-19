'use client';
import Logo from './Logo';
import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import CustomButton from './CustomButton';
import { HiOutlineMenu } from 'react-icons/hi';
import Link from 'next/link';

const Nav = ({
	active,
	theme,
	isMenuOpen,
	setIsMenuOpen,
}: {
	active: number;
	theme: string;
	isMenuOpen: boolean;
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	// Lock scroll when menu is open
	useEffect(() => {
		if (!isMenuOpen) return;

		const preventScroll = (e: Event) => e.preventDefault();
		const preventKeys = (e: KeyboardEvent) => {
			const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'];
			if (keys.includes(e.code)) e.preventDefault();
		};

		window.addEventListener('wheel', preventScroll, { passive: false });
		window.addEventListener('touchmove', preventScroll, { passive: false });
		window.addEventListener('keydown', preventKeys);

		return () => {
			window.removeEventListener('wheel', preventScroll);
			window.removeEventListener('touchmove', preventScroll);
			window.removeEventListener('keydown', preventKeys);
		};
	}, [isMenuOpen]);

	return (
		<div className='w-full pt-10 lg:px-36 px-6 flex items-center justify-between lg:absolute fixed top-0 z-26 text-white font-sora text-sm uppercase'>
			<Logo
				isMenuOpen={isMenuOpen}
				className={active !== 0 ? 'opacity-0' : 'opacity-100'}
			/>
			<div className='lg:flex items-center gap-12 tracking-wide hidden'>
				<div className='group flex flex-col'>
					<Link href='#sluzby'>Služby</Link>
					<span className='group-hover:w-full w-0 h-px bg-white transition-all duration-300 '></span>
				</div>
				<div className='group flex flex-col'>
					<Link href='#cenik'>Cenik</Link>
					<span className='group-hover:w-full w-0 h-px bg-white transition-all duration-300 '></span>
				</div>
				<div className='group flex flex-col'>
					<Link href='#galerie'>Galerie</Link>
					<span className='group-hover:w-full w-0 h-px bg-white transition-all duration-300 '></span>
				</div>
				<div className='group flex flex-col'>
					<Link href='#kontakt'>Kontakt</Link>
					<span className='group-hover:w-full w-0 h-px bg-white transition-all duration-300 '></span>
				</div>
			</div>
			<CustomButton
				className='max-lg:hidden normal-case'
				href='#kontakt'
			/>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className='font-medium lg:hidden font-sora z-26'>
				{isMenuOpen ? (
					<IoClose className='text-3xl text-black' />
				) : (
					<HiOutlineMenu
						className={`text-3xl ${theme === 'dark' ? 'text-white' : 'text-primary'}`}
					/>
				)}
			</button>
		</div>
	);
};

export default Nav;
