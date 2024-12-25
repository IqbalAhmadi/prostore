'use server'

import { signInFormSchema } from '../validators'
import { signIn, signOut } from '@/auth'
// import {isRedirectError} from 'next/dist/client/components/redirect'

// Custom implementation of isRedirectError
function isRedirectError(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'url' in error;
}

// Sign in the user with the provided credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    await signIn('credentials', user)

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      // console.log(error)
      throw error;
    }
    return { success: false, message: 'Invalid email or password' };
  }
}

// Sign out the current user
export async function signOutUser() {
  await signOut()
}
