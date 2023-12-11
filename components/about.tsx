"use client";

import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import SectionHeading from './section-heading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
    ref={ref} 
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    >
      <SectionHeading>About</SectionHeading>
      <p className="mb-3">
      I am a recent <span className="font-medium">Information Technology</span> graduate specialized in <span className="font-medium">web technologies</span>. I graduate from <span className="font-medium">University of the Cordilleras</span>. I have a good understanding in <span className="font-medium">PHP, specifically in Laravel, Java, Data Structures, SQL, HTML, CSS, JavaScript ES6, Bootstrap, APIs, and Git version control system</span>.  
      <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
      </p>
      <p className="mb-3">
        Our final year capstone project is based on mobile application which we made a Fitness application with live-chats, buddy finder and more. We were group of three, and we made the project a success using our coding skills. I also have an internship experience in web development field and would like to utilize my skills for the growth of the company and improve my skills further.
      </p>
      <p>
        I like watching movies, playings guitar, listening to any kind of musics, and playing pc or mobile games.
      </p>
    </motion.section>
  )
}
