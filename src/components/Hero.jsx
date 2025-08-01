// src/components/Hero.jsx
"use client";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const heroContent = t.hero;

  return (
    <section className="hero relative flex items-center diagonal-cut min-h-[90vh] pb-32">
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Main content container */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-24 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-200 leading-tight">
                {heroContent.title}
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-green-300">
                {heroContent.subtitle}
              </h2>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-100 text-justify max-w-2xl">
              {heroContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact">
                <button className="w-full group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {heroContent.cta1}
                </button>
              </a>

              <a href="#about">
                <button className="w-full bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  {heroContent.cta2}
                </button>
              </a>
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll down indicator - no changes needed here */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce cursor-pointer">
          <ChevronDown
            size={32}
            className="text-green-400 hover:text-green-300 transition-colors"
          />
        </div>
      </div>
    </section>
  );
}
