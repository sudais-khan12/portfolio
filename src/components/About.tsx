"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there — I&apos;m Sudais Khan, a dedicated developer, educator,
          and lifelong learner with a passion for building clean, intelligent,
          and user-friendly digital experiences.
        </Paragraph>
        <Paragraph className=" mt-4">
          My journey into tech began with curiosity and a love for solving
          real-world problems through code. Today, I specialize in modern web
          development using TypeScript, React, and Next.js — crafting
          pixel-perfect interfaces that don&apos;t just look good but work
          beautifully under the hood.
        </Paragraph>

        <Paragraph className=" mt-4">
          But development is only part of the story. I&apos;m also deeply
          invested in teaching and sharing knowledge, both as a computer science
          instructor and a learner always exploring new tools, frameworks, and
          concepts — from C++ fundamentals to advanced AI and machine learning
          models.
        </Paragraph>
        <Paragraph className=" mt-4">
          Design plays a central role in my work. I believe that great UX/UI is
          as much about clarity and empathy as it is about aesthetics. Whether
          I&apos;m refactoring a component for better performance or sketching
          out a fresh interface, I&apos;m always thinking about the user
          experience from every angle.
        </Paragraph>
        <Paragraph className=" mt-4">
          On this site, you&apos;ll find a mix of what drives me — the code I
          write, the tools I build, and the insights I share. Whether
          you&apos;re a fellow developer, student, collaborator, or just curious
          about how things work behind the scenes, there&apos;s something here
          for you.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thanks for stopping by — let&apos;s build something meaningful,
          together.
        </Paragraph>
      </div>
    </div>
  );
}
