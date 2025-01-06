import React from "react"
import Image from "next/image"
import a from "../../../public/a.png"
import c from "../../../public/c.png"
import { IoMdStar } from "react-icons/io";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";

const Browsestyle = () => {
  return (
    <div className='mt-[300px] md:mt-[110px] w-[100%] h-[1600px] bg-white'>
        <div className='w-[85%]  h-[1100px] md:h-[900px] bg-[#F0F0F0] m-auto rounded-[40px] px-[20px] py-[30px]'>
            <h1 className='font-bold leading-[36px] text-[30px] md:start-[40px] md:leading-[57.6px] text-center'>BROWSE BY DRESS STYLE</h1>
            <div className='w-[100%] m-auto  grid grid-cols-1 md:grid-cols-3 gap-6   mt-11  py-5'>
                <div className=' col-span-1 '>
                  <Image src={a} height={250} width={289} alt='help' className='rounded object-cover bg-cover w-[100%] h-[100%] '/>      
                </div>
                <div className=' col-span-2'>
                  <Image src={c} width={684} height={250} alt='hello' className='w-[100%] h-[100%] object-cover '/>
                </div>

            </div>

           <div className='m-auto  grid grid-cols-1 md:grid-cols-3 gap-2   px-5 py-5'>
           <div className=' col-span-2 gap-1'>
                  <Image src={c} width={684} height={250} alt='hello' className='w-[100%] h-[100%] object-cover '/>
                </div>
                <div className=' col-span-1 gap-1'>
                  <Image src={a} height={250} width={289} alt='help' className='w-[100%] h-[100%]'/>      
                </div>
                

            </div>        
        
        {/* happy customer */}
        
        </div>
      
      
        <div className=' w-[80%] m-auto h-[58px] mt-[200px] md:mt-16'>
          <h1 className=' text-center font-bold text-[24px] md:text-[48px] leading-[57.6px] tracking-tighter'>OUR HAPPY CUSTOMERS</h1>
        </div>

        <div className='mt-8  w-[80%] h-[240px] m-auto flex flex-col md:flex-row  justify-between'>
          <div className='px-5 py-5 w-[100%] md:w-[30%] h-[240px] border rounded-[20px]'>
              <div className='w-[100%] h-[160px]'>
                <div className='flex justify-start'>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                </div>
                <div className='flex justify-start mt-5'>
                    <h1 className='font-bold  text-[20px] leading-[22px]'>Sarah M.</h1>
                    <BiSolidRightTopArrowCircle  className='w-[19.5px] h-[19.5px] text-white bg-[#01AB31] '/>
                </div>
                <p className='text-[15px] leading-[22px] font-normal text-justify mt-3 opacity-50'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>

              </div>
          </div>
          <div className='px-5 py-5 w-[100%] md:w-[30%] h-[240px]  border rounded-[20px]'>
              <div className='w-[100%] h-[160px]'>
                <div className='flex justify-start'>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                </div>
                <div className='flex justify-start mt-5'>
                    <h1 className='font-bold  text-[20px] leading-[22px]'>Sarah M.</h1>
                    <BiSolidRightTopArrowCircle  className='w-[19.5px] h-[19.5px] text-white bg-[#01AB31] '/>
                </div>
                <p className='text-[15px] leading-[22px] font-normal text-justify mt-3 opacity-50'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>

              </div>
          </div>
           <div className='px-5 py-5 w-[100%] md:w-[30%] h-[240px] border rounded-[20px]'>
              <div className='w-[100%] h-[160px]'>
                <div className='flex justify-start'>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                <IoMdStar className='w-[22px] h-[22px] text-[#FFC633]'/>
                </div>
                <div className='flex justify-start mt-5'>
                    <h1 className='font-bold  text-[20px] leading-[22px]'>Sarah M.</h1>
                    <BiSolidRightTopArrowCircle  className='w-[19.5px] h-[19.5px] text-white bg-[#01AB31] '/>
                </div>
                <p className='text-[15px] leading-[22px] font-normal text-justify mt-3 opacity-50'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>

              </div>
          </div>


        </div>



      <div className='mt-[450px] md:mt-10 w-[80%] grid grid-cols-1 md:flex md:flex-row justify-between bg-black h-[400px] md:h-[180px]  m-auto rounded-[20px]'>
        <div className='w-[100%] md:w-[60%] h-[100%] '>
          <h1 className='px-12 py-10 text-white text-justify font-extrabold text-[30px] md:text-[40px] leading-[30px] md:leading-[45px]'>STAY UPTO DATE ABOUT  <br />OUR LATEST OFFERS</h1>

        </div>

        <div className='w-[100%] md:w-[40%] h-[100%] py-7  grid grid-cols-1 items-center justify-center '>
          <div className='w-[80%] h-[40px] m-auto gap-2 bg-white rounded-[62px] px-4 py-2 flex justify-start'>
            <TfiEmail className='font-normal w-[24px] h-[24px] leading-[21px] opacity-30' />
            <h1 className='font-normal text-[16px] opacity-30'>Enter your email address</h1>
            
          </div>
          <div className='w-[80%] h-[40px] m-auto bg-white rounded-[62px] px-4 py-2 '>
            <h1 className='font-medium text-[16px] leading-[21.6px] text-center opacity-30' >Subscribe to Newsletter</h1>
          </div>

        </div>

      
      </div>




    </div>
  )
}

export default Browsestyle
