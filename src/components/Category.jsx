import React from 'react'
import { categories } from '../data/data.js';

const Category = () => {
    console.log(categories)
  return (
    <div className='px-3 py-13 max-w-[1640px]'>
        <h1 className='text-center font-bold text-red-600 text-3xl'>Essentials</h1>
        {/* categories section */}
        <div className='gap-6 py-6 grid grid-cols-2 md:grid-cols-4'>
        {categories.map((item, index) => (
            <div key={index}
            className='bg-gray-200 rounded-md flex justify-between items-center p-3'>
                <h2 className='font-semibold sm:text-lg'>{item.name}</h2>
                <img src={item.image} alt={item.name}
                    className='w-16'
                />
            </div>

        ))}
        </div>
        <h1 className='text-center text-red-300 text-xl'><a href="https://storyset.com/food">Food Illustrations by Storyset</a></h1>
    </div>
  )
}

export default Category