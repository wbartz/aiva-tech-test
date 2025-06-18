'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(5, 'Password must be at least 5 characters'),
})

type FormSchema = z.infer<typeof formSchema>

export function LoginForm() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'john@mail.com',
      password: 'changeme',
    },
  })

  async function onSubmit(data: FormSchema) {
    startTransition(async () => {
      const response = await signIn('credentials', {
        ...data,
        redirect: false,
        callbackUrl: '/',
      })

      if (response?.error) {
        toast.error(response.error, {
          description: 'Please check your credentials and try again.',
        })
      } else {
        router.push(response?.url || '/')
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" disabled={isPending} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} className="ml-auto w-full" type="submit">
          Sign In
        </Button>
      </form>
    </Form>
  )
}
