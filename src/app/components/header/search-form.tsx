import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <form className='flex gap-2 py-2 px-4 rounded-full border border-zinc-300 md:w-1/2'>
        <button className={`text-xl text-zinc-700`}>
            <CiSearch/>
        </button>
        <input  type="text" placeholder='Bir ürün veya kategori arayın ' className='outline-0 text-zinc-800 w-full' />
    </form>
  )
}

export default Search