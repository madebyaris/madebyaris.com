'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, Search } from 'lucide-react'
import Link from 'next/link'

// Remove metadata export since it can't be used in client components
// Metadata must be defined in a separate metadata.ts file or in layout.tsx

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
      {/* Background decorations */}
      
      {/* Animated glitch effect for 404 */}
      <div className="relative mb-8">
        <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 select-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/20 animate-pulse select-none">404</h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 
            className="text-[150px] md:text-[200px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 select-none"
            style={{
              position: 'relative',
              animation: 'glitch 1s infinite',
            }}
          >
            404
          </h1>
        </div>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Page Not Found</h2>
      
      <p className="text-muted-foreground text-center max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link href="/">
        <Button size="lg" className="gap-2" >
          <Home className="h-4 w-4" />
          Back to Home
        </Button>
        </Link>
        
        <Link href="/blog">
        <Button variant="outline" size="lg" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Visit Blog
        </Button>
        </Link>
        
        <Link href="/contact">
        <Button variant="secondary" size="lg" className="gap-2">
          <Search className="h-4 w-4" />
          Contact Support
        </Button>
        </Link>
      </div>
      
      {/* Animated code snippet */}
      <div className="w-full max-w-md bg-black/80 rounded-lg p-4 font-mono text-xs text-green-400 shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-gray-400 text-xs ml-2">Terminal</span>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <p 
            className="mb-1"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              opacity: 0,
              animation: 'typing 0.5s forwards',
              animationDelay: '0.2s',
            }}
          >
            <span className="text-blue-400">$</span> find / -name &quot;<span className="text-yellow-400">requested-page</span>&quot;
          </p>
          <p 
            className="mb-1 text-red-400"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              opacity: 0,
              animation: 'typing 0.5s forwards',
              animationDelay: '1.2s',
            }}
          >
            Error: File not found in directory
          </p>
          <p 
            className="mb-1"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              opacity: 0,
              animation: 'typing 0.5s forwards',
              animationDelay: '2.2s',
            }}
          >
            <span className="text-blue-400">$</span> cd /home/user/recovery
          </p>
          <p 
            className="mb-1"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              opacity: 0,
              animation: 'typing 0.5s forwards',
              animationDelay: '3.2s',
            }}
          >
            <span className="text-blue-400">$</span> ./redirect --to=homepage
          </p>
          <p 
            className="text-green-400"
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              opacity: 0,
              animation: 'typing 0.5s forwards',
              animationDelay: '4.2s',
            }}
          >
            Redirecting to homepage... <span className="animate-pulse">▌</span>
          </p>
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes typing {
          from { width: 0; opacity: 1; }
          to { width: 100%; opacity: 1; }
        }
      `}</style>
    </div>
  )
} 