import { NextResponse } from 'next/server';
import { database } from '@/database/database';
import { Skill } from '@/models/skill';

export async function GET(): Promise<NextResponse> {
	try {
		await database.connect();
		const frontend = await Skill.find({
			category: 'frontend',
		});

		const backend = await Skill.find({
			category: 'backend',
		});

		const tools = await Skill.find({
			category: 'tools',
		});

		return NextResponse.json(
			{
				frontend,
				backend,
				tools,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error('Failed to fetch skills data:', error);
		return NextResponse.json(
			{ detail: 'Internal server error' },
			{ status: 500 }
		);
	}
}
