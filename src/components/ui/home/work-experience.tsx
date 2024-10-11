'use client';
import React from 'react';
import Image from 'next/image';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	Badge,
} from '@/components/ui';
import { useTheme } from 'next-themes';

const experience = [
	{
		title: 'Full-stack developer',
		company: 'PricewaterhouseCoopers',
		description: 'Development of applications using React and Python',
		logo_light: '/pwc.png',
		logo_dark: '/pwc-light.png',
		since: 'Aug. 2024',
		to: 'Today',
		labels: ['React.js', 'Python'],
	},
	{
		title: 'Software developer',
		company: 'Universidad Nacional de Luján',
		description:
			'Development of websites for teaching staff with the main objective of improving teaching functions in different subjects of the university.',
		logo_light: '/unlu.jpg',
		logo_dark: '/unlu.jpg',
		since: 'Aug. 2022',
		to: 'Aug. 2024',
		labels: ['HTML', 'CSS', 'Javascript'],
	},
];

export const WorkExperience = () => {
	const { theme } = useTheme();
	return (
		<section className='mt-16 px-2 max-w-6xl'>
			<h2 className='flex items-center gap-2 text-2xl font-bold text-pink-500'>
				Experience
			</h2>
			<ul className='mt-4 flex flex-col gap-5'>
				{experience.map(
					({
						title,
						company,
						logo_dark,
						logo_light,
						since,
						to,
						description,
						labels,
					}) => {
						return (
							<li key={title}>
								<Card className='bg-transparent min-h-64'>
									<CardHeader>
										<CardTitle className='flex items-center gap-2 text-lg md:text-xl'>
											<Image
												priority={true}
												src={
													theme === 'dark'
														? logo_dark
														: logo_light
												}
												width={40}
												height={40}
												alt={`${company} logo`}
												className='rounded-sm'
											/>
											{title}
										</CardTitle>
										<CardDescription>
											<p className='text-foreground mt-1'>
												{company}
											</p>
											<p>
												{since} - {to}
											</p>
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p>{description}</p>
									</CardContent>
									<CardFooter className='pb-4'>
										{labels.map((text) => (
											<Badge
												className='mr-1 font-medium bg-pink-500 text-white'
												key={text}
											>
												{text}
											</Badge>
										))}
									</CardFooter>
								</Card>
							</li>
						);
					}
				)}
			</ul>
		</section>
	);
};
