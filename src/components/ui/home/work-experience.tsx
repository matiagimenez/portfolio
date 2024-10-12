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

const experience = [
	{
		title: 'Full-stack developer',
		company: 'PricewaterhouseCoopers',
		description: 'Development of applications using React and Python',
		logo: '/pwc-dark.png',
		logo_light: '/pwc-light.png',
		since: 'Aug. 2024',
		to: 'Today',
		labels: ['React.js', 'Python'],
	},
	{
		title: 'Software developer',
		company: 'Universidad Nacional de Luján',
		description:
			'Development of websites for teaching staff with the main objective of improving teaching functions in different subjects of the university.',
		logo: '/unlu.png',
		logo_light: '/unlu.png',
		since: 'Aug. 2022',
		to: 'Aug. 2024',
		labels: ['HTML', 'CSS', 'Javascript'],
	},
];

export const Experience = () => {
	return (
		<section className='mt-10 px-2 max-w-6xl mb-6'>
			<h2 className='flex items-center gap-2 text-2xl font-bold text-pink-500'>
				Experience
			</h2>
			<ul className='mt-4 flex flex-col gap-5'>
				{experience.map(
					({
						title,
						company,
						logo,
						logo_light,
						since,
						to,
						description,
						labels,
					}) => {
						return (
							<li key={title}>
								<Card className='bg-transparent min-h-52'>
									<CardHeader>
										<CardTitle className='flex items-center gap-2 text-lg md:text-xl'>
											<Image
												src={logo}
												width={50}
												height={50}
												alt={`${company} logo`}
												className='block dark:hidden rounded-sm'
											/>
											<Image
												src={logo_light}
												width={50}
												height={50}
												alt={`${company} logo`}
												className='hidden dark:block rounded-sm'
											/>
											{title}
										</CardTitle>
										<CardDescription>
											<span className='text-foreground mt-1 block'>
												{company}
											</span>
											<span className='block'>
												{since} - {to}
											</span>
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p>{description}</p>
									</CardContent>
									<CardFooter className='pb-6'>
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
