'use client';
import Hero from '@/components/sections/Hero';
import Nav from '@/components/ui/Nav';
import Služby from '@/components/sections/Služby';
import Pricing from '@/components/sections/Pricing';
import Galerie from '@/components/sections/Galerie';
import Kontakt from '@/components/sections/Kontakt';
import SplashScreen from '@/components/ui/SplashScreen';
import SnapScroll from '@/components/ui/SnapScroll';
import NavDots from '@/components/ui/NavDots';
import { useEffect, useState } from 'react';
import NavMobile from '@/components/ui/NavMobile';

export default function Home() {
	const [active, setActive] = useState(0);
	const [theme, setTheme] = useState('dark');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	// Update active section on scroll
	useEffect(() => {
		const sections = document.querySelectorAll('section');

		if (window.innerWidth < 1024) return;

		const onScroll = () => {
			const index = [...sections].findIndex((section) => {
				const rect = section.getBoundingClientRect();
				return rect.top >= -10 && rect.top < window.innerHeight / 2;
			});

			if (index !== -1) {
				setActive(index);

				const currentTheme = sections[index].getAttribute('data-theme');
				setTheme(currentTheme || 'light');
			}
		};

		onScroll();

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			{loading && <SplashScreen onFinish={() => setLoading(false)} />}
			<div className='bg-background min-h-screen flex flex-col relative'>
				<Nav
					active={active}
					theme={theme}
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
				<NavMobile
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
				<Hero />
				<Služby
					theme={theme}
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
				<Pricing
					theme={theme}
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
				<Galerie
					theme={theme}
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
				<Kontakt
					theme={theme}
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
				<NavDots
					active={active}
					theme={theme}
				/>
				<SnapScroll />
			</div>
		</>
	);
}
