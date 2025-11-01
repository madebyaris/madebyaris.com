'use client'

import { useEffect } from 'react'

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('[SW] Service Worker registered successfully:', registration.scope);
          
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker is available, prompt user or auto-update
                  console.log('[SW] New service worker available');
                  
                  // Option 1: Auto-update (recommended for better UX)
                  newWorker.postMessage({ type: 'SKIP_WAITING' });
                  
                  // Option 2: Show notification to user (uncomment if preferred)
                  // showUpdateNotification();
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('[SW] Service Worker registration failed:', error);
        });

      // Handle controller change (when new SW takes control)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('[SW] Service Worker controller changed, reloading page');
        window.location.reload();
      });
    }
  }, []);

  return null; // This component doesn't render anything
}

// Optional: Function to show update notification (for future use)
// function showUpdateNotification() {
//   if (confirm('A new version is available. Would you like to reload?')) {
//     window.location.reload();
//   }
// } 