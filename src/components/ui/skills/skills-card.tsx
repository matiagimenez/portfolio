import Logos from '@/components/ui/logos';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import * as motion from 'framer-motion/client';
import { TechKey } from '@/types/tech-keys';

interface SkillCardProps {
	name: string;
	icon: TechKey;
	url: string;
}

export const SkillCard = ({ name, icon, url }: SkillCardProps) => {
	const Logo = Logos[icon];
	return (
		<motion.article whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
			<Link href={url} target='_blank' className='block h-full'>
				<Card className='h-full bg-background hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors duration-300 border border-pink-200 dark:border-pink-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg'>
					<CardContent className='p-4 flex flex-col items-center justify-center gap-3'>
						<Logo className='w-12 h-12 text-pink-500' />
						<h3 className='font-semibold text-center text-sm sm:text-base'>
							{name}
						</h3>
					</CardContent>
				</Card>
			</Link>
		</motion.article>
	);
};
