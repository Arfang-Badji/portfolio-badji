import { useState, useEffect, useRef } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // --- Hooks pour le formulaire ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  // --- useEffect pour le message temporaire ---
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // --- Fonction pour envoyer le formulaire ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // --- Envoi EmailJS ---
    emailjs.sendForm(
      "service_tinon99",       
      "template_sd3xpc5",     
      form.current,
      "pF_a8G-nWzPRwVeOk"           
    )
    .then(() => {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((err) => {
      console.error("Erreur lors de l'envoi :", err);
    });
  };

  return (
    <div className="mt-16">
      <Title title="CONTACT" />

      <div className="flex flex-col items-center justify-center mt-8">

        {/* Réseaux sociaux */}
        <div className="flex gap-6 mb-6">
          <a href="https://github.com/" target="_blank" className="text-xl font-bold hover:text-accent">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" className="text-xl font-bold hover:text-accent">LinkedIn</a>
          <a href="mailto:badjiarfang94@gmail.com" className="text-xl font-bold hover:text-accent">Email</a>
        </div>

        {/* Formulaire */}
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col w-full max-w-md p-6 space-y-4 shadow-xl bg-[#282A36] rounded-xl">
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
            className="p-2 font-bold text-black border rounded-lg outline-none border-base-300"
            required
          />

          <input
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            className="p-2 font-bold text-black border rounded-lg outline-none border-base-300"
            required
          />

          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Votre message"
            className="p-2 font-bold text-black border rounded-lg outline-none border-base-300"
            required
          />

          <button type="submit" className="p-2 font-bold text-black transition rounded-lg bg-accent hover:opacity-80">
            Envoyer
          </button>
        </form>

        {/* Message temporaire */}
        {submitted && <p className="mt-2 font-semibold text-black-500">Message envoyé !</p>}

      </div>
    </div>
  );
};

export default Contact;