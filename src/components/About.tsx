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
        <div>
          <Image src={book} alt='book' className='w-auto h-[130px]' />
          <div>
            <h2 className='text-2xl font-bold'>xxxx</h2>
            <p>xxxx</p>
          </div>
        </div>

        </div>

      </div>
    </div>
  )
}

export default About