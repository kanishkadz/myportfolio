import React from 'react'
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='mt-12 text-white/70 py-8 container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Kanishka Anand</h1>
        <div>
            <a href="#" className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
        </div>
    </div>
  )
}
