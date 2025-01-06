import React from 'react'
import Image from 'next/image'
import heroPick from '../../../public/heroPick.png'

const Hero = () => {
  return (
    <div className='bg-gray-200 w-[100%] h-auto  md:h-screen'>
        <div className='w-[85%] md:h-screen m-auto pt-[37px] md:pt-[55px] '>
            <div className=' grid gap-6 grid-row-2 md:grid-cols-2 justify-center content-center space-y-3 md:space-x-4'>
                <div className='no-1'>
                    <p className='font-extrabold text-[36px] md:text-[55px] leading-[35px]  md:leading-[55px]'>FIND CLOTHES <br />THAT MATCHES <br /> YOUR STYLE</p>
                     <p className='text-[12px] font-normal leading-[20px] text-gray-400 md:text-[14px] md:leading-[22px] pt-3'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>   
                      <button className='bg-black py-auto text-[16px] font-medium text-center px-[54px] rounded-[55px] text-white mt-4 w-[320px] h-[40px] md:w-[190px] md:h-[45px]'>Shop Now</button>  
                       <div className='grid  justify-between grid-cols-2 md:justify-between align-middle md:grid-cols-3 w-[80%] m-auto md:w-[100%] h-[74px] mt-3'>
                            <div className='border border-r-gray-300'>
                                <h1 className='text-[24px] leading-[32px] md:text-[40px] font-bold md:leading-[50px]'   >200+</h1>
                                <p className='text-[10px] md:text-[14px] leading-[22px] text-gray-400'>International Brands</p>
                            </div>
                            <div className='border border-r-gray-300'>
                                <h1 className='text-[24px] leading-[32px] md:text-[40px] font-bold md:leading-[50px] text-center '  >2000+</h1>
                                <p className='text-[10px] md:text-[14px] leading-[22px] text-gray-400 text-center'>High Quality Products</p>
                            </div>
                            
                            <div className='hidden md:block'>
                                <h1 className=' text-[24px] leading-[32px] md:text-[40px] font-bold md:leading-[50px] text-end '>30,00+</h1>
                                <p className='text-[10px] md:text-[14px] leading-[22px] text-gray-400 text-end'>Happy Customer</p>
                            </div>
                            
                        </div> 
                            
                        <div>
                        <div className='pt-2 grid grid-cols-1 text-center md:hidden'>
                                <h1 className=' text-[24px] leading-[32px] md:text-[40px] font-bold md:leading-[50px]  '>30,00+</h1>
                                <p className='text-[10px] md:text-[14px] leading-[22px] text-gray-400'>Happy Customer</p>
                            </div>
                        </div>
                </div>
                <div className='no-2 h-auto'>
                <Image src={heroPick} width={800} height={800} alt='pick'  className='mt-[-60px] md:mt-[-40px]  w-[100%] h-[100%] md:h-[78%] '/>
                </div>

            </div>
        
        </div>
        <div className=' absolute w-[100%] mt-[-60px] md:mt-0 h-[146px] md:h-[122px] bg-black'>
            <div className='m-auto w-[85%]  px-1  py-10  md:py-[2.5rem] md:px-[2rem] text-white flex flex-wrap justify-around items-center '>
                <h1 className='w-[116px] h-[23px] text-[1.5rem]'>VERSACE</h1>
                <h1 className='w-[63.81px] h-[26.65px] text-[1.5rem]'>ZARA</h1>
                <h1 className='w-[109.39px] h-[25.24px] text-[1.5rem]'>GUCCI</h1>
                <h1 className='w-[127px] h-[21px]  text-[1.5rem]'>PARDA</h1>
                <h1 className='w-[134.84px] h-[21.75px]  text-[1.5rem]'>Calvin Klein</h1>
            </div>

        </div>

    </div>
  )
}

export default Hero
