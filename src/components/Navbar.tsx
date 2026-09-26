import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Transferts', href: '#transferts' },
  { label: 'Partenariat', href: '#partenariat' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed left-0 right-0 top-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? 'border-b border-black/[0.05] bg-white/80 backdrop-blur-xl'
              : 'bg-transparent'
          }
        `}
      >
        <div className="page-container">
          <div className="flex h-[76px] items-center justify-between">

            {/* Logo texte */}
            <a
              href="#accueil"
              onClick={closeMenu}
              className="group flex items-center"
            >
              <span
                className="
                  text-[22px]
                  font-extrabold
                  tracking-[-0.06em]
                  text-[var(--ink)]
                "
              >
                easy
              </span>

              <span
                className="
                  text-[22px]
                  font-extrabold
                  tracking-[-0.06em]
                  text-[var(--blue)]
                "
              >
                top
              </span>

              <span
                className="
                  ml-2.5
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[var(--blue)]
                  transition-transform
                  duration-300
                  group-hover:scale-[1.8]
                "
              />
            </a>

            {/* Navigation desktop */}
            <nav className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    rounded-full
                    px-4
                    py-2
                    text-[13px]
                    font-semibold
                    text-[var(--muted)]
                    transition-colors
                    hover:bg-[var(--surface-soft)]
                    hover:text-[var(--ink)]
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA desktop */}
            <div className="hidden items-center md:flex">
              <a
                href="#telecharger"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[var(--ink)]
                  px-5
                  py-2.5
                  text-[13px]
                  font-bold
                  text-white
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[var(--blue)]
                  hover:shadow-[0_12px_30px_rgba(21,151,245,0.22)]
                "
              >
                Obtenir EasyTop

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            </div>

            {/* Menu mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={
                menuOpen
                  ? 'Fermer le menu'
                  : 'Ouvrir le menu'
              }
              aria-expanded={menuOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[var(--line)]
                bg-white
                text-[var(--ink)]
                md:hidden
              "
            >
              {menuOpen ? (
                <X className="h-[18px] w-[18px]" />
              ) : (
                <Menu className="h-[18px] w-[18px]" />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* =================================================
          MOBILE MENU
      ================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-white
          transition-all
          duration-300
          md:hidden

          ${
            menuOpen
              ? 'visible opacity-100'
              : 'invisible pointer-events-none opacity-0'
          }
        `}
      >
        <div className="page-container flex h-full flex-col pt-[110px]">

          <div className="flex flex-1 flex-col justify-center">

            <p
              className="
                mb-6
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[var(--faint)]
              "
            >
              Explorer EasyTop
            </p>

            <nav className="flex flex-col">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[var(--line)]
                    py-5
                  "
                >
                  <span
                    className="
                      text-[clamp(2rem,10vw,3.5rem)]
                      font-bold
                      tracking-[-0.055em]
                      text-[var(--ink)]
                    "
                  >
                    {item.label}
                  </span>

                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-xs
                        font-semibold
                        text-[var(--faint)]
                      "
                    >
                      0{index + 1}
                    </span>

                    <ArrowUpRight
                      className="
                        h-5
                        w-5
                        text-[var(--blue)]
                        transition-transform
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </div>
                </a>
              ))}
            </nav>

          </div>

          <div className="pb-8">
            <a
              href="#telecharger"
              onClick={closeMenu}
              className="btn-primary w-full"
            >
              Obtenir EasyTop

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}