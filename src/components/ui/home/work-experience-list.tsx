import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	Badge,
} from '@/components/ui';
import { WorkExperience } from '@/types/work-experience';

export const WorkExperienceList = async () => {
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
	const response = await axios.get(`${BASE_URL}/api/experience`);
	const experiences: WorkExperience[] = response.data;

	return (
		<section className='mt-10 px-2 max-w-6xl mb-6'>
			<h2 className='flex items-center gap-2 text-2xl font-bold text-pink-500'>
				Work experience
			</h2>
			<ul className='mt-4 flex flex-col gap-5'>
				{experiences.map(
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
												className='mr-1 font-medium bg-pink-500 text-white hover:bg-pink-500'
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
