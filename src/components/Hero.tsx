import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import easytopIcon from '../assets/easytop-icon.jpg';

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-reveal]', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from(iconRef.current, {
        scale: 0.86,
        rotate: 5,
        opacity: 0,
        duration: 1.15,
        delay: 0.15,
        ease: 'power3.out',
      });

      gsap.to(iconRef.current, {
        y: -12,
        rotate: -1.5,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="accueil"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        pt-[76px]
      "
    >
      {/* =================================================
          DÉCOR
      ================================================== */}

      <div
        className="
          blue-glow
          -right-[220px]
          top-[80px]
        "
      />

      <div
        className="
          absolute
          -left-[180px]
          bottom-[5%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[var(--blue-soft)]
          blur-[100px]
        "
      />

      <div
        className="
          soft-grid
          absolute
          right-0
          top-0
          h-full
          w-[52%]
          opacity-70
          [mask-image:linear-gradient(to_left,black,transparent)]
        "
      />

      {/* =================================================
          HERO CONTENT
      ================================================== */}

      <div
        className="
          page-container
          relative
          z-10
          grid
          min-h-[calc(100vh-76px)]
          items-center
          gap-16
          py-16
          lg:grid-cols-[1.05fr_0.95fr]
          lg:py-10
        "
      >
        {/* ===============================================
            LEFT
        ================================================ */}

        <div className="relative z-20">
          <div
            data-hero-reveal
            className="eyebrow mb-7"
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[var(--blue)]
                shadow-[0_0_0_5px_rgba(21,151,245,0.10)]
              "
            />

            Vos services mobiles, autrement
          </div>

          <h1
            data-hero-reveal
            className="
              display-title
              max-w-[760px]
              text-[var(--ink)]
            "
          >
            Rechargez.
            <br />

            Connectez.
            <br />

            <span className="relative inline-block text-[var(--blue)]">
              Continuez.

              <svg
                viewBox="0 0 420 26"
                fill="none"
                aria-hidden="true"
                className="
                  absolute
                  -bottom-4
                  left-0
                  w-[92%]
                  overflow-visible
                "
              >
                <path
                  d="M3 17C96 4 232 3 416 12"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="opacity-25"
                />

                <path
                  d="M7 21C129 10 263 8 387 14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="opacity-70"
                />
              </svg>
            </span>
          </h1>

          <p
            data-hero-reveal
            className="
              mt-10
              max-w-[540px]
              text-[16px]
              font-medium
              leading-[1.8]
              text-[var(--muted)]
              sm:text-[17px]
            "
          >
            Achetez vos unités, vos pass internet et vos
            pass appel depuis une seule plateforme. EasyTop
            simplifie vos services mobiles au quotidien.
          </p>

          {/* Actions */}

          <div
            data-hero-reveal
            className="
              mt-9
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
            <a
              href="#services"
              className="btn-primary"
            >
              Découvrir EasyTop

              <ArrowDown className="h-4 w-4" />
            </a>

            <a
              href="#partenariat"
              className="btn-secondary"
            >
              Devenir partenaire

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Petit détail éditorial */}

          <div
            data-hero-reveal
            className="
              mt-12
              flex
              items-center
              gap-3
              text-[12px]
              font-semibold
              text-[var(--faint)]
            "
          >
            <div className="flex items-center">
              <span
                className="
                  relative
                  z-30
                  h-7
                  w-7
                  rounded-full
                  border-2
                  border-white
                  bg-[#ff7900]
                "
              />

              <span
                className="
                  relative
                  z-20
                  -ml-2
                  h-7
                  w-7
                  rounded-full
                  border-2
                  border-white
                  bg-[#ffcc00]
                "
              />

              <span
                className="
                  relative
                  z-10
                  -ml-2
                  h-7
                  w-7
                  rounded-full
                  border-2
                  border-white
                  bg-[#1597f5]
                "
              />
            </div>

            Orange · MTN · Moov · Wave
          </div>
        </div>

        {/* ===============================================
            RIGHT — EASYTOP IDENTITY
        ================================================ */}

        <div
          className="
            relative
            flex
            min-h-[480px]
            items-center
            justify-center
            lg:min-h-[650px]
          "
        >
          {/* Grande orbite */}

          <div
            className="
              absolute
              h-[440px]
              w-[440px]
              rounded-full
              border
              border-dashed
              border-[rgba(21,151,245,0.20)]
              sm:h-[520px]
              sm:w-[520px]
            "
          />

          <div
            className="
              absolute
              h-[330px]
              w-[330px]
              rounded-full
              border
              border-[rgba(21,151,245,0.12)]
              sm:h-[390px]
              sm:w-[390px]
            "
          />

          {/* Texte orbital */}

          <div
            className="
              absolute
              right-[5%]
              top-[15%]
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-[var(--line)]
              bg-white/80
              px-4
              py-2
              text-xs
              font-bold
              text-[var(--ink)]
              shadow-[0_10px_40px_rgba(16,32,51,0.07)]
              backdrop-blur-md
              sm:flex
            "
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--blue)]" />

            Simple par nature
          </div>

          {/* Point orbital 1 */}

          <div
            className="
              absolute
              left-[4%]
              top-[31%]
              hidden
              h-3
              w-3
              rounded-full
              bg-[var(--blue)]
              shadow-[0_0_0_9px_rgba(21,151,245,0.10)]
              sm:block
            "
          />

          {/* Point orbital 2 */}

          <div
            className="
              absolute
              bottom-[20%]
              right-[12%]
              hidden
              h-2.5
              w-2.5
              rounded-full
              bg-[var(--ink)]
              shadow-[0_0_0_8px_rgba(16,32,51,0.06)]
              sm:block
            "
          />

          {/* Halo principal */}

          <div
            className="
              absolute
              h-[320px]
              w-[320px]
              rounded-full
              bg-[var(--blue-soft)]
              blur-[10px]
              sm:h-[380px]
              sm:w-[380px]
            "
          />

          {/* Icône officielle */}

          <div
            ref={iconRef}
            className="
              relative
              z-10
              w-[270px]
              sm:w-[330px]
              lg:w-[360px]
            "
          >
            <div
              className="
                absolute
                inset-x-[12%]
                -bottom-8
                h-16
                rounded-[50%]
                bg-[rgba(16,32,51,0.14)]
                blur-2xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[38px]
                border-[7px]
                border-white
                bg-white
                shadow-[0_35px_90px_rgba(0,110,190,0.22)]
              "
            >
              <img
                src={easytopIcon}
                alt="Icône de l'application EasyTop"
                className="
                  aspect-square
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* reflet */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_42%)]
                "
              />
            </div>
          </div>

          {/* Floating label */}

          <div
            className="
              absolute
              bottom-[10%]
              left-[2%]
              z-20
              hidden
              rotate-[-5deg]
              rounded-[18px]
              border
              border-[var(--line)]
              bg-white
              px-4
              py-3
              shadow-[0_18px_50px_rgba(16,32,51,0.10)]
              sm:block
            "
          >
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[var(--faint)]
              "
            >
              Une seule app
            </p>

            <p
              className="
                mt-1
                text-sm
                font-bold
                text-[var(--ink)]
              "
            >
              Plusieurs possibilités.
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          BOTTOM MARKER
      ================================================== */}

      <div
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          lg:flex
        "
      >
        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[var(--faint)]
          "
        >
          Explorer
        </span>

        <div
          className="
            flex
            h-8
            w-[1px]
            justify-center
            overflow-hidden
            bg-[var(--line)]
          "
        >
          <span
            className="
              h-3
              w-full
              animate-bounce
              bg-[var(--blue)]
            "
          />
        </div>
      </div>
    </section>
  );
}