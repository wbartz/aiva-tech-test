'use client'

import { ImageWithFallback } from '@/components/image-fallback'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function Carrousel({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  return (
    <div className="w-full flex flex-col items-center">
      <Carousel className="w-full max-w-md relative">
        <CarouselContent>
          {images && images.length > 0 ? (
            images.map((img: string, index: number) => (
              <CarouselItem key={index}>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <ImageWithFallback
                    src={img}
                    alt={title}
                    width={640}
                    height={640}
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                <ImageWithFallback
                  src={'/placeholder.svg'}
                  alt={title}
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
