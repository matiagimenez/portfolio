import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
	title: 'Matias Gimenez | Portfolio',
	description: 'My name is Matias and this is my personal site',
};
import { Open_Sans } from 'next/font/google';
import { Header } from '@/components/ui/header';
import { ThemeProvider } from '@/components/providers/theme-provider';

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='h-full'>
			<body className={`h-full ${openSans.className} px-12`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className='min-h-full'>{children}</main>
					<footer>Footer</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
