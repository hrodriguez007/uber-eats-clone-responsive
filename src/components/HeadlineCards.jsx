import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='p-5 py-12 max-w-[1640px] mx-auto grid gap-6 md:grid-cols-3'>
        {/* Card */}
        <div className='relative rounded-xl'>
            {/* overlay */}
            <div className='bg-black/40 text-white absolute w-full h-full'>
                <p className='px-2.5 pt-4 font-bold text-2xl'>Specials Too Good to Miss</p>
                <p className='px-2.5'>Through 4/15</p>
                <button className='absolute bottom-6 mx-2.5 bg-red-800 text-white border-zinc-700'>Order Now</button>
            </div>
            <img className='max-h-[180px] md:max-h-[220px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1554502078-ef0fc409efce?q=80&w=3368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='sushi dish' />
        </div>
        {/* Card */}
        <div className='relative rounded-xl'>
            {/* overlay */}
            <div className='bg-black/40 text-white absolute w-full h-full'>
                <p className='px-2.5 pt-4 font-bold text-2xl'>Gelato Promotions for the Season</p>
                <p className='px-2.5'>Through 5/15</p>
                <button className='absolute bottom-6 mx-2.5 bg-red-800 text-white border-zinc-700'>Order Now</button>
            </div>
            <img className='max-h-[180px] md:max-h-[220px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='gelato' />
        </div>
        {/* Card */}
        <div className='relative rounded-xl'>
            {/* overlay */}
            <div className='bg-black/40 text-white absolute w-full h-full'>
                <p className='px-2.5 pt-4 font-bold text-2xl'>Limited Edition Offers </p>
                <p className='px-2.5'>Through 4/08</p>
                <button className='absolute bottom-6 mx-2.5 bg-red-800 text-white border-zinc-700'>Order Now</button>
            </div>
            <img className='max-h-[180px] md:max-h-[220px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='fried chicken' />
        </div>
    </div>
  )
}

export default HeadlineCards