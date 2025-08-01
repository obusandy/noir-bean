"use client";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight } from "lucide-react";

const Collaborate = () => {
  const { t } = useLanguage();
  const collabContent = t.collaborate;

  return (
    <section id="contact" className="py-20 md:py-32 bg-green-800 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-200">
          {collabContent.title}
        </h2>
        <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          {collabContent.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* For Chocolatiers & Businesses */}
          <div className="bg-green-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-3">
              {collabContent.box1.title}
            </h3>
            <p className="text-green-200 mb-6">
              {collabContent.box1.description}
            </p>
            <a
              href="#contact"
              className="font-bold text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-2"
            >
              {collabContent.box1.cta} <ArrowRight size={18} />
            </a>
          </div>

          {/* For Farmers & Cooperatives */}
          <div className="bg-green-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-3">
              {collabContent.box2.title}
            </h3>
            <p className="text-green-200 mb-6">
              {collabContent.box2.description}
            </p>
            <a
              href="mailto:houseofpremiumcocoa@gmail.com"
              className="font-bold text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-2"
            >
              {collabContent.box2.cta} <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
