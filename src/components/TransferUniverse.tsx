
import { useEffect, useRef } from 'react';
import { ArrowUpRight, MessageCircle, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';

import agentLogo from '../assets/easytop-agent-logo.png';

const SUPPORT_NUMBER = '2250161300716';

const SUPPORT_MESSAGE =
  "Bonjour EasyTop, je suis cabiniste et je souhaite rejoindre le réseau EasyTop Agent. Pourriez-vous m'envoyer le lien de téléchargement de l'application ?";

const SUPPORT_URL = `https://wa.me/${SUPPORT_NUMBER}?text=${encodeURIComponent(
  SUPPORT_MESSAGE
)}`;

export default function TransferUniverse() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-agent-reveal]', {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: undefined,
      });

      if (logoRef.current) {
        gsap.to(logoRef.current, {
          y: -14,
          rotate: -2,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="partenaires"
      className="section relative overflow-hidden bg-[var(--blue-pale)]"
    >
      {/* Décor d'arrière-plan */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/2
          h-[440px]
          w-[440px]
          -translate-y-1/2
          rounded-full
          bg-[rgba(21,151,245,0.12)]
          blur-[90px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-white/70
          blur-[80px]
        "
      />

      <div
        className="
          page-container
          relative
          z-10
          grid
          items-center
          gap-12
          lg:grid-cols-2
          lg:gap-20
        "
      >
        {/* GAUCHE : LOGO EASYTOP AGENT */}

        <div
          className="
            relative
            flex
            min-h-[360px]
            items-center
            justify-center
            sm:min-h-[450px]
            lg:min-h-[540px]
          "
        >
          {/* Cercles décoratifs */}

          <div
            aria-hidden="true"
            className="
              absolute
              h-[300px]
              w-[300px]
              rounded-full
              border
              border-[rgba(21,151,245,0.15)]
              sm:h-[420px]
              sm:w-[420px]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              h-[240px]
              w-[240px]
              rounded-full
              border
              border-dashed
              border-[rgba(21,151,245,0.20)]
              sm:h-[340px]
              sm:w-[340px]
            "
          />

          {/* Halo derrière le logo */}

          <div
            aria-hidden="true"
            className="
              absolute
              h-[230px]
              w-[230px]
              rounded-full
              bg-[rgba(21,151,245,0.12)]
              blur-[45px]
              sm:h-[320px]
              sm:w-[320px]
            "
          />

          {/* Logo flottant */}

          <div
            ref={logoRef}
            className="
              relative
              z-10
              w-[230px]
              sm:w-[300px]
              lg:w-[350px]
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                inset-x-[15%]
                -bottom-9
                h-14
                rounded-[50%]
                bg-[rgba(15,32,51,0.16)]
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
                shadow-[0_35px_90px_rgba(0,110,190,0.18)]
              "
            >
              <img
                src={agentLogo}
                alt="Logo de l'application EasyTop Agent"
                className="aspect-square w-full object-contain"
              />
            </div>
          </div>

          {/* Petite étiquette */}

          <div
            className="
              absolute
              bottom-[8%]
              right-[2%]
              z-20
              hidden
              rotate-[5deg]
              items-center
              gap-2
              rounded-full
              border
              border-[var(--line)]
              bg-white
              px-4
              py-3
              shadow-[0_12px_35px_rgba(15,32,51,0.08)]
              sm:flex
            "
          >
            <ShieldCheck
              className="h-4 w-4 text-[var(--blue)]"
            />

            <span
              className="
                text-xs
                font-bold
                text-[var(--ink)]
              "
            >
              Réseau EasyTop
            </span>
          </div>
        </div>

        {/* DROITE : PRÉSENTATION */}

        <div className="relative z-20">
          <div
            data-agent-reveal
            className="eyebrow mb-6"
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[var(--blue)]
              "
            />

            EASYTOP AGENT
          </div>

          <h2
            data-agent-reveal
            className="
              section-title
              max-w-[650px]
              text-[var(--ink)]
            "
          >
            Vous êtes cabiniste ?
            <br />

            <span className="text-[var(--blue)]">
              Rejoignez EasyTop.
            </span>
          </h2>

          <p
            data-agent-reveal
            className="
              mt-7
              max-w-[540px]
              text-[16px]
              font-medium
              leading-[1.85]
              text-[var(--muted)]
            "
          >
            Développez votre activité en rejoignant
            notre réseau de cabinistes partenaires.
            Recevez des commandes de recharge,
            de pass internet et de pass appel
            directement depuis l'application
            EasyTop Agent.
          </p>

          <p
            data-agent-reveal
            className="
              mt-5
              max-w-[520px]
              text-[14px]
              leading-[1.8]
              text-[var(--muted)]
            "
          >
            Vous souhaitez commencer ?
            Contactez notre équipe sur WhatsApp
            pour obtenir les informations nécessaires
            et recevoir le lien de téléchargement
            de l'application.
          </p>

          {/* Bouton support WhatsApp */}

          <div
            data-agent-reveal
            className="mt-9"
          >
            <a
              href={SUPPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[var(--blue)]
                px-7
                py-4
                text-[14px]
                font-bold
                text-white
                shadow-[0_15px_35px_rgba(21,151,245,0.22)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(21,151,245,0.30)]
              "
            >
              <MessageCircle className="h-5 w-5" />

              Contacter le support

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>

          {/* Mention de téléchargement */}

          <p
            data-agent-reveal
            className="
              mt-5
              text-[12px]
              font-medium
              text-[var(--faint)]
            "
          >
            Lien de téléchargement communiqué
            directement par notre équipe.
          </p>
        </div>
      </div>
    </section>
  );
}
