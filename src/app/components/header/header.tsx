import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { RiFileList3Line } from 'react-icons/ri'
import Search from './search-form'
import { getBasket } from '@/app/service/basket-service'
const Header = async () => {
  const userId="Mansur123"
  const {cart}=await getBasket(userId)
  const totalQuantity=cart.items.reduce((acc,item)=>acc+item.quantity,0)
  
  return (
    <div className='bg-white flex justify-between items-center py-5 px-7 lg:py-6 lg:px-10 shadow-sm'>
        <Link href={"/"} className='text-2xl text-green-600 font-bold lg:text-3xl flex items-center gap-2'>
        <MdOutlineLocalGroceryStore/>
        <span>Manav</span>
        </Link>
        <Search/>
        <div className='flex items-center gap-5'>
            <Link href={"/orders"} className='text-lg relative text-gray-700 hover:text-green-600 transition flex items-center gap-2'>
            <RiFileList3Line className='text-2xl'/>
            <span className='max-md:hidden'>Siparişlerim</span>
            </Link>
            <Link href={"/cart"} className='text-lg relative text-gray-700 hover:text-green-600 transition flex items-center gap-2'>
            <div className='relative'>
            <FaShoppingCart className='text-2xl'/>
            <span className='absolute top-[-15px] right-[-10px] bg-green-500 text-white text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center'>{totalQuantity}</span>
            </div>
            <span className='max-md:hidden'>Sepetim</span>
            </Link>
        </div>
        
    </div>
  )
}

export default Header