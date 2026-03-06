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
    description: "Application pour organiser vos taches.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    image: img1,
  },
  {
    id: 2,
    title: "Plateforme E-commerce",
    description: "Application e-commerce moderne.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    image: img2,
  },
  {
    id: 3,
    title: "Portfolio Developer",
    description: "Portfolio pour développeur.",
    technologies: ["React", "Tailwind CSS"],
    image: img3,
  },
  {
    id: 4,
    title: "Application Chat",
    description: "Chat en temps réel.",
    technologies: ["React", "Node.js"],
    image: img4,
  },
  {
    id: 5,
    title: "Systeme de reservation",
    description: "Application de reservation de salles.",
    technologies: ["React", "Node.js"],
    image: img5,
  },
  {
    id: 6,
    title: "Analyseur de sentiments",
    description: "Analyse des sentiments des reseaux sociaux.",
    technologies: ["React", "Node.js"],
    image: img6,
  },
];

const Projects = () => {
  return (
    <div id="projects" className="mt-10">
      <Title title="MES PROJETS" />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-5 bg-gray-800 shadow-lg rounded-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-56 rounded-xl"
            />

            <h1 className="my-2 font-bold">{project.title}</h1>

            <p className="text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge badge-accent badge-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;