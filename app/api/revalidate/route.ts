import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
    try {

        const token = request.headers.get('x-webhook-secret')

        // validate the secret token
        if ( token !== process.env.REVALIDATION_TOKEN) {
            return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
        }

        revalidatePath('/')
        revalidatePath('/blog')
        revalidatePath('/sitemap.xml')
        
        
        return NextResponse.json({ message: 'Revalidation triggered' }, { status: 200 })
    } catch (err) {
        console.error('Revalidation error:', err)
        return NextResponse.json({ error: 'Error revalidating' }, { status: 500 })
    }
}