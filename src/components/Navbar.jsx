// src/components/Navbar.jsx
"use client";
import { Sun, Moon, Languages, Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { language, toggleLanguage, darkMode, toggleDarkMode, t } =
    useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = t.navbar;

  return (
    <nav
      className={`sticky top-0 z-50 shadow-lg transition-all duration-300 ${
        darkMode ? "bg-dark" : "custom-light-gradient"
      }`}
    >
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img
                className="h-12 w-auto rounded-lg" // This makes the logo small
                src="/images/house of cocoa.PNG" // The path to your image
                alt="House of Cocoa Logo"
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-green-600 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                {navLinks.home}
              </a>
              <a
                href="#about"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-green-600 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                {navLinks.about}
              </a>
              <a
                href="#philosophy"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-green-600 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                {navLinks.philosophy}
              </a>
              <a
                href="#contact"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-green-600 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              >
                {navLinks.contact}
              </a>
            </div>
          </div>

          {/* Desktop Controls (Language + Dark Mode) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                darkMode
                  ? "bg-green-800 hover:bg-green-700 text-white"
                  : "bg-green-100 hover:bg-green-200 text-green-800"
              }`}
              title="Toggle Language"
            >
              <Languages size={16} />
              {language === "en" ? "FR" : "EN"}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode} // Use toggleDarkMode from context
              className={`p-2 rounded-full transition-all duration-200 ${
                darkMode
                  ? "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-all duration-200 ${
                darkMode
                  ? "bg-green-800 text-white hover:bg-green-700"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
            >
              <Languages size={14} />
              {language === "en" ? "FR" : "EN"}
            </button>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode} // Use toggleDarkMode from context
              className={`p-2 rounded-full transition-all duration-200 ${
                darkMode
                  ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2 ${
                darkMode
                  ? "bg-gray-800 bg-opacity-90"
                  : "bg-white bg-opacity-90"
              } backdrop-blur-sm`}
            >
              <a
                href="#"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  darkMode
                    ? "text-white hover:text-green-400 hover:bg-gray-700"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navLinks.home}
              </a>
              <a
                href="#about"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  darkMode
                    ? "text-white hover:text-green-400 hover:bg-gray-700"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navLinks.about}
              </a>
              <a
                href="#philosophy"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  darkMode
                    ? "text-white hover:text-green-400 hover:bg-gray-700"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navLinks.philosophy}
              </a>
              <a
                href="#contact"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  darkMode
                    ? "text-white hover:text-green-400 hover:bg-gray-700"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {navLinks.contact}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
