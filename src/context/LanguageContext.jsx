// src/context/LanguageContext.jsx
"use client"; // This directive is important for client-side components in Next.js

import { createContext, useState, useEffect, useContext } from "react";

// Create the context
export const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  // Toggle functions
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Effect for dark mode body class
  useEffect(() => {
    document.body.className = darkMode
      ? "bg-dark text-white"
      : "custom-light-gradient text-dark";
  }, [darkMode]);

  // Translations for all parts of your app
  const translations = {
    en: {
      navbar: {
        home: "Home",
        about: "About",
        philosophy: "Our Commitment",
        contact: "Contact",
      },
      hero: {
        title: "Premium Cacao",
        subtitle: "From DRC's Heart",
        description:
          "Sourcing the world's finest cacao beans directly from the Democratic Republic of Congo's pristine highlands, delivering exceptional quality and authentic flavors.",
        cta1: "Explore Our Cacao",
        cta2: "Learn Our Story",
      },
      ourStory: {
        eyebrow: "Our Story",
        title: "From the Rich Soils of Congo to the Heart of Nairobi",
        paragraph1:
          "House of Cocoa was born from a shared passion. We, a team based in Nairobi, saw a disconnect. On one side, the unparalleled cacao from the fertile lands of the DRC, nurtured by dedicated farmers. On the other, a world of artisans and creators yearning for authentic, high-quality ingredients.",
        paragraph2:
          "We are the bridge. Our mission is to build sustainable, transparent relationships that honor the farmer, celebrate the bean, and empower the chocolatier. We are more than suppliers; we are partners in craft.",
      },
      philosophy: {
        eyebrow: "Our Commitment",
        title: "House of Cocoa Philosophy",
        description:
          "Our approach is rooted in three core principles: honoring the origin, ensuring uncompromising quality, and fostering genuine partnerships.",
        feature1: {
          title: "Direct Farmer Partnerships",
          description:
            "We work directly with farmers and cooperatives, ensuring fair prices and ethical practices.",
        },
        feature2: {
          title: "Exceptional Quality",
          description:
            "Every bean is meticulously selected for its unique flavor profile, perfect for craft chocolate.",
        },
        feature3: {
          title: "Sustainable Sourcing",
          description:
            "We champion sustainable agriculture that respects the land and its communities.",
        },
        feature4: {
          title: "Traceability & Trust",
          description:
            "Know the story behind your cacao. We provide full transparency from farm to you.",
        },
      },
      collaborate: {
        title: "Let's Create Together",
        description:
          "Whether you are a master chocolatier seeking the finest beans or a farmer cooperative looking for a reliable market, we believe in the power of partnership.",
        box1: {
          title: "For Chocolatiers & Businesses",
          description:
            "Elevate your products with our premium, traceable cacao. Let's discuss your needs.",
          cta: "Enquire About Sourcing",
        },
        box2: {
          title: "For Farmers & Cooperatives",
          description:
            "Join our network of dedicated growers. We offer fair prices and a commitment to your growth.",
          cta: "Become a Sourcing Partner",
        },
      },
      footer: {
        mission: "Connecting Cacao Farmers to the World's Finest Creators.",
        description:
          "Based in Nairobi, we are the essential link between the rich cacao terroirs of Central Africa and the discerning artisans who transform them. We stand for quality, transparency, and partnership.",
        navigate: "Navigate",
        story: "Our Story",
        philosophy: "Our Philosophy",
        collaborate: "Collaborate",
        contact: "Get In Touch",
        rights: "All Rights Reserved. Based in Nairobi, Kenya.",
      },
    },
    fr: {
      navbar: {
        home: "Accueil",
        about: "À Propos",
        philosophy: "Notre Engagement",
        contact: "Contact",
      },
      hero: {
        title: "Cacao Premium",
        subtitle: "Du Cœur de la RDC",
        description:
          "Sourcing des meilleures fèves de cacao directement des hauts plateaux immaculés de la République Démocratique du Congo, offrant une qualité exceptionnelle et des saveurs authentiques.",
        cta1: "Découvrir Notre Cacao",
        cta2: "Notre Histoire",
      },

      ourStory: {
        eyebrow: "Notre Histoire",
        title: "Des Sols Riches du Congo au Cœur de Nairobi",
        paragraph1:
          "Maison Cacao est né d'une passion commune. Notre équipe, basée à Nairobi, a constaté une déconnexion. D'un côté, le cacao incomparable des terres fertiles de la RDC, cultivé par des agriculteurs dévoués. De l'autre, un monde d'artisans et de créateurs en quête d'ingrédients authentiques et de haute qualité.",
        paragraph2:
          "Nous sommes ce pont. Notre mission est de bâtir des relations durables et transparentes qui honorent l'agriculteur, célèbrent la fève et renforcent le chocolatier. Nous sommes plus que des fournisseurs ; nous sommes des partenaires dans l'artisanat.",
      },
      philosophy: {
        eyebrow: "Notre Engagement",
        title: "La Philosophie Maison Cacao",
        description:
          "Notre approche repose sur trois principes fondamentaux : honorer l'origine, garantir une qualité sans compromis et cultiver de véritables partenariats.",
        feature1: {
          title: "Partenariats Directs",
          description:
            "Nous travaillons directement avec les agriculteurs et les coopératives, garantissant des prix équitables.",
        },
        feature2: {
          title: "Qualité Exceptionnelle",
          description:
            "Chaque fève est méticuleusement sélectionnée pour son profil de saveur unique, parfait pour le chocolat artisanal.",
        },
        feature3: {
          title: "Approvisionnement Durable",
          description:
            "Nous promouvons une agriculture durable qui respecte la terre et ses communautés.",
        },
        feature4: {
          title: "Traçabilité & Confiance",
          description:
            "Connaissez l'histoire de votre cacao. Nous offrons une transparence totale de la ferme à vous.",
        },
      },
      collaborate: {
        title: "Créons Ensemble",
        description:
          "Que vous soyez un maître chocolatier à la recherche des meilleures fèves ou une coopérative agricole cherchant un marché fiable, nous croyons au pouvoir du partenariat.",
        box1: {
          title: "Pour les Chocolatiers & Entreprises",
          description:
            "Élevez vos produits avec notre cacao premium et traçable. Discutons de vos besoins.",
          cta: "Demande d'Approvisionnement",
        },
        box2: {
          title: "Pour les Agriculteurs & Coopératives",
          description:
            "Rejoignez notre réseau de producteurs dévoués. Nous offrons des prix équitables et un engagement pour votre croissance.",
          cta: "Devenir un Partenaire",
        },
      },
      footer: {
        mission:
          "Connecter les cultivateurs de cacao aux meilleurs créateurs du monde.",
        description:
          "Basés à Nairobi, nous sommes le lien essentiel entre les riches terroirs de cacao d'Afrique centrale et les artisans exigeants qui les transforment. Nous défendons la qualité, la transparence et le partenariat.",
        navigate: "Naviguer",
        story: "Notre Histoire",
        philosophy: "Notre Philosophie",
        collaborate: "Collaborer",
        contact: "Contactez-nous",
        rights: "Tous droits réservés. Basé à Nairobi, Kenya.",
      },
    },
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, darkMode, toggleDarkMode, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the context easily
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
