export type TechKey = 'tailwindcss' | 'next' | 'typescript' | 'react';

export type Project = {
	name: string;
	description: string;
	demo: string;
	repository: string;
	stack: TechKey[];
};
