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

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav)
    }


    return (
        <div> </div>
    )
}

export default Navbar