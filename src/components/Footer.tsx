import {
  ArrowUp,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/2250161300716?text=Bonjour%20EasyTop%2C%20je%20souhaite%20obtenir%20des%20informations%20concernant%20EasyTop.';

const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Devenir partenaire', href: '#partenaires' },
  { label: 'Publicité', href: '#publicite' },
  { label: 'Partenariat', href: '#partenariat' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-white
        pt-20
        sm:pt-28
      "
    >
      <div className="page-container">
        {/* ===============================================
            TOP
        ================================================ */}

        <div
          className="
            grid
            gap-14
            border-b
            border-[var(--line)]
            pb-16
            lg:grid-cols-[1.15fr_0.85fr]
            lg:pb-20
          "
        >
          {/* LEFT */}

          <div>
            <a
              href="#accueil"
              className="
                inline-flex
                items-center
              "
            >
              <span
                className="
                  text-[24px]
                  font-extrabold
                  tracking-[-0.06em]
                  text-[var(--ink)]
                "
              >
                easy
              </span>

              <span
                className="
                  text-[24px]
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
                "
              />
            </a>

            <p
              className="
                mt-7
                max-w-[480px]
                text-[15px]
                font-medium
                leading-[1.8]
                text-[var(--muted)]
              "
            >
              Une expérience pensée pour simplifier
              vos services mobiles au quotidien.
            </p>

            {/* WhatsApp */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--blue-soft)]
                  text-[var(--blue)]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:bg-[var(--blue)]
                  group-hover:text-white
                "
              >
                <MessageCircle className="h-[18px] w-[18px]" />
              </span>

              <span>
                <span
                  className="
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[var(--faint)]
                  "
                >
                  Nous contacter
                </span>

                <span
                  className="
                    mt-1
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    text-[var(--ink)]
                  "
                >
                  WhatsApp Business

                  <ArrowUpRight
                    className="
                      h-3.5
                      w-3.5
                      text-[var(--blue)]
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </span>
            </a>
          </div>

          {/* RIGHT */}

          <div
            className="
              grid
              gap-10
              sm:grid-cols-2
            "
          >
            {/* Navigation */}

            <div>
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--faint)]
                "
              >
                Explorer
              </p>

              <nav
                className="
                  mt-6
                  flex
                  flex-col
                  items-start
                  gap-4
                "
              >
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[var(--ink)]
                      transition-colors
                      hover:text-[var(--blue)]
                    "
                  >
                    {item.label}

                    <ArrowUpRight
                      className="
                        h-3
                        w-3
                        opacity-0
                        transition-all
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                ))}
              </nav>
            </div>

            {/* Legal */}

            <div>
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--faint)]
                "
              >
                Informations
              </p>

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  items-start
                  gap-4
                "
              >
                {/*
                  On ne crée pas encore de fausses routes.
                  Quand les pages juridiques existeront,
                  remplace les éléments par des liens.
                */}

                <span
                  className="
                    text-sm
                    font-bold
                    text-[var(--faint)]
                  "
                >
                  Conditions d’utilisation
                </span>

                <span
                  className="
                    text-sm
                    font-bold
                    text-[var(--faint)]
                  "
                >
                  Politique de confidentialité
                </span>

                <span
                  className="
                    text-sm
                    font-bold
                    text-[var(--faint)]
                  "
                >
                  Côte d’Ivoire
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===============================================
            MASSIVE BRAND
        ================================================ */}

        <div
          className="
            relative
            overflow-hidden
            border-b
            border-[var(--line)]
            py-10
            sm:py-14
          "
        >
          <div
            className="
              flex
              items-end
              justify-between
              gap-8
            "
          >
            <div
              aria-label="EasyTop"
              className="
                select-none
                whitespace-nowrap
                text-[clamp(5rem,17vw,15rem)]
                font-black
                leading-[0.72]
                tracking-[-0.085em]
              "
            >
              <span className="text-[var(--ink)]">
                easy
              </span>

              <span className="text-[var(--blue)]">
                top
              </span>

              <span className="text-[var(--blue)]">
                .
              </span>
            </div>

            {/* Back to top */}

            <a
              href="#accueil"
              aria-label="Retour en haut"
              className="
                group
                mb-1
                hidden
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[var(--line)]
                bg-white
                text-[var(--ink)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--blue)]
                hover:text-[var(--blue)]
                sm:flex
              "
            >
              <ArrowUp
                className="
                  h-[18px]
                  w-[18px]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div>

        {/* ===============================================
            BOTTOM
        ================================================ */}

        <div
          className="
            flex
            flex-col
            gap-5
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-semibold
                text-[var(--faint)]
              "
            >
              © {currentYear} EasyTop. Tous droits réservés.
            </p>

            <p
              className="
                mt-1.5
                text-[10px]
                font-medium
                text-[var(--faint)]
              "
            >
              EasyTop est un produit de{' '}
              <span
                className="
                  font-bold
                  text-[var(--ink)]
                "
              >
                SkyRecharge
              </span>
              .
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[var(--blue)]
              "
            />

            <p
              className="
                text-[10px]
                font-semibold
                text-[var(--faint)]
              "
            >
              Services mobiles · Côte d’Ivoire
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}