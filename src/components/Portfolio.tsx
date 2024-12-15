"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/project.jpg";
import project1 from "../assets/project.jpg";
import React from 'react'

const projects = [
    {
        title: "xxx",
        desc: "xxx",
        devStack: "xxx",
        link: "#",
        git: "#",
        src: project
    },
    {
        title: "xxx",
        desc: "xxx",
        devStack: "xxx",
        link: "#",
        git: "#",
        src: project
    },
    {
        title: "xxx",
        desc: "xxx",
        devStack: "xxx",
        link: "#",
        git: "#",
        src: project
    },
]

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18" id="portfolio">
        <div className="max-w-[1200px] mx-auto space-y-24">
            {projects.map((project, index) => (
                <motion.div
                key={index}
                initial={{ opacity:0, y: 75}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{ duration:0.5, delay: 0.25 }}
                >
                    <div>
                        <h2>{`0${index + 1}`}</h2>

                    </div>

                    <div className="flex justify-center items-center">
                        <Image src={project.src} alt={project.title} className="h-[400px] w-auto object-cover" />
                    </div>

                </motion.div>
            ))}
        </div>
        
    </div>
  )
}

export default Portfolio