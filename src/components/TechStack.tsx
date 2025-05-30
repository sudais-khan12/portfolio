import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
    const stack = [
    // Frontend
    {
        title: "Next.js",
        src: "/images/logos/next.png",
        className: "h-10 w-14",
    },
    {
        title: "Typescript",
        src: "/images/logos/typescript.png",
        className: "h-10 w-12",
    },
    {
        title: "Tailwind",
        src: "/images/logos/tailwind.png",
        className: "h-10 w-24",
    },
    {
        title: "Framer Motion",
        src: "/images/logos/framer.webp",
        className: "h-10 w-10",
    },
    {
        title: "Figma",
        src: "/images/logos/figma.png",
        className: "h-10 w-8",
    },

    // Backend / API
    {
        title: "Node",
        src: "/images/logos/node.png",
        className: "h-10 w-12",
    },
    {
        title: "Express",
        src: "/images/logos/icons8-express-js-50.png",
        className: "h-10 w-12",
    },
    {
        title: "Graphql",
        src: "/images/logos/icons8-graphql-48.png",
        className: "h-10 w-12",
    },

    // Databases
    {
        title: "MongoDB",
        src: "/images/logos/icons8-mongodb-48.png",
        className: "h-10 w-10",
    },
    {
        title: "PostgreSql",
        src: "/images/logos/icons8-postgresql-48.png",
        className: "h-10 w-10",
    },
    {
        title: "MySql",
        src: "/images/logos/icons8-mysql-100.png",
        className: "h-12 w-12",
    },

    // DevOps / Hosting
    {
        title: "Vercel",
        src: "/images/logos/vercel.png",
        className: "h-10 w-24",
    },
    {
        title: "Docker",
        src: "/images/logos/icons8-docker-48.png",
        className: "h-10 w-10",
    },
    {
        title: "AWS",
        src: "/images/logos/aws.webp",
        className: "h-10 w-10",
    },
    {
        title: "Github Actions",
        src: "/images/logos/githubactions.svg",
        className: "h-10 w-10",
    },

    // Testing
    {
        title: "Jest",
        src: "/images/logos/icons8-jest-48.png",
        className: "h-10 w-10",
    },
    {
        title: "Cypress",
        src: "/images/logos/cypress.svg",
        className: "h-10 w-10",
    },
    {
        title: "Cucumber",
        src: "/images/logos/Cucumber.png",
        className: "h-10 w-10",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
           <Image
            src={item.src}
            key={item.src}
            width={200}
            height={200}
            alt={item.title}
            className={twMerge("mr-4 mb-4 object-contain", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
