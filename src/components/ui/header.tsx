'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ThemeToggle, MenuButton } from '@/components/ui';

export const Header = () => {
	const pathname = usePathname();
	const [show, setShow] = React.useState<boolean>(false);

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/skills', label: 'Skills' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/resources', label: 'Resources' },
	];

	return (
		<header className='flex justify-between min-h-20 items-center'>
			<h1 className='font-bold text-2xl text-pink-500 max-w-10 sm:max-w-none'>
				<Link href='/'>Matias Gimenez</Link>
			</h1>
			<nav>
				<MenuButton show={show} setShow={setShow} />
				<ul
					className={`${
						show
							? 'absolute right-0 px-4 pl-8 pb-4 rounded-md top-16'
							: 'hidden'
					} bg-background md:p-0 flex flex-col gap-4 border border-t-0 border-r-0 rounded-t-none md:border-0 md:gap-6 font-medium text-lg md:relative md:flex-row md:flex md:top-0 md:right-0`}
				>
					{links.map(({ href, label }) => {
						return (
							<li
								key={href}
								className={`text-right md:text-center ${
									pathname === href &&
									'text-pink-500 font-bold'
								}`}
							>
								<Link
									href={href}
									onClick={() => setShow(false)}
								>
									{label}
								</Link>
							</li>
						);
					})}
					<li className='text-right md:text-center md:mt-1'>
						<ThemeToggle />
					</li>
				</ul>
			</nav>
		</header>
	);
};
