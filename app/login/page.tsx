import { ShoppingBag } from 'lucide-react'

import { LoginForm } from './components/login-form'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-primary font-bold" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Aiva Store
            </h1>
          </div>
        </h1>
        <LoginForm />
      </div>
    </div>
  )
}
