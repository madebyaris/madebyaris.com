import Image from 'next/image'

interface FeaturedImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export function FeaturedImage({ src, alt, width, height }: FeaturedImageProps) {
  return (
    <div className="relative mb-12 overflow-hidden rounded-2xl shadow-sm w-full">
      <div className="aspect-video bg-zinc-100">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority
          fetchPriority="high"
          quality={90}
        />
      </div>
    </div>
  )
}
