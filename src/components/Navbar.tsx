import { useState, useEffect } from "react";
import { Container, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { name: "Accueil", href: "home" },
    { name: "A Propos", href: "about" },
    { name: "Experiences", href: "experiences" },
    { name: "Projets", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  // Navbar change au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.getElementById(link.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#282A36] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-4 md:px-16">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center text-xl font-bold md:text-2xl"
        >
          <Container className="w-6 h-6 mr-2" />
          ARFANG<span className="text-accent">.DEV</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className={`font-semibold transition ${
                  active === link.href
                    ? "text-accent"
                    : "hover:text-accent"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#282A36] flex items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center space-y-10 text-3xl font-bold">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${link.href}`}
                    onClick={() => setOpen(false)}
                    className={`transition ${
                      active === link.href
                        ? "text-accent"
                        : "hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;