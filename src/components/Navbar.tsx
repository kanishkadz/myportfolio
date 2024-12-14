"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from 'framer-motion';

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <div className="text-white/70 py-6">
            <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index} >
                            <Link href={link.path}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Navbar