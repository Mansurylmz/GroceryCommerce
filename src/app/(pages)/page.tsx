import React from 'react'
import Hero from '../components/home/hero'
import Categories from '../components/home/categories'
import Products from '../components/home/products'


const Home = () => {
  return (
    <div className='p-5 md:p-7 lg:px-14'>
      <Hero/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home