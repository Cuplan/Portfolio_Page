import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold text-indigo-700">Me contacter</h1>

      {/* FORMULAIRE */}
      <form
        action="https://formspree.io/f/xkgbgbba" // ← Remplace par ton endpoint Formspree
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Nom"
          required
          className="w-full border rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Courriel"
          required
          className="w-full border rounded px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Ton message..."
          required
          rows={5}
          className="w-full border rounded px-4 py-2"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
        >
          Envoyer
        </button>
      </form>

      {/* LIENS IMPORTANTS */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-700">Liens importants</h2>
        <ul className="space-y-2 text-indigo-600">
          <li className="flex items-center gap-2">
            <FaGithub /> <a href="https://github.com/dylanjohnson" target="_blank">GitHub</a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin /> <a href="https://linkedin.com/in/dylanjohnson" target="_blank">LinkedIn</a>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope /> <a href="mailto:dylan.johnson.dev@gmail.com">dylan.johnson.dev@gmail.com</a>
          </li>
           <li className="flex items-center gap-2">
            <FaPhone /> <a href="tel:+15149465541">(514)946-5541</a>
          </li>
        </ul>
      </div>

      {/* TÉLÉCHARGEMENT DE CV */}
      <div>
        <a
          href="/cv_Dylan.pdf" // ← Tu mets le fichier dans /public
          download
          className="inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
          <FaFileDownload className="mr-2" /> Télécharger mon C.V
        </a>
      </div>
    </div>
  );
}
