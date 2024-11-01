import React from 'react';
import axios from 'axios';
import { Categories } from '@/types/skill';
import * as motion from 'framer-motion/client';
import { ParticlesEffect, SkillSection } from '@/components/ui';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Component() {
	const response = await axios.get(`${BASE_URL}/api/skills`);
	const { frontend, backend, tools }: Categories = response.data;

	return (
		<section className='grow max-w-5xl pt-4'>
			<ParticlesEffect />
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='mb-6'
			>
				<h2 className='text-3xl font-bold mb-4'>
					My <span className='text-pink-500'>Tech Stack</span>
				</h2>
				<p className='text-lg max-w-2xl mb-4'>
					Here, I want to share the skills I have developed in my
					journey as a software developer.
				</p>
				<p className='text-lg max-w-2xl'>
					With a strong commitment to learning and growth, I am
					<span className='text-pink-500 font-semibold mx-1'>
						constantly building on my expertise
					</span>
					to stay current in the fast-evolving world of technology.
				</p>
			</motion.section>

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<SkillSection title='Frontend' skills={frontend} />
				<SkillSection title='Backend' skills={backend} />
				<SkillSection title='Tools' skills={tools} />
			</motion.section>
		</section>
	);
}
