"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import profile_picture from '/public/profile-picture.jpg';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() { 
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext(); 
  
  return (
    <section
    ref={ref}
    id="home"
    className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
    >
      <div className="flex items-center justify-center ">
        <div className="relative">

          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          >
          <Image src={profile_picture}
          alt="Profile Picture"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl"
          />

          </motion.div>
          
          <motion.span className="absolute bottom-0 right-0 text-3xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1}}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
          >
            👋
            </motion.span>

        </div>
      </div>

      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-0.5xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      >
      Hello, I'm <span className="font-bold">John Leonard Mendoza Valledor</span>, a recent graduate with a <span className="font-bold">Bachelor of Science in Information Technolog, Major in Web Tech</span>, ready to make a mark in the dynamic tech landscape. Eager to leverage my academic foundation, I am passionate about <span className="italic">web development and software development</span>. This portfolio is a testament to my journey as a tech enthusiast, showcasing the skills, projects, and experiences that define my readiness to contribute to the ever-evolving world of Information Technology. 
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity:1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      >
        <Link href="#contact"
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
          </Link>
          <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" 
          href="/John Leonard Valledor CV.pdf" 
          download>
            Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
          </a>

          <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/jlvalledor10/"
          target="_blank"
          >
            <BsLinkedin />
          </a>

          <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10"
          href="https://github.com/leonardda-vinci"
          target="_blank"
          >
            <BsGithub />
          </a>

      </motion.div>
    </section>
  )
}
