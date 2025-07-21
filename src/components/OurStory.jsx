"use client";
import { useLanguage } from "../context/LanguageContext";
const OurStory = () => {
  const { t } = useLanguage();

  // Let's create more detailed content in your LanguageContext
  const storyContent = t.ourStory;

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-12 items-center">
          {/* Image Column */}
          <div className="order-last lg:order-first">
            <img
              src="/images/story.jpeg"
              alt="The Noir-Bean team and our mission"
              className="
                w-full h-auto      /* Makes the image responsive within its container */
                max-w-xl         /* Prevents a small image from stretching too wide */
                mx-auto            /* Centers the image horizontally if it's not full-width */
                rounded-lg         /* Softly rounded corners */
                shadow-2xl         /* A strong, beautiful shadow to lift it from the page */
                // ring-1 ring-black/5
              "
            />
          </div>

          {/* Text Column */}
          <div className="text-gray-800 dark:text-gray-200">
            <h2 className="text-xl font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-3">
              {storyContent.eyebrow}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {storyContent.title}
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              {storyContent.paragraph1}
            </p>
            <p className="text-lg leading-relaxed">{storyContent.paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
