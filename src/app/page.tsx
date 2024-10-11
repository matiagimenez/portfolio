import Image from 'next/image';
import Link from 'next/link';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
	return (
		<section className='lg:w-3/4 flex flex-col items-start md:flex-row md:items-center m-auto mt-8 gap-8'>
			<Image
				priority={true}
				src='/avatar.png'
				width={200}
				height={300}
				className='rounded-md'
				alt='Avatar'
			/>
			<section className='grow max-w-lg'>
				<h2 className='text-3xl lg:text-5xl font-bold drop-shadow-lg py-1 px-2 md:pr-3'>
					Hi, I&apos;m Matias
				</h2>
				<h3 className='text-2xl lg:text-2xl px-2 md:pr-3'>
					A passionate fullstack developer
				</h3>
				<p className='text-lg md:text-xl pt-4 pb-2 px-2 md:pr-3'>
					This is my personal site made using Next.js, Typescript, and
					TailwindCSS.
				</p>
				<p className='text-md md:text-xl px-2 pb-4 md:pr-3'>
					You can check out the source code on my
					<Link
						href='https://github.com/matiagimenez'
						target='_blank'
						className='font-semibold ml-1 hover:underline'
					>
						Github.
					</Link>
				</p>
				<p className='flex gap-2 px-2 md:pr-3'>
					<Link
						href='https://www.linkedin.com/in/matiagimenez/'
						target='_blank'
						className={`inline-flex items-center gap-2 w-32 ${buttonVariants(
							{ variant: 'outline' }
						)}`}
					>
						<LinkedInLogoIcon className='inline text-blue-500' />
						LinkedIn
					</Link>
					<Link
						href='https://github.com/matiagimenez'
						target='_blank'
						className={`inline-flex items-center justify-center gap-2 w-32 ${buttonVariants(
							{ variant: 'outline' }
						)}`}
					>
						<GitHubLogoIcon className='inline' /> Github
					</Link>
				</p>
			</section>
		</section>
	);
}
