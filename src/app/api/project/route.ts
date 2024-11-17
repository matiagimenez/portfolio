import { NextResponse } from 'next/server';
import { database } from '@/database/database';
import { Project } from '@/models/project';

export async function GET(): Promise<NextResponse> {
  try {
    await database.connect();
    const project = await Project.find({});
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch projects data:', error);
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    );
  }
}
