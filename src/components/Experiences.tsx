import Title from "./Title";
import { motion } from "framer-motion";
import Counter from "./Counter";

import imgCSS from "../assets/css.png";
import imgHTML from "../assets/html.png";
import imgJS from "../assets/javascript.png";
import imgNode from "../assets/node.png";
import imgReact from "../assets/react.png";
import imgTailwind from "../assets/tailwind.png";
import imgTypeScript from "../assets/typescript.png";
import imgNext from "../assets/nextjs.png";
import imgPrisma from "../assets/prisma.png";

import google from "../assets/google.png";
import meta from "../assets/meta.png";
import amazon from "../assets/amazon.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgReact },
  { id: 5, name: "Node.js", image: imgNode },
  { id: 6, name: "Tailwind CSS", image: imgTailwind },
  { id: 7, name: "Typescript", image: imgTypeScript },
  { id: 8, name: "Next.js", image: imgNext },
  { id: 9, name: "Prisma", image: imgPrisma },
];

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Google",
    period: "Sep 2022 - Present",
    description: [
      "Développement de nouvelles fonctionnalités pour Google Maps.",
      "Optimisation des performances de l'application.",
    ],
    image: google,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Meta",
    period: "Jan 2021 - Août 2022",
    description: [
      "Création d'une plateforme interne de collaboration pour les équipes.",
      "Mise en place d'une architecture scalable et optimisée.",
    ],
    image: meta,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Amazon",
    period: "Mai 2019 - Déc 2020",
    description: [
      "Développement d'une interface utilisateur pour Amazon Web Services.",
      "Implémentation des tests unitaires et E2E.",
    ],
    image: amazon,
  },
];

const Experiences = () => {
  return (
    <motion.div
      id="experiences"
      className="mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Title title="EXPÉRIENCES" />

      <div className="flex flex-col md:flex-row justify-center gap-10 mt-8">
        {/* Skills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center transform hover:scale-110 transition-all duration-300"
            >
              <div className="w-24 h-24 border-2 rounded-full border-accent overflow-hidden">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Experiences */}
        <motion.div
          className="flex flex-col space-y-4 md:w-2/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col p-5 shadow-lg bg-[#282A36] rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="object-cover w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-bold text-accent">
                    {exp.role}, {exp.company}
                  </h2>
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              <ul className="mt-2 ml-14 list-disc space-y-1">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Exemple compteur dynamique */}
          <div className="mt-6 text-center text-xl font-semibold">
            Projets réalisés : <Counter end={6} /> | Technologies : <Counter end={skills.length} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experiences;