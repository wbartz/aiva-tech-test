'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function ProductError() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
      <p className="text-muted-foreground mb-6">
        Sorry, we couldn&apos;t find the product you are looking for.
        <br />
        It may have been removed or does not exist.
      </p>
      <Button className="mt-2" onClick={() => router.back()}>
        Go back
      </Button>
    </div>
  )
}
