import React from 'react'
import { products } from '../constants'
import {star} from '../assets/icons'

const popularProducts = () => {
  return (
    <section id='products'>
      <div className='max-container gap-5 max-sm:mt-12'>
      <h2 className='font-palanquin font-bold  text-4xl'>
        <span>Our <span className='text-coral-red '>Popular</span> Products</span>
      </h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top notch quality and style with our sought after selections. Discover a world of comfort, design and value</p>
      </div>
      <div className='mt-16 grid md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-14 justify-center'>
        {products.map((items)=>(
          <div key={items.imgURL}>
            <div className='flex flex-1 flex-col w-full'>
              <div className='w-[280px] h-[280px]'><img src={items.imgURL} className='object-cover '/></div>
              <div className='mt-8'>
                <div className='flex gap-2.5 items-center'>
                  <img src={star} height={24} width={24}/>
                  <p className='font-montserrat text-slate-gray '>4.5</p>
                </div>
                <p className='text-2xl font-palanquin mt-2 font-semibold'>{items.name}</p>
                <p className='font-2xl font-montserrat text-coral-red font-semibold'>{items.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default popularProducts

{/* <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div> */}