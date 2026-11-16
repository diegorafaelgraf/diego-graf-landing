import { useEffect, useState } from 'react'; 
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.webp';
import styles from './Header.module.css';

const navItems = [
  { id: 'hero', labelKey: 'nav.hero' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'highlights', labelKey: 'nav.highlights' },
  { id: 'stack', labelKey: 'nav.stack' },
  { id: 'building', labelKey: 'nav.building' },
  { id: 'professional-experience', labelKey: 'nav.professionalExperience' },
  { id: 'learning', labelKey: 'nav.learning' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle language change and maintain scroll position for the professional experience section
  const handleLanguageChange = (language: 'en' | 'es') => {
    const experienceSection = document.getElementById('professional-experience');
    const initialTop = experienceSection?.getBoundingClientRect().top;
    const isExperienceVisible =
      experienceSection !== null &&
      initialTop !== undefined &&
      initialTop < window.innerHeight &&
      experienceSection.getBoundingClientRect().bottom > 0;

    void i18n.changeLanguage(language).then(() => {
      if (!isExperienceVisible || !experienceSection || initialTop === undefined) {
        return;
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const topDelta =
            experienceSection.getBoundingClientRect().top - initialTop;

          if (Math.abs(topDelta) > 1) {
            window.scrollBy({ top: topDelta, behavior: 'instant' });
          }
        });
      });
    });
  };

  // Update the active section based on scroll position
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const handleScroll = () => {
      const referencePoint = 120;
      let closestSection = sections[0];
      let closestDistance = Math.abs(sections[0].getBoundingClientRect().top - referencePoint);

      sections.forEach((section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - referencePoint);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });
      setActiveSection(closestSection.id);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu when the Escape key is pressed
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Return the header component with navigation links, language switcher, and mobile menu
  return (    
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 lg:bg-zinc-950/80 lg:backdrop-blur">
      <div className="max-w-6xl px-7 mr-2 ml-0 sm:px-4">
        <div className="flex items-center justify-between gap-4 py-2">
          <a href="#hero" className="flex shrink-0 items-center" aria-label={t('header.name')}>
            <img src={logo} alt={t('header.name')} className="h-7 w-42 sm:w-52 sm:h-12 lg:h-14 lg:w-56 rounded-md object-contain" />
          </a>

          <div className="ml-auto flex items-center gap-3 lg:gap-6">
            <nav className="hidden items-center gap-[30px] xl:flex 2xl:gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`${styles.link} ${isActive ? styles.activeLink : ''} whitespace-nowrap`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {t(item.labelKey)}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-1">
              <button onClick={() => handleLanguageChange('en')} className="text-md font-medium text-zinc-400 transition hover:text-white">EN</button>
              <span className="text-zinc-600">|</span>
              <button onClick={() => handleLanguageChange('es')} className="text-md font-medium text-zinc-400 transition hover:text-white">ES</button>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-zinc-800 hover:text-white xl:hidden"
              aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav id="mobile-navigation" className="grid gap-1 border-t border-zinc-800 py-2 xl:hidden">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${styles.link} ${isActive ? styles.activeLink : ''} rounded-md px-3 py-2`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {t(item.labelKey)}
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}