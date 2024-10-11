'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ThemeToggle } from '@/components/ui';

export const Header = () => {
	const pathname = usePathname();

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/skills', label: 'Skills' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/resources', label: 'Resources' },
	];

	return (
		<header className='flex justify-between min-h-20 items-center'>
			<h1 className='font-bold text-2xl text-pink-500'>Matias Gimenez</h1>
			<nav>
				<ul className='flex gap-6 font-medium text-lg'>
					{links.map(({ href, label }) => {
						return (
							<li
								key={href}
								className={`${
									pathname === href &&
									'text-pink-500 font-bold'
								}`}
							>
								<Link href={href}>{label}</Link>
							</li>
						);
					})}
					<ThemeToggle />
				</ul>
			</nav>
		</header>
	);
};
