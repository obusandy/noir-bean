"use client";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage(); // This gives access to translated text

  return (
    <section
      className="mt-0 py-20 px-6 md:px-12 vh-100"
      style={{
        background:
          "linear-gradient(225deg, rgba(120, 53, 15, 0.8), rgba(101, 41, 17, 0.75), rgba(87, 33, 19, 0.7))",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-amber-200 mb-6">
          {t.about.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
          {t.about.description}
        </p>
      </div>
    </section>
  );
};

export default About;
