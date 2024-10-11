import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import {
	Carousel,
	CarouselItem,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
	Card,
	CardContent,
} from '@/components/ui';

const quotes = [
	{
		quote: 'In the face of ambiguity, refuse the temptation to guess.',
		author: 'Tim Peters',
	},
	{
		quote: 'Talk is cheap. Show me the code.',
		author: 'Linus Torvalds',
	},
	{
		quote: "If the implementation is hard to explain, it's a bad idea.",
		author: 'Tim Peters',
	},
	{
		quote: 'Clean code always looks like it was written by someone who cares.',
		author: 'Robert C. Martin',
	},
	{
		quote: 'Code is read much more often than it is written.',
		author: 'Guido Van Rossum',
	},
];

export const Footer = () => {
	return (
		<footer className='w-full'>
			<Carousel className='m-auto w-9/12 md:w-full max-w-sm mb-8'>
				<CarouselContent className='w-full m-auto'>
					{quotes.map(({ quote, author }) => (
						<CarouselItem className='w-full pl-0' key={quote}>
							<Card className='w-full h-28 flex items-center justify-center bg-transparent'>
								<CardContent className='flex items-center aspect-square justify-center p-4'>
									<blockquote className='text-sm font-medium text-pink-500 text-center'>
										<p className='py-1 italic font-medium'>
											{quote}
										</p>
										<p className='py-1 font-sm font-light text-foreground'>
											{author}
										</p>
									</blockquote>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className='-left-10 md:-left-12' />
				<CarouselNext className='-right-10 md:-right-12' />
			</Carousel>
			<section className='border-t min-h-16 flex gap-4 items-center justify-center'>
				<Link href='https://github.com/matiagimenez' target='_blank'>
					<GitHubLogoIcon className='w-6 h-6' />
				</Link>
				<Link
					href='https://www.linkedin.com/in/matiagimenez/'
					target='_blank'
				>
					<LinkedInLogoIcon className='w-6 h-6 text-blue-500' />
				</Link>
			</section>
		</footer>
	);
};
