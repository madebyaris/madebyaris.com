import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  
  // Check for secret to confirm this is a valid request
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
  
  try {
    // Get path to revalidate from query parameter
    const path = request.nextUrl.searchParams.get('path') || '/';
    
    // Get tag to revalidate from query parameter
    const tag = request.nextUrl.searchParams.get('tag');
    
    if (tag) {
      // Next.js 16: revalidateTag now requires 2 arguments (tag, revalidationType)
      revalidateTag(tag, 'max');
      return NextResponse.json({ 
        revalidated: true, 
        message: `Tag ${tag} revalidated` 
      });
    }
    
    // Otherwise, revalidate the specific path
    revalidatePath(path);
    return NextResponse.json({ 
      revalidated: true, 
      message: `Path ${path} revalidated`
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: err },
      { status: 500 }
    );
  }
}