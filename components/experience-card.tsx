import React from 'react'
import BitsharesLabs from '/public/bitshares-labs.jpg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiencesData } from '@/lib/data';
import Api from '@/public/logos/api.png';
import Bootstrap from '@/public/logos/bootstrap.png';
import Composer from '@/public/logos/composer.png';
import Css from '@/public/logos/css.png';
import Html from '@/public/logos/html.png';
import Js from '@/public/logos/js-es6.png';
import JQuery from '@/public/logos/jsquery.png';
import Sql from '@/public/logos/MySQL.png';
import Php from '@/public/logos/php.png';

type Props = (typeof experiencesData)[number];

export default function ExperienceCard({ title, company, location, description, projects, date}: Props) {
  return (
    <section className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[10px] xl:w-[400px] snap-center bg-gray-200 p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0}}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true }}
        >
          <Image src={BitsharesLabs}
            alt="Bitshares Labs"
            className="w-32 h-32 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          />
      </motion.div>

      
      <motion.div 
      className="px-0 md:px-10 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity:1, y: 0 }}
      transition={{ delay: 0.175 }}
      >
        <h4 className="text-2xl font-light">{company}</h4>
        <p className="font-bold text-1xl mt-1">{title}</p>
        <div className="flex space-x-2 my-2">
          <Image className="h-6 w-6 rounded-full" src={Html} alt=""/>
          <Image className="h-6 w-6 rounded-full" src={Css} alt=""/>
          <Image className="h-6 w-6 rounded-full" src={Js} alt=""/>
          <Image className="h-6 w-6 rounded-full" src={Bootstrap} alt=""/>
          <Image className="h-6 w-6 rounded-full" src={Php} alt=""/>
          <Image className="h-6 w-6 rounded-full" src={JQuery} alt=""/>
          <Image className="h-6 w-6 rounded-full" src={Composer} alt=""/>
          <Image className="h-6 w-6 rounded-full" src={Sql} alt=""/>
          <Image className="h-6 w-6 rounded-full" src={Api} alt=""/>
        </div>
        <p className="uppercase py-5 text-gray-900 text">{date}</p>

        <ul className="list-disc space-y-2 ml-5 text-lg">
          {
            projects.map((project, index) => (
              <li 
              key={index}
              >{project}</li>
            ))
          }
        </ul>
      </motion.div>
    </section>
  )
}