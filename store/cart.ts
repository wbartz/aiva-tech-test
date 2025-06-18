import { Product } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem extends Partial<Product> {
  quantity: number
  image: string
}

type CartState = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  clearCart: () => void
  updateQuantity: (id: number, quantity: number) => void
}

// Use o localStorage padrão do zustand para persistência
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const state = get()
        const existing = state.items.find((i) => i.id === item.id)
        if (existing) {
          set({
            items: state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i,
            ),
          })
        } else {
          set({ items: [...state.items, item] })
        }
      },
      removeItem: (id) => {
        const state = get()
        set({ items: state.items.filter((i) => String(i.id) !== String(id)) })
      },
      clearCart: () => set({ items: [] }),
      updateQuantity: (id, quantity) => {
        const state = get()
        set({
          items: state.items.map((i) =>
            String(i.id) === String(id) ? { ...i, quantity } : i,
          ),
        })
      },
    }),
    {
      name: 'cart-storage',
      // Removido o storage customizado para evitar erro de tipagem
    },
  ),
)
