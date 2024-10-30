import React from 'react';

export default function Page() {
	return (
		<>
			<section className='grow max-w-5xl pt-2'>
				<h2 className='text-2xl font-bold drop-shadow-lg p-2 md:pr-3'>
					<span className='text-pink-500 font-semibold'>Tech Stack</span>
				</h2>
				<p className='text-lg pb-2 px-2 md:pr-3'>
					Here, I want to share the skills I’ve developed in my
					journey as a software developer.
				</p>
				<p className='text-lg pb-2 px-2 md:pr-3'>
					With a strong commitment to learning and growth, I’m
					<span className='text-pink-500 font-semibold inline-block mx-1'>
						constantly building on my expertise
					</span>
					to stay current in the fast-evolving world of technology.
				</p>
			</section>
		</>
	);
}