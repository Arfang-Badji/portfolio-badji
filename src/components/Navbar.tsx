import { useState } from "react";
import { Container, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "A Propos", href: "#about" },
    { name: "Mes Experiences", href: "#experiences" },
    { name: "Mes Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#282A36] p-4 md:px-16 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center font-bold text-xl md:text-2xl">
          <Container className="mr-2 w-6 h-6" />
          ARFANG<span className="text-accent">.DEV</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="btn btn-sm btn-ghost hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col space-y-4 mt-4 bg-gray-800 p-4 rounded-lg md:hidden"
        >
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="block text-center font-semibold py-2 rounded hover:bg-gray-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;