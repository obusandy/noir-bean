"use client";
import { useLanguage } from "../context/LanguageContext";
import { Leaf, ShieldCheck, Users, Award } from "lucide-react";

const OurPhilosophy = () => {
  const { t } = useLanguage();
  const philosophyContent = t.philosophy;

  const features = [
    {
      icon: <Users size={32} className="text-amber-500" />,
      title: philosophyContent.feature1.title,
      description: philosophyContent.feature1.description,
    },
    {
      icon: <Award size={32} className="text-amber-500" />,
      title: philosophyContent.feature2.title,
      description: philosophyContent.feature2.description,
    },
    {
      icon: <Leaf size={32} className="text-amber-500" />,
      title: philosophyContent.feature3.title,
      description: philosophyContent.feature3.description,
    },
    {
      icon: <ShieldCheck size={32} className="text-amber-500" />,
      title: philosophyContent.feature4.title,
      description: philosophyContent.feature4.description,
    },
  ];

  return (
    <section id="philosophy" className="relative -mt-1 py-20 md:py-32 ">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-wider custom-light-gradient:text-gray-900 bg-dark:text-white mb-4">
          {philosophyContent.eyebrow}
        </h1>
        <h3 className="text-xl md:text-4xl font-bold custom-light-gradient:text-gray-900 bg-dark:text-white mb-6">
          {philosophyContent.title}
        </h3>
        <p className="max-w-3xl mx-auto text-lg custom-light-gradient:text-gray-900 bg-dark:text-white mb-16">
          {philosophyContent.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-amber-100 dark:bg-gray-700 rounded-full p-4 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold custom-light-gradient:text-gray-900 bg-dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="custom-light-gradient:text-gray-900 bg-dark:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
