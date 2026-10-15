import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
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
  const headerRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const visualViewport = window.visualViewport;

    if (!header) {
      return;
    }

    const mobileBreakpoint = window.matchMedia('(max-width: 1023px)');
    const syncHeaderPosition = () => {
      header.style.top = mobileBreakpoint.matches
        ? `${visualViewport?.offsetTop ?? 0}px`
        : '0px';
    };

    syncHeaderPosition();
    visualViewport?.addEventListener('scroll', syncHeaderPosition);
    visualViewport?.addEventListener('resize', syncHeaderPosition);
    mobileBreakpoint.addEventListener('change', syncHeaderPosition);

    return () => {
      visualViewport?.removeEventListener('scroll', syncHeaderPosition);
      visualViewport?.removeEventListener('resize', syncHeaderPosition);
      mobileBreakpoint.removeEventListener('change', syncHeaderPosition);
    };
  }, []);

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

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className={`${styles.mobileFixedHeader} fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 lg:sticky lg:bg-zinc-950/80 lg:backdrop-blur`}>
      <div className="max-w-6xl px-7 mr-2 ml-0 sm:px-4">
        <div className="flex items-center justify-between gap-4 py-2">
          <a href="#hero" className="flex shrink-0 items-center" aria-label={t('header.name')}>
            <img src={logo} alt={t('header.name')} className="h-7 w-42 sm:w-52 sm:h-12 lg:h-14 lg:w-56 rounded-md object-cover" />
          </a>

          <div className="ml-auto flex items-center gap-3 lg:gap-6">
            <nav className="hidden items-center gap-8 lg:flex">
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

            <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-1">
              <button
                onClick={() => i18n.changeLanguage('en')}
                className="text-md font-medium text-zinc-400 transition hover:text-white"
              >
                EN
              </button>

              <span className="text-zinc-600">|</span>

              <button
                onClick={() => i18n.changeLanguage('es')}
                className="text-md font-medium text-zinc-400 transition hover:text-white"
              >
                ES
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition hover:bg-zinc-800 hover:text-white lg:hidden"
              aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav id="mobile-navigation" className="grid gap-1 border-t border-zinc-800 py-2 lg:hidden">
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