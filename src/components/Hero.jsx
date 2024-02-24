import React from 'react'

const Hero = () => {
  return (
    <div className='p-5 mx-auto max-w-[1640px]'>
        <div className='relative max-h-[500px]'>
            {/* overlay */}
            <div className='max-h-[500px] absolute w-full h-full flex flex-col text-gray-200 bg-[#000]/50 justify-center'>
                <h1 className='px-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold'>The <span className='text-red-500'>Ok</span></h1>
                <h1 className='px-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold'><span className='text-red-500'>Eats </span>Dispatched</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src='https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pic of ramen'/>
        </div>
    </div>
  )
}

export default Hero