"use client";
import Image from 'next/image';
import cursor from "../assets/icon1.png";
import message from "../assets/icon2.png";
import { motion } from 'framer-motion';
import profilepic from "../assets/profilepic.png";
import React from 'react'

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom, #000, #2B1942_35%, #8F5C55_60%, #DBAF6E_80%)]">
        <div>
            <div className='text-8xl font-bold text-center'>
                <h1>Hi, I am</h1>
                <h1>Kanishka Anand</h1>
            </div>
        </div>
    </div>
  )
}

export default Hero