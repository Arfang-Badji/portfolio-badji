import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "./Title";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("success");
        form.current?.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="mt-16 px-4 md:px-0">
      <Title title="CONTACT" />
      <div className="flex flex-col items-center justify-center gap-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full max-w-md gap-4 p-6 bg-[#282A36] rounded-xl shadow-xl"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Votre nom"
            className="p-3 rounded-lg text-black outline-none border border-gray-400"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            className="p-3 rounded-lg text-black outline-none border border-gray-400"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows={5}
            className="p-3 rounded-lg text-black outline-none border border-gray-400"
            required
          />
          <button
            type="submit"
            className="p-3 font-bold text-black transition bg-accent rounded-lg hover:opacity-80"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Envoi..." : "Envoyer"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 font-semibold">✅ Message envoyé avec succès !</p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-semibold">❌ Une erreur est survenue.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;