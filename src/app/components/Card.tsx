'use client'
import React from 'react'
import Image from 'next/image'





interface Data{
    id:number;
    image:string;
    heading:string;
    star:string;
    tex:string
  }


  interface CardProps {
    data: Data;
  }
  
  const Card: React.FC<CardProps> = ({ data }) => {
    const { image, heading, star, tex } = data;
 
    return (
    <div className='flex flex-col justify-start pt-5 md:w-[20%]'>
        <Image src={image} width={100} height={100} alt='da' className='w-[150px] h-[170px] md:w-[250px] md:h-[250px]'/>
        <h1 className='text-[12px] md:text-[16px] font-bold leading-[15px] py-3'>{heading}</h1>
        <Image src={star} width={100} height={100} alt='s' className='w-[125px] h-[15px] md:w-[140px] md:h-[19px]  md:gap-[8px]'/>
        <p className='font-bold text-[18px] md:text-[22px] '>{tex}</p>
    </div>
  )
}

export default Card
