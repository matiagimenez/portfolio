import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
	title: 'Matias Gimenez | Portfolio',
	description: 'My name is Matias and this is my personal site',
	icons: {
		icon: '/favicon.ico',
	},
};
import { Open_Sans } from 'next/font/google';
import { Header } from '@/components/ui/header';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Footer } from '@/components/ui';

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
			<body className={`min-h-full ${openSans.className} px-4 lg:px-12`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					disableTransitionOnChange
				>
					<Header />
					<main className=''>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
