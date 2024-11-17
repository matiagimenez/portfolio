'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  if (theme === 'dark') {
    return (
      <button onClick={() => setTheme('light')}>
        <SunIcon className='w-5 h-5' />
      </button>
    );
  }

  return (
    <button onClick={() => setTheme('dark')}>
      <MoonIcon className='w-5 h-5' />
    </button>
  );
}
