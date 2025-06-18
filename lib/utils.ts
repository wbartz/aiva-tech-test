import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${input}`, {
    ...init,
    next: { revalidate: 30 },
  })
  return response.json()
}

export const getDelta = (currentPage: number) => {
  switch (currentPage) {
    case 1: {
      return 4
    }
    case 2: {
      return 3
    }
    case 3: {
      return 2
    }
    default: {
      return 1
    }
  }
}

export const formatarMoeda = (valor: number) => {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export const formatarData = (data: string) => {
  return new Date(data).toLocaleDateString('pt-BR')
}

export function capitalizeFirstLetter(value: string) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1)
}

export function truncateTitle(title: string, maxLength: number) {
  if (title.length <= maxLength) {
    return title
  }
  return title.slice(0, maxLength) + '...'
}
