import React from "react";
import gymsbond from "@/public/gyms-bond.png";
import { CgWorkAlt } from "react-icons/cg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer Intern",
    company: "Bitshares Labs, Inc.",
    location: "Baguio City, Philippines",
    description: "I worked as a web developer intern for 2-3 months in Bitshares Labs, Inc.",
    projects: ["Basic Login System", "User Manual", "General Assembly", "Web Facial Recognition with PHP and JavaScript", "Two-Factor Authentication OTP-SMS Login System"],
    date: "February - April 2022",
  }  
] as const;

export const projectsData = [
  {
    title: "Gym's Bond: Android-based Gym Fitness and Buddy Finder Mobile Application",
    description: "I worked as one of the developers of this capstone project. In this application, users can workout in homes or in the gym with the available regimes in the app. Also, users can find a gym buddies.",
    tags: ["Java", "PHP", "MySql", "APIs"],
    date: "2022",
    imageUrl: gymsbond,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript ES6",
  "Framer Motion",
  "React",
  "NodeJS",
  "PHP, scpecifically using the Laravel framework",
  "Java",
  "Kotlin",
  "Git",
  "MySQL",
  "Restfull API development",
  "OOP (Object Oriented Programming)",
  "Data Structures"
] as const;