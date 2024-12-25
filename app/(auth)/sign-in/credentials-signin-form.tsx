'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signInDefaultVlaues } from '@/lib/constants'
import Link from 'next/link'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { sigInWithCredentials } from '@/lib/actions/user.actions'

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(sigInWithCredentials, {
    success: false,
    message: '',
  })

  const SignInButton = () => {
    const { pending } = useFormStatus()

    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? 'Signing In...' : 'Sign In'}
      </Button>
    )
  }

  return (
    <form action={action}>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultVlaues.email}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="password"
            defaultValue={signInDefaultVlaues.password}
          />
        </div>
        <div>
          <SignInButton/>
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" target="_self" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  )
}

export default CredentialsSignInForm
