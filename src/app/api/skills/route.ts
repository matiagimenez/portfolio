import { NextResponse } from 'next/server';
import { database } from '@/database/database';
import { Skill } from '@/models/skill';

export async function GET(): Promise<NextResponse> {
  try {
    await database.connect();

    const frontend = await Skill.find({
      category: 'frontend',
    }).sort({ name: 1 });

    const backend = await Skill.find({
      category: 'backend',
    }).sort({ name: 1 });

    const devops = await Skill.find({
      category: 'devops',
    }).sort({ name: 1 });

    return NextResponse.json(
      {
        frontend,
        backend,
        devops,
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
