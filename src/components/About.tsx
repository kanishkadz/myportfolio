"use client";
import React from 'react';
import Image from "next/image";
import aboutImg from "../assets/profilepic.png";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";


const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto' id='about'>
      <div className='grid grid-cols-8 ga-6 place-items-center'>


        <div className='col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='flex flex-row p-6'>
            <Image src={book} alt='book' className='w-auto h-[130px]' />
            <div className='flex flex-col mt-2'>
              <h2 className='text-2xl font-bold tetx-white/80'>xxxx</h2>
              <p className='text-lg text-white/70 mt-2'>xxxx</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About