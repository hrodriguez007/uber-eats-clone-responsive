import React, { useState } from 'react';
import {data} from '../data/data.js';

const Food = () => {
    // console.log(data)
    const [foods, setFoods] = useState(data);

    // filtering type korean food/mexican food/pizza/etc
    // takes in a category, updates food state using filter array method
    const filterFoodType = (category) => {
        setFoods(
            data.filter((item) => {
                // category matches the one passed in
                return item.category === category;
            })
        );
    };

    // filter the price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
        
    };

  return (
    <div className='max-w-[1640px] px-4 py-12 m-auto'>
        <h1 className='text-center font-bold text-red-600 text-3xl'> Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
                <p className='font-bold'>Filter Type</p>
                    <div className='flex flex-wrap justify-between'>
                    {/* onClick added to filter out potential categories to only show a food group */}
                        <button onClick={() => setFoods(data)} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>All</button>
                        <button onClick={() => filterFoodType('korean-food')} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>Korean Food</button>
                        <button onClick={() => filterFoodType('mexican-food')} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>Mexican Food</button>
                        <button onClick={() => filterFoodType('italian-food')} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>Italian Food</button>
                        <button onClick={() => filterFoodType('pizza')} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>Pizza</button>
                        <button onClick={() => filterFoodType('chicken')} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>Chicken</button>
                    </div>
            </div>
            {/* Filter price */}
            <div>
                <p className='font-bold'>Filter Price</p>
                <div className='max-w-[390px] flex justify-between w-full'>
                    <button onClick={() => filterPrice('$')} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>$</button>
                    <button onClick={() => filterPrice('$$')} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='m-2 border-red-500 bg-red-500 text-[#fff] hover:text-red-500 hover:bg-[#fff]'>$$$$</button>
                </div>
            </div>
        </div>
        {/* Display Food Grid */}
        <div className='grid grid-cols-2 gap-6 pt-5 lg:grid-cols-4'>
        {/* bring out all foods with js */}
            {foods.map((item, index) => (
                <div key={index} className='shadow-2xl border hover:scale-90 duration-300'>
                    {/* matches the data.js source */}
                    <img src={item.image} alt={item.name} 
                        className='h-[220px] object-cover w-full'
                    />
                    <div className='px-3 py-5 flex justify-between'>
                        <p className='font-semibold'>{item.name}</p>
                        <p>
                            {/* matches the data.js source */}
                            <span className='bg-red-500 text-[#fff] p-2 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food