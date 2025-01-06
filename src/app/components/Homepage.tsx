'use client'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { useState } from 'react';
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

const Homepage = () => {

const[open,setOpen]=useState<boolean>(false);


return (
<div className='w-[100%] h-auto mb-4'>
  <div className='w-[100%] h-[34px] md:h-[38px] bg-black text-white'>
      <h1 className='p-3 flex justify-center gap-2 font-serif font-normal text-[12px] md:text-[14px]'>Sign up and get 20% off to your first order. <p className='text-[12px] md:text-[14px] font-medium underline'>Sign Up Now</p> </h1>
   <h1  className='hidden md:block  absolute right-4 mt-[-38px] text-white'>X</h1>    
  </div>

{/* // navbar start */}

    <div className='main-nav w-[85%] h-[48px] m-auto mt-[20px]'>
          <div className='flex  justify-around md:justify-between gap-5 items-center'>
            <h1 className='block md:hidden'><GiHamburgerMenu className='w-[24px] h-[24px] text-center' /></h1>
            <h1 className='w-[126px] h-auto  md:w-[160px]  font-extrabold text-[25.2px] md:text-[32px] font-Bebas-Neue text-black'>SHOP.CO</h1>
            
            <div className='hidden md:block pt-2' >
            <ul className='flex justify-center items-center gap-4 font-normal text-[16px] '>
            <li className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between gap-2">
            Shop
            <span className={` transform transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}>▼</span>
          </button>

          {/* Submenu */}
          {open && (
            <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-full border border-gray-200">
              <li className="p-2 hover:bg-gray-100"> Item 1</li>
              <li className="p-2 hover:bg-gray-100">Item 2</li>
              <li className="p-2 hover:bg-gray-100">Item 3</li>
            </ul>
          )}
        </li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
            </div>
            
            <div className=' hidden md:block w-[30%] h-[40px] border bg-[#F0F0F0] py-[10px] px-[14px] rounded-[2rem]'>
            <div className='  flex justify-start gap-2    '>
            <h1 className='w-[20px] h-[20px] pt-[2px] pl-[2px] font-normal text-gray-400'><IoIosSearch /></h1>
            <h1 className='hidden md:block font-normal md:text-[14px] text-gray-400 '>Search for products...</h1>
            </div>
            </div>
              {/* <div className='block md:hidden'>
              <h1 className='w-[20px] h-[20px] pt-[2px] pl-[2px] font-normal text-black'><IoIosSearch /></h1>
              </div> */}
            <div className='flex justify-center items-center gap-[12px] md:gap-[14px] w-[92px] md:[62px]  h-auto'>
                <h1 className=' block  md:hidden'><IoIosSearch className='w-[20px] h-[20px]' /></h1> 
                 <h1><LuShoppingCart /></h1>
                 <h1><CgProfile /></h1> 
            </div>

              

          </div>

     </div> {/*//main-nav */}





    </div>
  )
}

export default Homepage
