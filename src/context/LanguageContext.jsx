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
        subtitle: "From the Rich Soils of DRC and Uganda",
        description:
          "Based in Nairobi, we establish direct partnerships with dedicated farmers and co-operatives in the DRC and Uganda. For artisans and businesses seeking premium, character-rich cacao, we provide a clear and reliable path to the source.",
        cta1: "Explore Our Cacao",
        cta2: "Learn Our Story",
      },
      ourStory: {
        eyebrow: "Our Story",
        title: "Premium Cacao",
        paragraph1:
          "Cacao is more than a bean; its a living story of Africas rain-washed forests and sun-soaked highlands. Sourcing in both the DRC and Uganda, we partner directly with farmers and cooperatives who honour every pod.",
        paragraph2:
          "Their craft meets your vision in character-rich beans, arriving exactly where you need them, ready for your next creation.",
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
          "Need premium cacao, or a farmer cooperative seeking a reliable market? Let's partner.",
        box1: {
          title: "For Buyers, Makers & Artisans",
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
        subtitle: "Des Sols Riches du Congo et de l'Ouganda.",
        description:
          "Basés à Nairobi, nous établissons des partenariats directs avec des agriculteurs dévoués en RDC et en Ouganda. Pour les artisans et les entreprises à la recherche d'un cacao de première qualité et riche en caractère, nous offrons un chemin clair et fiable vers la source.",
        cta1: "Découvrir Notre Cacao",
        cta2: "Notre Histoire",
      },

      ourStory: {
        eyebrow: "Notre Histoire",
        title: "Cacao Premium",
        paragraph1:
          "Le cacao est bien plus qu’une fève c’est l’histoire vivante de l’Afrique, façonnée par les forêts humides et les hauts plateaux baignés de soleil. Présents en RDC comme en Ouganda, nous travaillons main dans la main avec les agriculteurs et les coopératives qui honorent chaque cabosse.",
        paragraph2:
          "Leur savoir-faire nourrit votre créativité avec des fèves au caractère affirmé, livrées là où vous en avez besoin, prêtes pour votre prochaine création.",
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
          "Besoin de cacao premium, ou coopérative à la recherche d’un débouché fiable ? Travaillons ensemble",
        box1: {
          title: "Pour les Acheteurs, Créateurs & Artisans",
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
