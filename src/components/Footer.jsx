// src/components/Footer.jsx
"use client";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { darkMode, t } = useLanguage(); // Get the 't' object for translations
  const footerContent = t.footer; // Access the footer translations

  return (
    <footer
      className={`
        ${darkMode ? "bg-dark text-gray-400" : "bg-stone-800 text-amber-100"}
        py-12 px-6 md:px-12
      `}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Mission */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Noir-Bean</h3>
          {/* USE TRANSLATION */}
          <p className="text-sm">{footerContent.mission}</p>
          <p className="text-sm text-gray-900 dark:text-gray-500">
            {footerContent.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          {/* USE TRANSLATION */}
          <h4 className="font-semibold text-white mb-3">
            {footerContent.navigate}
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-amber-300 transition-colors"
              >
                {/* USE TRANSLATION */}
                {footerContent.story}
              </a>
            </li>
            <li>
              <a
                href="#philosophy"
                className="hover:text-amber-300 transition-colors"
              >
                {/* USE TRANSLATION */}
                {footerContent.philosophy}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-amber-300 transition-colors"
              >
                {/* USE TRANSLATION */}
                {footerContent.collaborate}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          {/* USE TRANSLATION */}
          <h4 className="font-semibold text-white mb-3">
            {footerContent.contact}
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail size={16} />
              <a
                href="mailto:contact@noir-bean.com"
                className="hover:text-amber-300 transition-colors"
              >
                contact@noir-bean.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone size={16} />
              <a
                href="https://wa.me/254123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors"
              >
                +254 712 465 789
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
        <p>
          &copy; {year} Noir-Bean. {footerContent.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
