import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillPersonVcardFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { MdOutlineFavorite, MdLiveHelp } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";




const Navbar = () => {
    // toggle the side menu responsive
    //nav is a value, setNav is a function
    const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
    {/* top left quadrant of company name and side menu*/}
        <div className='flex items-center'>
        {/* when someone clicks it, will trigger it in nav */}
            <div onClick={() => setNav(!nav)} 
            className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-4'>
            OK <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-neutral-300 rounded-full p-1 text-[16px]'>
                <p className='bg-zinc-700 text-white rounded-full p-3'>Delivery</p>
                <p className='p-3'>Pickup</p>
            </div>
        </div>
        {/* Search bar */}
        <div className='bg-gray-100 rounded-full flex items-center px-2.5 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20} />
            <input className="text-black bg-transparent p-3 w-full focus:outline-none" type='text' placeholder='Search for food'/>
        </div>
        {/* Create the cart feature */}
        <button className='bg-zinc-700 text-white items-center py-2.5 rounded-full hidden md:flex'>
            <BsFillCartFill size={20} className='mr-2.5'/> Cart
        </button>

        {/* mobile responsive menu */}
        {/* the overlay to rest of screen when side menu clicked */}
        {/* only display overlay when state is true */}
        {/* if nav true then display */}
        {nav ? <div className='bg-black/40 fixed w-full z-10 top-0 h-screen left-0'></div> : ''}
        
        {/* pull out side menu */}
        {/* to set up nav is true otherwise don't show the side menu */}
        <div className={ nav ? 'fixed bg-white z-10 duration-200 h-screen top-0 left-0 w-[300px]' : 'fixed bg-white z-10 duration-200 h-screen top-0 left-[-100%] w-[300px]'}>
            {/* to be able to close side menu need to change nav state oppsite of current value */}
            <AiOutlineClose onClick={() => setNav(!nav)} 
            size={25} 
            className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>
            OK <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className=' text-gray-950 flex flex-col p-5 '>
                    <li className='py-3 flex text-lg'><BsFillCartFill size={25} className='mr-3'/> Cart</li>
                    <li className='py-3 flex text-lg'><TbTruckDelivery size={25} className='mr-3'/> Past Orders</li>
                    <li className='py-3 flex text-lg'><MdOutlineFavorite size={25} className='mr-3'/> Favorites</li>
                    <li className='py-3 flex text-lg'><GiWallet size={25} className='mr-3'/> Wallet</li>
                    <li className='py-3 flex text-lg'><MdLiveHelp size={25} className='mr-3'/> Help</li>
                    <li className='py-3 flex text-lg'><HiOutlineSpeakerphone size={25} className='mr-3'/> Promotions</li>
                    <li className='py-3 flex text-lg'><BsFillPersonVcardFill size={25} className='mr-3'/> OK Ones</li>
                    <li className='py-3 flex text-lg'><IoIosPeople size={25} className='mr-3'/> Invite People</li>
                </ul>
            </nav>
        </div>

    </div>
  );
};

export default Navbar