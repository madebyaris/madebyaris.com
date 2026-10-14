import Image from 'next/image'

interface HeroImageProps {
  src: string
  alt: string
}

// Generated service illustrations are all 1280x720.
export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <figure className="-mt-4 mb-16 max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-3xl bg-zinc-100 shadow-xl shadow-zinc-900/10 ring-1 ring-white/60">
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={720}
          sizes="(min-width: 1100px) 1024px, 100vw"
          loading="eager"
          className="w-full h-auto"
        />
      </div>
    </figure>
  )
}
