"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { experiencesData } from '@/lib/data';
import ExperienceCard from './experience-card';
import { useSectionInView } from '@/lib/hooks';

type Props = {}

export default function Experience({}: Props) {
  const { ref } = useSectionInView('Experience', 0.5);

  return (
    <motion.section 
    ref={ref}
    id="experience"
    className="mb-28 leading-8 sm:mb-40 scroll-mt-28 h-screen flex flex-col relative overflow-hidden text-left max-w-full px-10 justify-evenly mx-auto items-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-950/80">
        {
          experiencesData.map((experience, index) => (
            <React.Fragment key={index}>
              <ExperienceCard {...experience}/>
            </React.Fragment>
          ))
        }
      </div>
    </motion.section>
  )
}