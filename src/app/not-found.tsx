import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4'>
			<h1 className='text-6xl font-bold mb-4'>404</h1>
			<h2 className='text-2xl font-semibold mb-4'>Page Not Found</h2>
			<p className='text-muted-foreground text-center mb-8 max-w-md'>
				Sorry, the page you are looking for doesnt&apos;t exist.
			</p>
			<Button asChild>
				<Link href='/'>Return home</Link>
			</Button>
		</div>
	);
}
