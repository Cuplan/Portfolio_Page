import React, { useState } from "react";
import { useLang } from "../hooks/useLang";
import { TermWindow, Prompt } from "../components/TermWindow";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaPhone, FaCopy, FaCheck } from "react-icons/fa";

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  copyText?: string;
}

export default function Contact() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      alert(t.contact.validation);
      return;
    }
    const subject = encodeURIComponent(`${t.contact.subjectPrefix} ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nCourriel : ${email}\n\nMessage :\n${message}`
    );
    window.location.href = `mailto:johnsondylan14@gmail.com?subject=${subject}&body=${body}`;
  }

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(text);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // clipboard not available
    }
  }

  const inputBase =
    "w-full bg-transparent border-0 border-b border-zinc-600/40 dark:border-green-500/25 text-zinc-200 dark:text-green-300 text-sm px-2 py-1.5 placeholder-day-muted/60 dark:placeholder-green-600/25 focus:outline-none focus:border-day-accent dark:focus:border-green-400 transition-colors duration-200";

  const contacts: ContactLink[] = [
    {
      icon: <FaGithub />,
      label: "github.com/Cuplan",
      href: "https://github.com/Cuplan",
    },
    {
      icon: <FaLinkedin />,
      label: "linkedin — dylan-johnson-447681280",
      href: "https://www.linkedin.com/in/dylan-johnson-447681280/",
    },
    {
      icon: <FaEnvelope />,
      label: "johnsondylan14@gmail.com",
      href: "mailto:johnsondylan14@gmail.com",
      copyText: "johnsondylan14@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "(873) 307-0499",
      href: "tel:+18733070499",
      copyText: "(873) 307-0499",
    },
  ];

  return (
    <section className="min-h-screen bg-day-bg dark:bg-dj-black transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <TermWindow title="~/contact.sh">
          <div className="p-4 sm:p-6 space-y-7">

            <div>
              <Prompt cmd="./contact.sh" />
              <p className="text-xs text-zinc-400 dark:text-zinc-500 pl-5">{t.contact.title}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-day-accent dark:text-green-600 text-sm shrink-0 w-16 text-right select-none">
                  {t.contact.namePlaceholder}:
                </span>
                <input
                  type="text"
                  placeholder="_"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={inputBase}
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="text-day-accent dark:text-green-600 text-sm shrink-0 w-16 text-right select-none">
                  {t.contact.emailPlaceholder}:
                </span>
                <input
                  type="email"
                  placeholder="_"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={inputBase}
                />
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-day-accent dark:text-green-600 text-sm shrink-0 w-16 text-right pt-2 select-none">
                  msg:
                </span>
                <textarea
                  placeholder="_"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className={`${inputBase} resize-none`}
                />
              </div>

              <div className="pl-[4.75rem]">
                <button
                  type="submit"
                  className="text-sm text-black bg-day-accent dark:bg-green-400 px-5 py-1.5 hover:opacity-80 dark:hover:bg-green-300 active:scale-95 transition-all duration-150 tracking-widest"
                >
                  ./send
                </button>
              </div>
            </form>

            {/* Links */}
            <div>
              <Prompt cmd="cat links.json" />
              <ul className="space-y-2 pl-5">
                {contacts.map(({ icon, label, href, copyText }) => (
                  <li key={href} className="flex items-center gap-2 text-sm">
                    <span className="text-day-accent/50 dark:text-green-600/40 text-xs select-none">▸</span>
                    <span className="text-day-accent/70 dark:text-green-500/70 text-base">{icon}</span>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-zinc-300 dark:text-zinc-400 hover:text-day-accent dark:hover:text-green-400 transition-colors text-sm"
                    >
                      {label}
                    </a>
                    {copyText && (
                      <button
                        onClick={() => copyToClipboard(copyText)}
                        className="ml-1 text-zinc-600 dark:text-zinc-700 hover:text-day-accent dark:hover:text-green-400 transition-colors flex items-center gap-1 text-xs"
                        title={`Copy ${copyText}`}
                      >
                        {copiedKey === copyText ? (
                          <>
                            <FaCheck size={10} className="text-day-accent dark:text-green-400" />
                            <span className="text-day-accent dark:text-green-400">[copied ✓]</span>
                          </>
                        ) : (
                          <FaCopy size={10} />
                        )}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* CV download */}
            <div>
              <Prompt cmd="./download --cv" />
              <div className="pl-5">
                <a
                  href="/cv_Dylan.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm border border-zinc-600/40 dark:border-green-500/25 text-zinc-300 dark:text-green-400 px-4 py-1.5 hover:border-day-accent dark:hover:bg-green-500/10 hover:text-day-accent transition-colors duration-150"
                >
                  <FaFileDownload size={12} />
                  {t.contact.downloadCV}
                </a>
              </div>
            </div>

          </div>
        </TermWindow>
      </div>
    </section>
  );
}
