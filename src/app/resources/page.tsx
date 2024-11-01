import React from 'react';

export default function Page() {
	return (
		<>
			<section className='grow max-w-5xl pt-2'>
				<h2 className='text-2xl md:text-3xl font-bold mb-4'>
					Resources
				</h2>
				<p className='text-lg pb-2 md:pr-3'>
					I have gathered a variety of resources that I’ve found
					helpful or inspiring in my development journey.
				</p>
				<p className='text-lg pb-2 md:pr-3'>
					These include in-depth articles, videos, and code
					repositories that have offered guidance, sparked creativity,
					and enriched my
					<span className='text-pink-500 font-semibold inline-block mx-1'>
						technical knowledge
					</span>
					in software development.
				</p>
				<p className='text-lg pb-2 md:pr-3'>
					I hope these resources provide you with valuable insights
					and inspire new ideas, just as they have for me.
				</p>
			</section>
		</>
	);
}
