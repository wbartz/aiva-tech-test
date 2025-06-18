'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function BackButton() {
  const router = useRouter()

  return (
    <Button className="mt-2" onClick={() => router.back()}>
      Voltar
    </Button>
  )
}
