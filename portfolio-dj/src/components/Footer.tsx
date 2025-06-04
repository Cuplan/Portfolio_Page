import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-6 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">Fait avec 💻 & ☕ par Dylan Johnson © {new Date().getFullYear()}</p>
        
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/dylanjohnson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dylanjohnson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:dylan.johnson.dev@gmail.com"
            className="hover:text-indigo-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
