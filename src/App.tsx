import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#282A36] text-[#f8f8f2]">
      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>
      <About />
      <div className="p-5 md:px-[15%]">
        <Experiences />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}