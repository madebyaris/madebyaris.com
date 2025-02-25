import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const tag = searchParams.get('tag');

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    if (!tag) {
      return NextResponse.json({ message: 'Missing tag parameter' }, { status: 400 });
    }

    // Revalidate the tag
    revalidateTag(tag);

    return NextResponse.json({
      revalidated: true,
      message: `Revalidated tag: ${tag}`,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: (error as Error).message },
      { status: 500 }
    );
  }
}