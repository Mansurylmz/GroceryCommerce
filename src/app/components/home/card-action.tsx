"use client"
import { addToBasket } from '@/app/service/basket-service'
import { useRouter } from 'next/navigation'
import React, { FC, useState } from 'react'
import { FaPlus, FaSpinner } from 'react-icons/fa'

interface Props{
    productId:string
}

const CardActions:FC<Props> = ({productId}) => {
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const userId="Mansur123"
    const router=useRouter()
    const handleAddToCart=()=>{

        setIsLoading(true)
        addToBasket(
            userId,
            productId,
           1
        ).finally(()=>setIsLoading(false)).then(()=>router.refresh())
        
    }

    
    
  return (
  
        <button disabled={isLoading} onClick={handleAddToCart} className='bg-green-500 text-white p-2 rounded-full cursor-pointer hover:shadow-md transition-all shadow-sm hover:bg-green-600 disabled:brightness-85'>
            {isLoading ? <FaSpinner className='animate-spin'/> : <FaPlus/>}
        </button>
    
  )
}

export default CardActions