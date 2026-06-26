import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-semibold">
          {t('header.name')}
        </span>

        <nav className="hidden gap-8 md:flex">
          <a href="#hero">{t('nav.hero')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#highlights">{t('nav.highlights')}</a>
          <a href="#stack">{t('nav.stack')}</a>
          <a href="#building">{t('nav.building')}</a>
          <a href="#learning">{t('nav.learning')}</a>
          <a href="#contact">{t('nav.contact')}</a>
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