import { useEffect, useRef } from 'react';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import gsap from 'gsap';

import easytopIcon from '../assets/easytop-icon.jpg';
import orangeLogo from '../assets/orange-money.png';
import mtnLogo from '../assets/mtn-momo.jpg';
import moovLogo from '../assets/moov-money.webp';
import waveLogo from '../assets/wave.png';

export default function TransferUniverse() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const universeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * Mouvement très léger de l'univers.
       * Les logos ne tournent pas sur eux-mêmes :
       * l'ensemble "respire".
       */
      gsap.to(universeRef.current, {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      /*
       * Petites pulsations indépendantes.
       */
      gsap.to('[data-operator="orange"]', {
        y: -6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('[data-operator="mtn"]', {
        y: 7,
        duration: 3.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('[data-operator="moov"]', {
        x: 5,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('[data-operator="wave"]', {
        x: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transferts"
      className="
        section
        relative
        overflow-hidden
        bg-[var(--blue-pale)]
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[260px]
          top-[80px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[rgba(21,151,245,0.12)]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          bottom-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-white
          blur-[90px]
        "
      />

      <div
        className="
          page-container
          relative
          z-10
        "
      >
        {/* =================================================
            INTRO
        ================================================== */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-end
          "
        >
          <div>
            <div className="eyebrow mb-5">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[var(--blue)]
                "
              />

              Transfert inter-opérateur
            </div>

            <p
              className="
                max-w-[430px]
                text-[15px]
                font-medium
                leading-[1.8]
                text-[var(--muted)]
              "
            >
              Un même espace pour faire circuler votre
              argent entre différents services de mobile
              money.
            </p>
          </div>

          <h2
            className="
              section-title
              max-w-[850px]
              text-[var(--ink)]
              lg:ml-auto
            "
          >
            Des réseaux différents.
            <br />

            <span className="text-[var(--blue)]">
              Une seule trajectoire.
            </span>
          </h2>
        </div>

        {/* =================================================
            UNIVERSE
        ================================================== */}

        <div
          className="
            relative
            mt-16
            min-h-[650px]
            overflow-hidden
            rounded-[42px]
            border
            border-white
            bg-white/65
            shadow-[0_30px_100px_rgba(20,100,160,0.08)]
            backdrop-blur-xl
            sm:min-h-[760px]
            lg:min-h-[820px]
          "
        >
          {/* Grid */}

          <div
            className="
              soft-grid
              pointer-events-none
              absolute
              inset-0
              opacity-60
              [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]
            "
          />

          {/* Top label */}

          <div
            className="
              absolute
              left-6
              top-6
              z-30
              flex
              items-center
              gap-3
              sm:left-8
              sm:top-8
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[var(--blue)]
                shadow-[0_0_0_6px_rgba(21,151,245,0.10)]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[var(--faint)]
              "
            >
              EasyTop Network
            </span>
          </div>

          {/* Counter decoration */}

          <div
            className="
              absolute
              right-6
              top-6
              z-30
              hidden
              text-right
              sm:block
              sm:right-8
              sm:top-8
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
              Réseaux connectés
            </p>

            <p
              className="
                mt-1
                text-2xl
                font-bold
                tracking-[-0.05em]
                text-[var(--ink)]
              "
            >
              04
            </p>
          </div>

          {/* =================================================
              ACTUAL UNIVERSE
          ================================================== */}

          <div
            ref={universeRef}
            className="
              absolute
              left-1/2
              top-1/2
              h-[520px]
              w-[520px]
              -translate-x-1/2
              -translate-y-1/2

              sm:h-[640px]
              sm:w-[640px]

              lg:h-[700px]
              lg:w-[700px]
            "
          >
            {/* Outer orbit */}

            <div
              className="
                absolute
                inset-[4%]
                rounded-full
                border
                border-dashed
                border-[rgba(21,151,245,0.24)]
              "
            />

            {/* Middle orbit */}

            <div
              className="
                absolute
                inset-[17%]
                rounded-full
                border
                border-[rgba(21,151,245,0.13)]
              "
            />

            {/* Inner orbit */}

            <div
              className="
                absolute
                inset-[31%]
                rounded-full
                border
                border-[rgba(21,151,245,0.10)]
              "
            />

            {/* =================================================
                CONNECTION LINES
            ================================================== */}

            <svg
              viewBox="0 0 700 700"
              fill="none"
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
                overflow-visible
              "
            >
              <defs>
                <linearGradient
                  id="easytop-route"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#1597F5"
                    stopOpacity="0.12"
                  />

                  <stop
                    offset="50%"
                    stopColor="#1597F5"
                    stopOpacity="0.65"
                  />

                  <stop
                    offset="100%"
                    stopColor="#1597F5"
                    stopOpacity="0.12"
                  />
                </linearGradient>
              </defs>

              {/* Orange -> Wave */}

              <path
                d="M350 92 C570 100 640 260 602 350"
                stroke="url(#easytop-route)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              {/* Wave -> Moov */}

              <path
                d="M602 350 C610 550 470 635 350 610"
                stroke="url(#easytop-route)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              {/* Moov -> MTN */}

              <path
                d="M350 610 C120 625 65 455 98 350"
                stroke="url(#easytop-route)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              {/* MTN -> Orange */}

              <path
                d="M98 350 C85 155 230 80 350 92"
                stroke="url(#easytop-route)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              {/* Animated signal 1 */}

              <circle
                r="5"
                fill="#1597F5"
                className="transfer-signal"
              >
                <animateMotion
                  dur="4.2s"
                  repeatCount="indefinite"
                  path="M350 92 C570 100 640 260 602 350"
                />
              </circle>

              {/* Animated signal 2 */}

              <circle
                r="4"
                fill="#1597F5"
                opacity="0.65"
                className="transfer-signal"
              >
                <animateMotion
                  dur="5s"
                  begin="1.2s"
                  repeatCount="indefinite"
                  path="M602 350 C610 550 470 635 350 610"
                />
              </circle>

              {/* Animated signal 3 */}

              <circle
                r="4"
                fill="#102033"
                opacity="0.5"
                className="transfer-signal"
              >
                <animateMotion
                  dur="4.6s"
                  begin="2s"
                  repeatCount="indefinite"
                  path="M350 610 C120 625 65 455 98 350"
                />
              </circle>
            </svg>

            {/* =================================================
                CENTER — EASYTOP PLANET
            ================================================== */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              {/* Atmospheric glow */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[220px]
                  w-[220px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-[rgba(21,151,245,0.16)]
                  blur-[45px]
                  sm:h-[280px]
                  sm:w-[280px]
                "
              />

              {/* Rings */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[190px]
                  w-[190px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-[rgba(21,151,245,0.16)]
                  sm:h-[230px]
                  sm:w-[230px]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[165px]
                  w-[165px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-white
                  bg-white/60
                  shadow-[0_20px_60px_rgba(21,151,245,0.13)]
                  backdrop-blur-md
                  sm:h-[195px]
                  sm:w-[195px]
                "
              />

              {/* App icon */}

              <div
                className="
                  relative
                  h-[105px]
                  w-[105px]
                  overflow-hidden
                  rounded-[25px]
                  border-[4px]
                  border-white
                  bg-white
                  shadow-[0_20px_50px_rgba(0,100,170,0.18)]
                  sm:h-[125px]
                  sm:w-[125px]
                  sm:rounded-[30px]
                "
              >
                <img
                  src={easytopIcon}
                  alt="EasyTop"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>
            </div>

            {/* =================================================
                OPERATORS
            ================================================== */}

            <OperatorNode
              name="Orange Money"
              logo={orangeLogo}
              operator="orange"
              position="
                left-1/2
                top-[2%]
                -translate-x-1/2
              "
            />

            <OperatorNode
              name="Wave"
              logo={waveLogo}
              operator="wave"
              position="
                right-[0%]
                top-1/2
                -translate-y-1/2
              "
            />

            <OperatorNode
              name="Moov Money"
              logo={moovLogo}
              operator="moov"
              position="
                bottom-[0%]
                left-1/2
                -translate-x-1/2
              "
            />

            <OperatorNode
              name="MTN MoMo"
              logo={mtnLogo}
              operator="mtn"
              position="
                left-[0%]
                top-1/2
                -translate-y-1/2
              "
            />
          </div>

          {/* =================================================
              MOBILE MESSAGE
          ================================================== */}

          <div
            className="
              absolute
              bottom-6
              left-1/2
              z-30
              w-[calc(100%-48px)]
              -translate-x-1/2
              sm:bottom-8
              sm:w-auto
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[var(--line)]
                bg-white/85
                px-5
                py-3
                text-center
                shadow-[0_10px_40px_rgba(16,32,51,0.06)]
                backdrop-blur-xl
              "
            >
              <span
                className="
                  text-xs
                  font-bold
                  text-[var(--ink)]
                "
              >
                Un opérateur
              </span>

              <MoveRight
                className="
                  h-4
                  w-4
                  text-[var(--blue)]
                "
              />

              <span
                className="
                  text-xs
                  font-bold
                  text-[var(--ink)]
                "
              >
                un autre
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            EXPLANATION
        ================================================== */}

        <div
          className="
            mt-14
            grid
            gap-8
            lg:grid-cols-[1fr_1fr]
            lg:items-center
          "
        >
          <p
            className="
              max-w-[620px]
              text-[clamp(1.6rem,3vw,2.8rem)]
              font-bold
              leading-[1.12]
              tracking-[-0.045em]
              text-[var(--ink)]
            "
          >
            Envoyez depuis votre réseau.
            <br />

            <span className="text-[var(--faint)]">
              Recevez sur un autre.
            </span>
          </p>

          <div
            className="
              flex
              flex-col
              gap-6
              lg:items-end
            "
          >
            <p
              className="
                max-w-[460px]
                text-sm
                font-medium
                leading-[1.8]
                text-[var(--muted)]
              "
            >
              EasyTop est pensé pour simplifier les échanges
              entre les différents services de mobile money,
              depuis une expérience unique.
            </p>

            <a
              href="#telecharger"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-sm
                font-bold
                text-[var(--ink)]
              "
            >
              Découvrir le transfert

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--blue)]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   OPERATOR NODE
   ========================================================= */

type OperatorNodeProps = {
  name: string;
  logo: string;
  operator: string;
  position: string;
};

function OperatorNode({
  name,
  logo,
  operator,
  position,
}: OperatorNodeProps) {
  return (
    <div
      data-operator={operator}
      className={`
        absolute
        z-30
        ${position}
      `}
    >
      <div
        className="
          group
          flex
          flex-col
          items-center
          gap-2.5
        "
      >
        <div
          className="
            flex
            h-[78px]
            w-[78px]
            items-center
            justify-center
            overflow-hidden
            rounded-[22px]
            border-[5px]
            border-white
            bg-white
            p-1
            shadow-[0_18px_50px_rgba(16,32,51,0.12)]
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:scale-105

            sm:h-[92px]
            sm:w-[92px]
            sm:rounded-[26px]
          "
        >
          <img
            src={logo}
            alt={name}
            className="
              h-full
              w-full
              rounded-[16px]
              object-contain
            "
          />
        </div>

        <span
          className="
            whitespace-nowrap
            rounded-full
            border
            border-[var(--line)]
            bg-white/90
            px-3
            py-1.5
            text-[10px]
            font-bold
            text-[var(--ink)]
            shadow-sm
            backdrop-blur
            sm:text-[11px]
          "
        >
          {name}
        </span>
      </div>
    </div>
  );
}