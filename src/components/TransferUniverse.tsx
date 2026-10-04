import { useEffect, useRef } from 'react';

import {
  ArrowDownToLine,
  ArrowUpRight,
  BadgeCheck,
  Coins,
  Phone,
  Radio,
  Smartphone,
  Wifi,
} from 'lucide-react';

import gsap from 'gsap';

import easytopIcon from '../assets/icon.png';

/*
 * =========================================================
 * CONFIGURATION
 * =========================================================
 *
 * Quand l'APK Agent sera disponible, remplace simplement
 * cette valeur par son URL de téléchargement.
 *
 * Exemple :
 * const AGENT_APP_DOWNLOAD_URL =
 *   'https://easytop.org/downloads/easytop-agent.apk';
 */
const AGENT_APP_DOWNLOAD_URL = '';

type LucideIcon = typeof Smartphone;

type AgentNodeProps = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  node: string;
  position: string;
};

export default function TransferUniverse() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const universeRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * Mouvement général très léger.
       * L'univers EasyTop Agent "respire".
       */
      gsap.to(universeRef.current, {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      /*
       * Petites pulsations indépendantes
       * des différents services.
       */
      gsap.to(
        '[data-agent-node="order"]',
        {
          y: -6,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );

      gsap.to(
        '[data-agent-node="credit"]',
        {
          x: 6,
          duration: 3.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );

      gsap.to(
        '[data-agent-node="internet"]',
        {
          y: 7,
          duration: 3.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );

      gsap.to(
        '[data-agent-node="voice"]',
        {
          x: -6,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleDownload = () => {
    if (!AGENT_APP_DOWNLOAD_URL) {
      return;
    }

    window.location.href =
      AGENT_APP_DOWNLOAD_URL;
  };

  return (
    <section
      ref={sectionRef}
      id="partenaires"
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

              Devenez partenaire
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
              Vous êtes cabiniste ? Rejoignez
              le réseau EasyTop et recevez des
              commandes directement depuis
              notre application Agent.
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
            Votre activité.
            <br />

            <span className="text-[var(--blue)]">
              Plus d'opportunités avec EasyTop.
            </span>
          </h2>
        </div>

        {/* =================================================
            AGENT UNIVERSE
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
              EasyTop Agent
            </span>
          </div>

          {/* Partner status */}

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
              Réseau partenaire
            </p>

            <div
              className="
                mt-2
                flex
                items-center
                justify-end
                gap-2
              "
            >
              <span
                className="
                  relative
                  flex
                  h-2.5
                  w-2.5
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[var(--blue)]
                    opacity-30
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[var(--blue)]
                  "
                />
              </span>

              <span
                className="
                  text-sm
                  font-bold
                  text-[var(--ink)]
                "
              >
                EasyTop
              </span>
            </div>
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
                  id="easytop-agent-route"
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
                    stopOpacity="0.7"
                  />

                  <stop
                    offset="100%"
                    stopColor="#1597F5"
                    stopOpacity="0.12"
                  />
                </linearGradient>
              </defs>

              {/*
               * Les quatre routes convergent
               * vers EasyTop Agent.
               */}

              <path
                d="M350 92 C350 175 350 235 350 300"
                stroke="url(#easytop-agent-route)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              <path
                d="M602 350 C520 350 450 350 400 350"
                stroke="url(#easytop-agent-route)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              <path
                d="M350 610 C350 525 350 465 350 400"
                stroke="url(#easytop-agent-route)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              <path
                d="M98 350 C180 350 250 350 300 350"
                stroke="url(#easytop-agent-route)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              {/* Signal : nouvelle commande */}

              <circle
                r="5"
                fill="#1597F5"
                className="transfer-signal"
              >
                <animateMotion
                  dur="3.6s"
                  repeatCount="indefinite"
                  path="M350 92 C350 175 350 235 350 300"
                />
              </circle>

              {/* Signal : achat d'unité */}

              <circle
                r="4"
                fill="#1597F5"
                opacity="0.7"
                className="transfer-signal"
              >
                <animateMotion
                  dur="4.2s"
                  begin="0.8s"
                  repeatCount="indefinite"
                  path="M602 350 C520 350 450 350 400 350"
                />
              </circle>

              {/* Signal : pass internet */}

              <circle
                r="4"
                fill="#1597F5"
                opacity="0.65"
                className="transfer-signal"
              >
                <animateMotion
                  dur="4s"
                  begin="1.6s"
                  repeatCount="indefinite"
                  path="M350 610 C350 525 350 465 350 400"
                />
              </circle>

              {/* Signal : pass appel */}

              <circle
                r="4"
                fill="#102033"
                opacity="0.45"
                className="transfer-signal"
              >
                <animateMotion
                  dur="4.5s"
                  begin="2.2s"
                  repeatCount="indefinite"
                  path="M98 350 C180 350 250 350 300 350"
                />
              </circle>
            </svg>

            {/* =================================================
                CENTER — EASYTOP AGENT
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

              {/* Outer ring */}

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

              {/* Inner surface */}

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

              {/* EasyTop app icon */}

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

              {/* Agent badge */}

              <div
                className="
                  absolute
                  -bottom-11
                  left-1/2
                  flex
                  -translate-x-1/2
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white
                  bg-white/95
                  px-4
                  py-2
                  shadow-[0_10px_30px_rgba(16,32,51,0.10)]
                  backdrop-blur
                "
              >
                <Smartphone
                  className="
                    h-3.5
                    w-3.5
                    text-[var(--blue)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--ink)]
                  "
                >
                  EasyTop Agent
                </span>
              </div>
            </div>

            {/* =================================================
                AGENT SERVICES
            ================================================== */}

            <AgentNode
              title="Pass appel"
              subtitle="Voix"
              icon={Phone}
              node="voice"
              position="
                left-[16%]
                top-1/2
                -translate-y-1/2

                sm:left-[0%]
              "
            />

            <AgentNode
              title="Achat d'unité"
              subtitle="Recharge"
              icon={Coins}
              node="credit"
              position="
                right-[16%]
                top-1/2
                -translate-y-1/2

                sm:right-[0%]
              "
            />

            <AgentNode
              title="Pass internet"
              subtitle="Data"
              icon={Wifi}
              node="internet"
              position="
                bottom-[0%]
                left-1/2
                -translate-x-1/2
              "
            />

            <AgentNode
              title="Pass appel"
              subtitle="Voix"
              icon={Phone}
              node="voice"
              position="
                left-[16%]
                top-1/2
                -translate-y-1/2

                sm:left-[0%]
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
              <BadgeCheck
                className="
                  h-4
                  w-4
                  shrink-0
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
                Rejoignez le réseau EasyTop
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            EXPLANATION / DOWNLOAD
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
            Vos services.
            <br />

            <span className="text-[var(--faint)]">
              Les commandes EasyTop en plus.
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
              Téléchargez EasyTop Agent,
              créez votre compte et configurez
              les opérateurs que vous utilisez
              pour rejoindre le réseau des
              partenaires EasyTop.
            </p>

            {AGENT_APP_DOWNLOAD_URL ? (
              <a
                href={AGENT_APP_DOWNLOAD_URL}
                download
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[var(--blue)]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(21,151,245,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_16px_38px_rgba(21,151,245,0.28)]
                "
              >
                <ArrowDownToLine className="h-4 w-4" />

                Télécharger l'application Agent

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ) : (
              <button
                type="button"
                onClick={handleDownload}
                disabled
                className="
                  inline-flex
                  cursor-not-allowed
                  items-center
                  gap-3
                  rounded-full
                  bg-[var(--blue)]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  opacity-55
                "
                title="Le téléchargement sera bientôt disponible"
              >
                <ArrowDownToLine className="h-4 w-4" />

                Télécharger l'application Agent

                <span
                  className="
                    rounded-full
                    bg-white/15
                    px-2.5
                    py-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                  "
                >
                  Bientôt
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AGENT NODE
   ========================================================= */

function AgentNode({
  title,
  subtitle,
  icon: Icon,
  node,
  position,
}: AgentNodeProps) {
  return (
    <div
      data-agent-node={node}
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
            relative
            flex
            h-[78px]
            w-[78px]
            items-center
            justify-center
            rounded-[22px]
            border-[5px]
            border-white
            bg-white
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
          <div
            className="
              absolute
              inset-[7px]
              rounded-[17px]
              bg-[rgba(21,151,245,0.08)]

              sm:rounded-[20px]
            "
          />

          <Icon
            strokeWidth={1.8}
            className="
              relative
              z-10
              h-7
              w-7
              text-[var(--blue)]

              sm:h-8
              sm:w-8
            "
          />

          {node === 'order' && (
            <span
              className="
                absolute
                right-[7px]
                top-[7px]
                h-2.5
                w-2.5
                rounded-full
                border-2
                border-white
                bg-[var(--blue)]
              "
            />
          )}
        </div>

        <div
          className="
            whitespace-nowrap
            rounded-[16px]
            border
            border-[var(--line)]
            bg-white/90
            px-3.5
            py-2
            text-center
            shadow-sm
            backdrop-blur
          "
        >
          <span
            className="
              block
              text-[10px]
              font-bold
              text-[var(--ink)]
              sm:text-[11px]
            "
          >
            {title}
          </span>

          <span
            className="
              mt-0.5
              block
              text-[9px]
              font-semibold
              text-[var(--faint)]
            "
          >
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}