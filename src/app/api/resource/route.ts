import { NextResponse } from 'next/server';
import { database } from '@/database/database';
import { Resource } from '@/models/resource';

export async function GET(): Promise<NextResponse> {
  try {
    await database.connect();
    const resource = await Resource.find({});
    return NextResponse.json(resource, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch resources data:', error);
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    );
  }
}
