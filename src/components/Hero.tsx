"use client";
import Image from 'next/image';
import cursor from "../assets/icon1.png";
import message from "../assets/icon2.png";
import { motion } from 'framer-motion';
import profilepic from "../assets/profilepic.png";
import React from 'react'

const Hero = () => {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom, #000, #2b1942_35%, #8f5c55_60%, #dbaf6e_80%)]'>

        <div>
            <div>
                <h1>Hi, I am</h1>
                <h1>Kanishka Anand</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero