import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import img from "../assets/img.jpeg";

const Home = () => {
  return (
    <motion.div
      id="home"
      className="flex flex-col-reverse items-center justify-center my-10 md:flex-row md:my-32"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Texte présentation */}
      <div className="flex flex-col items-center md:items-start">
        <motion.h1
          className="mt-4 text-5xl font-bold text-center md:text-6xl md:text-left md:mt-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bonjour, <br />
          je suis <span className="text-accent">ARFANG.DEV</span>
        </motion.h1>

        <motion.p
          className="my-4 text-center text-md md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Je suis un développeur FrontEnd <br /> avec 2 ans d'expérience, utilisant React
          <br /> et Node.js. Contactez-moi si vous avez besoin de mes services.
        </motion.p>

        <motion.a
          href="#contact"
          className="btn btn-accent md:w-fit flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Mail className="w-5 h-5" />
          Contactez-Moi
        </motion.a>
      </div>

      {/* Image */}
      <motion.div
        className="md:ml-20 mb-6 md:mb-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <img
          src={img}
          alt="Profil"
          className="object-cover object-top border-8 shadow-xl w-80 h-80 md:w-96 md:h-96 border-accent"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;