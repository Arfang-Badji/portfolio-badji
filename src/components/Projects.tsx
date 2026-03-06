import Title from "./Title";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const projects = [
  {
    id: 1,
    title: "Gestionnaire de taches",
    description: "Application pour organiser les tâches et améliorer la productivité.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    image: img1,
    github: "https://github.com/Arfang-Badji/portfolio-badji",
    live: "https://portfolio-badji.vercel.app",
  },
  {
    id: 2,
    title: "Plateforme E-commerce",
    description: "Plateforme de vente en ligne avec gestion des produits et panier.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    image: img2,
    github: "https://github.com/Arfang-Badji/portfolio-badji",
    live: "https://portfolio-badji.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Web",
    description: "Portfolio personnel pour présenter mes projets et compétences.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: img3,
    github: "https://github.com/Arfang-Badji/portfolio-badji",
    live: "https://portfolio-badji.vercel.app",
  },
  {
    id: 4,
    title: "Application de chat en temps réel",
    description: "Application de messagerie permettant de discuter instantanément.",
    technologies: ["React", "Node.js", "Socket.io"],
    image: img4,
    github: "https://github.com/Arfang-Badji/portfolio-badji",
    live: "https://portfolio-badji.vercel.app",
  },
  {
    id: 5,
    title: "Système de réservation de salles",
    description: "Application permettant de réserver des salles de réunion.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: img5,
    github: "https://github.com/Arfang-Badji/portfolio-badji",
    live: "https://portfolio-badji.vercel.app",
  },
  {
    id: 6,
    title: "Analyseur de sentiments",
    description: "Application qui analyse les sentiments dans les publications des réseaux sociaux.",
    technologies: ["Python", "React", "API"],
    image: img6,
    github: "https://github.com/Arfang-Badji/portfolio-badji",
    live: "https://portfolio-badji.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-10">
      <Title title="MES PROJETS" />

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-5 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-56 rounded-xl"
            />

            <h1 className="mt-3 text-xl font-bold">{project.title}</h1>
            <p className="text-sm mt-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge badge-accent badge-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-3">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                Voir le site
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent btn-sm"
              >
                Voir le code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;