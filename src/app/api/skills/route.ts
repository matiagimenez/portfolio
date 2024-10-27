import { NextResponse } from 'next/server';
import { database } from '@/database/database';
import { Skill } from '@/models/skill';

export async function GET(): Promise<NextResponse> {
	try {
		await database.connect();
		const skill = await Skill.find({});
		return NextResponse.json(skill, { status: 200 });
	} catch (error) {
		console.error('Failed to fetch skills data:', error);
		return NextResponse.json(
			{ detail: 'Internal server error' },
			{ status: 500 }
		);
	}
}
