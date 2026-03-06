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
        description: "Un gestionnaire de taches pour organiser votre travail et vos projets.",
        technologies: ["React", "Node.js", "Tailwind CSS"],
        image: img1,
    },
    {
        id: 1,
        title: "Plateforme E-commerce",
        description: "Un gestionnaire de taches pour organiser votre travail et vos projets.",
        technologies: ["React", "Node.js", "Tailwind CSS"],

        image: img2,
    },
    {
        id: 1,
        title: "Portfolio E-commerce",
        description: "Un gestionnaire de taches pour organiser votre travail et vos projets.",
        technologies: ["React", "Node.js", "Tailwind CSS"],
        image: img3,
    },
    {
        id: 1,
        title: "Application de chat en temps reel",
        description: "Un gestionnaire de taches pour organiser votre travail et vos projets.",
        technologies: ["React", "Node.js", "Tailwind CSS"],
        image: img4,
    },
    {
        id: 1,
        title: "systeme de reservation de salles",
        description: "Un gestionnaire de taches pour organiser votre travail et vos projets.",
        technologies: ["React", "Node.js", "Tailwind CSS"],
        image: img5,
    },
    {
        id: 1,
        title: "Analyseur de sentiments pour les reseaux sociaux",
        description: "Un gestionnaire de taches pour organiser votre travail et vos projets.",
        technologies: ["React", "Node.js", "Tailwind CSS"],
        image: img6,
    },
]

const Projects = () => {
    return (
        <div className="mt-10">
            <Title title="MES PROJETS" />
            <div className="grid gap-4 md:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="p-5 bg-gray-800 shadow-lg h-fit rounded-xl">
                        <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-xl" />
                    <div>
                        <h1 className="my-2 font-bold">
                            {project.title}
                        </h1>
                        <p className="text-sm">{project.description}</p>
                    </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm" >{tech}</span>
                            ))}
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Projects;