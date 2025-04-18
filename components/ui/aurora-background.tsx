"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  // Use state to defer heavy rendering
  const [isLoaded, setIsLoaded] = useState(false);

  // Only render the aurora effect after the main content is loaded
  useEffect(() => {
    // Use setTimeout to defer the loading of the aurora effect
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        {isLoaded && (
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={cn(
                `aurora-bg
                [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
                [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
                [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
                [background-image:var(--white-gradient),var(--aurora)]
                dark:[background-image:var(--dark-gradient),var(--aurora)]
                [background-size:300%,_200%]
                [background-position:50%_50%,50%_50%]
                filter blur-[6px] invert dark:invert-0
                after:content-[""]
                after:absolute
                after:inset-0
                after:[background-image:var(--white-gradient),var(--aurora)]
                after:dark:[background-image:var(--dark-gradient),var(--aurora)]
                after:[background-size:200%,_100%]
                after:[background-position:50%_50%,50%_50%]
                after:mix-blend-difference
                pointer-events-none
                absolute
                -inset-[10px]
                opacity-40
                will-change-[opacity,filter]
                contain-[paint,layout]`,
                showRadialGradient &&
                  `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
              )}
            ></div>
          </div>
        )}
        {children}
      </div>
    </main>
  );
}; 