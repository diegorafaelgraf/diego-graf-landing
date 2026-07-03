import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const navItems = [
  { id: 'hero', labelKey: 'nav.hero' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'highlights', labelKey: 'nav.highlights' },
  { id: 'stack', labelKey: 'nav.stack' },
  { id: 'building', labelKey: 'nav.building' },
  { id: 'learning', labelKey: 'nav.learning' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = navItems
      .map((item) => {
        const element = document.getElementById(item.id);
        return element;
      })
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const handleScroll = () => {
      // Punto de referencia: 120px desde el top (altura del header + margen)
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

    // Ejecutar una vez al cargar
    handleScroll();

    // Agregar listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-semibold">{t('header.name')}</span>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${styles.link} ${isActive ? styles.activeLink : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {t(item.labelKey)}
              </a>
            );
          })}
        </nav>

        <div className="flex gap-2">
          <button
            onClick={() => i18n.changeLanguage('en')}
            className="text-sm text-zinc-400 hover:text-white"
          >
            EN
          </button>

          <button
            onClick={() => i18n.changeLanguage('es')}
            className="text-sm text-zinc-400 hover:text-white"
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
}