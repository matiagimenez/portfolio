import React from 'react';
import Link from 'next/link';
import { ParticlesEffect } from '@/components/ui';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default function Page() {
  const resources = [
    {
      title: 'Making sense of React Server Components',
      description: 'A deep dive into the new React Server Components feature',
      url: 'https://www.joshwcomeau.com/react/server-components/',
    },
    {
      title: 'A Complete Guide to Pytest Fixtures',
      description: 'A comprehensive guide to Pytest fixtures',
      url: 'https://betterstack.com/community/guides/testing/pytest-fixtures-guide/',
    },
    {
      title: 'Understanding Patch Decorators in Python’s unittest Framework',
      description:
        'A guide to understanding patch decorators in Python’s unittest framework',
      url: 'https://medium.com/@reetesh043/understanding-patch-decorators-in-pythons-unittest-framework-e802b2aa6f6d',
    },
  ];

  return (
    <>
      <section className='grow max-w-5xl pt-4'>
        <ParticlesEffect />
        <h2 className='text-2xl md:text-3xl font-bold drop-shadow-lg mb-4 md:pr-3'>
          Recommended{' '}
          <span className='text-pink-500 font-semibold'>Resources</span>
        </h2>
        <p className='text-lg pb-2 md:pr-3'>
          In this section, you’ll find a selection of insightful content that
          reflects my interests and expertise.
        </p>
        <p className='text-lg pb-2 md:pr-3'>
          Each video and article has been chosen for its ability to inspire,
          educate, and provoke thought, providing valuable perspectives on
          topics I’m passionate about.
        </p>
        <p className='text-lg pb-2 md:pr-3'>
          Whether you’re looking to expand your knowledge or simply explore new
          ideas, I hope you find these resources as enriching as I have.
        </p>
      </section>
      <ul className='flex justify-center md:justify-normal gap-4 w-full flex-wrap flex-col my-4'>
        {resources.map(({ title, description, url }) => {
          return (
            <li key={title}>
              <h3 className='font-semibold flex text-lg items-center gap-2 hover:text-pink-500'>
                <Link
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'
                >
                  {title}
                </Link>
                <ExternalLinkIcon className='text-muted-foreground' />
              </h3>
              <p className='text-sm text-muted-foreground'>{description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
