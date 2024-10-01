import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
export const metadata: Metadata = {
	title: 'Matias Gimenez | Portfolio',
	description: 'My name is Matias and this is my personal site',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='h-full'>
			<body className={`h-full ${inter.className}`}>{children}</body>
		</html>
	);
}
