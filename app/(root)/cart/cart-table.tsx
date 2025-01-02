'use client'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'
import { useTransition } from 'react'
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.actions'
import { ArrowRight, Loader, Minus, Plus } from 'lucide-react'
import { Cart } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter()
  const { toast } = useToast()
  const [isPending, startTransition] = useTransition()

  return (
    <>
      <h1 className="py-4 h2-bold">Shopping Cart</h1>
      {!cart || cart.items.length === 0 ? (
        <div>
          Cart is empty. <Link className='hover:bg-yellow-500' href="/">Go Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-col-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">Table</div>
        </div>
      )}
    </>
  )
}

export default CartTable
