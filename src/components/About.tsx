import Title from "./Title";
import img from "../assets/img.jpeg";
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Developpeur FrontEnd",
    description: "Je suis un developpeur frontend avec une bonne experience.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Developpeur Backend",
    description: "Je maitrise les bases du backend pour creer des APIs robustes.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Passionnee par l'UI/UX",
    description:
      "Creer des interfaces utilisteurs attrayantes et fonctionnelles est ma priorite.",
    icon: <Paintbrush className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <div id="about" className="bg-gray-800 p-10 mb-10 md:mb-32">
      <Title title="A PROPOS" />

      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="hidden md:block">
          <img
            src={img}
            alt="profil"
            className="object-cover object-top w-96 h-96 rounded-xl"
          />
        </div>

        <div className="space-y-4 md:ml-6">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col items-center p-5 shadow-xl md:flex-row bg-[#282A36] rounded-xl md:w-96"
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>

              <div className="text-center md:text-left md:ml-4">
                <h2 className="mb-1 text-xl font-bold">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;