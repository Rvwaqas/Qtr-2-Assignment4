'use client'
import React from 'react'
import Card from './Card'
const NewArrival = () => {
  

  interface Data{
    id:number;
    image:string;
    heading:string;
    star:string;
    tex:string
  }

  const data:Data[]=[
    {
      id:1,
      image :'/Frame 32.png',
      heading:'T-shirt with Tape Details',
      star:'/Frame 35.png',
      tex:'$120',

    },
    {
      id:2,
      image :'/Frame 33.png',
      heading:'T-shirt with Tape Details',
      star:'/Frame 35.png',
      tex:'$120',
    },{
      id:3,
      image :'/Frame 34.png',
      heading:'T-shirt with Tape Details',
      star:'/Frame 35.png',
      tex:'$120',
    },{
      id:4,
      image :'/Frame 38.png',
      heading:'T-shirt with Tape Details',
      star:'/Frame 35.png',
      tex:'$120',
    }
  ]
  
  
  
  return (
    <>  
      <div className='w-[100%] mt-[200px] h-screen  px-[5px] pt-[40px]'>
        <h1 className='text-center font-bold  text-[32px] md:text-[48px] text-black'>NEW ARRIVALS</h1>
        <div className='w-[85%] h-auto m-auto '>
          <div className='flex flex-wrap  px-1 justify-between items-center '>
          {
            data.map((elem)=>{
              
              return  <Card key={elem.id} data={elem}/>
            })
          }
          

        
          <div className='flex justify-center mt-[2rem]  w-[100%]  text-[12px] font-normal md:text-[16px] leading-[18.9px] md:leading-[21.6px] md:font-medium'>
            <h1 className='  text-center border border-gray-300 rounded-[62px]  px-[54px] py-[16px]'>View All</h1>
          </div>
          <hr className='w-[100%] h-[3px] bg-slate-200 text-gray-300 m-10' />
          </div>
        
        </div>
    </div>

              {/* Top Selling start*/}

              <div className='w-[100%] mt-[200px] h-screen  px-[5px] pt-[40px]'>
        <h1 className='text-center font-bold  text-[32px] md:text-[48px] text-black'>Top Selling</h1>
        <div className='w-[85%] h-auto m-auto '>
          <div className='flex flex-wrap  px-1 justify-between items-center '>
          {
            data.map((elem)=>{
              
              return  <Card key={elem.id} data={elem}/>
            })
          }
          

        
          <div className='flex justify-center mt-[2rem]  w-[100%]  text-[12px] font-normal md:text-[16px] leading-[18.9px] md:leading-[21.6px] md:font-medium'>
            <h1 className='  text-center border border-gray-300 rounded-[62px]  px-[54px] py-[16px]'>View All</h1>
          </div>
          
          </div>
        
        </div>
    </div>



    </>

  )
}

export default NewArrival
