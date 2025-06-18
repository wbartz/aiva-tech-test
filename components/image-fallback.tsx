'use client'

import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps['src']
}

const fallbackImage = '/placeholder.svg'

export const ImageWithFallback = ({
  fallback = fallbackImage,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState<
    React.SyntheticEvent<HTMLImageElement, Event> | undefined
  >()

  useEffect(() => {
    setError(undefined)
  }, [src])

  console.log(error)

  return (
    <Image
      alt={alt}
      onError={setError}
      src={error ? fallbackImage : src}
      {...props}
    />
  )
}
