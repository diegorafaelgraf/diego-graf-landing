import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Stack from './sections/Stack/Stack';
import Building from './sections/Building/Building';
import Contact from './sections/Contact/Contact';
import Highlights from './sections/Highlights/Highlights';
import Learning from './sections/Learning/Learning';
import ProfessionalExperience from './sections/ProfessionalExperience/ProfessionalExperience';
import Footer from './components/Footer/Footer';
import Reveal from './components/Reveal/Reveal';
import { LazyMotion } from 'framer-motion';

function App() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;

  useEffect(() => {
    document.title = t('meta.title');
    document.documentElement.lang = language;
  }, [language, t]);

  return (
    <LazyMotion features={loadFeatures}>
      <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
        <Header />
        <main className="flex-1">
          <Reveal duration={0.15}><Hero /></Reveal>
          <Reveal><About /></Reveal>
          <Reveal><Highlights /></Reveal>
          <Reveal><Stack /></Reveal>
          <Reveal><Building /></Reveal>
          <Reveal><ProfessionalExperience /></Reveal>
          <Reveal amount={0.05}><Learning /></Reveal>
          <Reveal><Contact /></Reveal>
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}

const loadFeatures = () => import('./features').then((res) => res.default);

export default App;