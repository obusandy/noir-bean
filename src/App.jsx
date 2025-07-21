import Collaborate from "./components/Collaborate";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurPhilosophy from "./components/OurPhilosophy";
import OurStory from "./components/OurStory";
import SectionSeparator from "./components/SectionSeparator";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="overflow-x-hidden">
        {" "}
        <Hero />
        <div className="relative">
          <OurStory />
        </div>
        {/* The rest of the flow remains the same, creating a beautiful cascade */}
        <SectionSeparator />
        <OurPhilosophy />
        <SectionSeparator inverted={true} className="fill-green-800" />
        {/* We pull the Collaborate section up to sit flush against the curve above it. */}
        <div className="-mt-1">
          <Collaborate />
        </div>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
