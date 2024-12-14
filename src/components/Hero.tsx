"use client";
import Image from 'next/image';
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from 'framer-motion';
import profilepic from "../assets/profilepic.png";
import React from 'react'

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom, #000, #2B1942_35%, #8F5C55_60%, #DBAF6E_80%)]">
        <div>
            <div className='text-8xl font-bold text-center'>
                <h1 className='text-[#98B4CE]'>Hi, I am</h1>
                <h1 className='text-[#E48A57]'>Kanishka Anand</h1>
            </div>

            <motion.div
                className='absolute left-[280px] top-[170px]'
                drag
            >
                <Image src={cursor} height="170" width="170" alt="cursor" className='' draggable="false" />
            </motion.div>

            <motion.div
                className='absolute right-[220px] top-[20px]'
                drag
            >
                <Image src={lightning} height="120" width="120" alt="cursor" className='' draggable="false" />
            </motion.div>
        </div>

        <p className='text-center text-xl max-w[500px' mx-auto>
            I am a full-stack developer focused on creating websites that rpovide the best experience for users.
        </p>

    </div>
  )
}

export default Hero