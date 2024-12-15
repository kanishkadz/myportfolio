import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id="contact">
        <div className='flex justify-center items-center'>
            <ul>
                <li className='flex items-center'>
                    <Image src={phone} alt="phone" className='h-[110px] w-auto mr-6' />
                    <p className='text-xl'>+91-9478412546</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Contact