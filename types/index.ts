export interface User {
  id: string
  email: string
  password: string
  name: string
  role: string
  avatar: string
  creationAt: Date
  updatedAt: Date
}

export interface Product {
  id: string
  title: string
  slug: string
  price: number
  description: string
  category: Category
  images: Array<string>
  creationAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  creationAt: Date
  updatedAt: Date
}
