// src/pages/Contact.tsx
import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaPhone } from "react-icons/fa";

export default function Contact() {
  useTheme(); // pour appliquer la classe "dark" sur <html>

  // State pour chacun des champs du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Fonction qui build et ouvre le lien mailto:
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Si on veut éviter d’ouvrir mailto: si les champs sont vides
    if (!name || !email || !message) {
      alert("Merci de remplir tous les champs avant d’envoyer.");
      return;
    }

    // On encode les paramètres pour éviter les problèmes d’espaces ou de caractères spéciaux
    const subject = encodeURIComponent(`Message de ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nCourriel : ${email}\n\nMessage :\n${message}`
    );

    // Crée la chaîne mailto avec sujet et corps
    const mailtoLink = `mailto:johnsondylan14@gmail.com?subject=${subject}&body=${body}`;

    // On redirige vers mailto: (ouvre le client mail)
    window.location.href = mailtoLink;
  }

  return (
    <section className="min-h-screen bg-stone-50 dark:bg-dj-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto p-8 space-y-8">
        <h1 className="text-3xl font-bold text-stone-800 dark:text-green-400 transition-colors duration-300">
          Me contacter
        </h1>

        {/* FORMULAIRE : on supprime action/method et on gère en React */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="
              w-full 
              bg-white dark:bg-zinc-900
              border border-stone-300 dark:border-zinc-700
              text-stone-900 dark:text-zinc-100
              rounded px-4 py-2
              placeholder-stone-400 dark:placeholder-zinc-500
              focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-green-500
              transition-colors duration-300
            "
          />
          <input
            type="email"
            name="email"
            placeholder="Courriel"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full 
              bg-white dark:bg-zinc-900
              border border-stone-300 dark:border-zinc-700
              text-stone-900 dark:text-zinc-100
              rounded px-4 py-2
              placeholder-stone-400 dark:placeholder-zinc-500
              focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-green-500
              transition-colors duration-300
            "
          />
          <textarea
            name="message"
            placeholder="Ton message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="
              w-full 
              bg-white dark:bg-zinc-900
              border border-stone-300 dark:border-zinc-700
              text-stone-900 dark:text-zinc-100
              rounded px-4 py-2
              placeholder-stone-400 dark:placeholder-zinc-500
              focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-green-500
              transition-colors duration-300
            "
          />
          <button
            type="submit"
            className="
              bg-emerald-600 dark:bg-green-600
              text-white
              px-6 py-2 rounded
              hover:bg-emerald-700 dark:hover:bg-green-500
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-green-500
              transition-all duration-200
            "
          >
            Envoyer
          </button>
        </form>

        {/* LIENS IMPORTANTS */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-emerald-700 dark:text-green-400 transition-colors duration-300">
            Liens importants
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-stone-700 dark:text-zinc-300 transition-colors duration-300">
              <FaGithub className="text-emerald-700 dark:text-green-400 transition-colors duration-300" />{" "}
              <a
                href="https://github.com/Cuplan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 dark:hover:text-green-300 transition-colors duration-200"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2 text-stone-700 dark:text-zinc-300 transition-colors duration-300">
              <FaLinkedin
                className="text-emerald-700 dark:text-green-400 transition-colors duration-300"
              />{" "}
              <a
                href="https://www.linkedin.com/in/dylan-johnson-447681280/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 dark:hover:text-green-300 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 text-stone-700 dark:text-zinc-300 transition-colors duration-300">
              <FaEnvelope
                className="text-emerald-700 dark:text-green-400 transition-colors duration-300"
              />{" "}
              <a
                href="mailto:johnsondylan14@gmail.com"
                className="hover:text-emerald-600 dark:hover:text-green-300 transition-colors duration-200"
              >
                johnsondylan14@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-stone-700 dark:text-zinc-300 transition-colors duration-300">
              <FaPhone
                className="text-emerald-700 dark:text-green-400 transition-colors duration-300"
              />{" "}
              <a
                href="tel:+18733070499"
                className="hover:text-emerald-600 dark:hover:text-green-300 transition-colors duration-200"
              >
                (873) 307-0499
              </a>
            </li>
          </ul>
        </div>

        {/* TÉLÉCHARGEMENT DE CV */}
        <div>
          <a
            href="/cv_Dylan.pdf" 
            download
            className="
              inline-flex items-center
              bg-stone-800 dark:bg-green-600
              text-white
              px-4 py-2 rounded
              hover:bg-stone-900 dark:hover:bg-green-500
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-green-500
              transition-colors duration-200
            "
          >
            <FaFileDownload className="mr-2" /> Télécharger mon C.V
          </a>
        </div>
      </div>
    </section>
  );
}
