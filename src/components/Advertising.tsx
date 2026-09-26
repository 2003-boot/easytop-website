import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Eye,
  Headphones,
  PhoneCall,
  Plus,
  Send,
  Signal,
  Smartphone,
} from 'lucide-react';
import gsap from 'gsap';

const WHATSAPP_URL =
  'https://wa.me/2250161300716?text=Bonjour%20EasyTop%2C%20je%20souhaite%20obtenir%20des%20informations%20concernant%20les%20offres%20publicitaires%20et%20les%20possibilit%C3%A9s%20de%20partenariat%20sur%20votre%20plateforme.';

const flyers = [
  {
    id: 1,
    eyebrow: 'VOTRE MARQUE',
    title: 'Votre campagne pourrait être juste ici.',
    subtitle: 'Un espace pensé pour mettre votre activité en avant.',
    type: 'blue',
  },
  {
    id: 2,
    eyebrow: 'NOUVEAUTÉ',
    title: 'Faites découvrir votre entreprise.',
    subtitle: 'Présentez vos offres directement dans EasyTop.',
    type: 'dark',
  },
  {
    id: 3,
    eyebrow: 'EASYTOP ADS',
    title: 'Un nouvel espace pour votre communication.',
    subtitle: 'Une présence intégrée à l’expérience EasyTop.',
    type: 'light',
  },
];

export default function Advertising() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const campaignRef = useRef<HTMLDivElement | null>(null);

  const [activeFlyer, setActiveFlyer] = useState(0);

  /* =========================================================
     AUTO CAROUSEL
  ========================================================= */

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveFlyer((current) => (current + 1) % flyers.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  /* =========================================================
     GSAP
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(phoneRef.current, {
        y: -10,
        rotate: 0.7,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(campaignRef.current, {
        y: -7,
        rotate: -1,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('[data-ad-signal]', {
        opacity: 0.15,
        scale: 1.25,
        duration: 1.7,
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
      id="publicite"
      className="
        section
        relative
        overflow-hidden
        bg-white
      "
    >
      {/* =====================================================
          DECOR
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[260px]
          top-[100px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[rgba(21,151,245,0.08)]
          blur-[130px]
        "
      />

      <div
        className="
          page-container
          relative
          z-10
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

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
              <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />

              Publicité sur EasyTop
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
              EasyTop intègre un espace permettant aux
              entreprises de présenter leurs campagnes au
              cœur de l’application.
            </p>
          </div>

          <h2
            className="
              section-title
              max-w-[900px]
              text-[var(--ink)]
              lg:ml-auto
            "
          >
            Votre marque.
            <br />

            <span className="text-[var(--blue)]">
              Dans EasyTop.
            </span>

            <br />

            <span className="text-[var(--faint)]">
              Là où elle peut être vue.
            </span>
          </h2>
        </div>

        {/* =====================================================
            MAIN EXPERIENCE
        ====================================================== */}

        <div
          className="
            relative
            mt-16
            grid
            min-h-[800px]
            overflow-hidden
            rounded-[42px]
            border
            border-[var(--line)]
            bg-[var(--surface-soft)]
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              justify-between
              p-7
              sm:p-10
              lg:p-14
            "
          >
            <div>
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[var(--line)]
                  bg-white
                  px-4
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[var(--faint)]
                "
              >
                EasyTop Ads
              </span>

              <h3
                className="
                  mt-8
                  max-w-[500px]
                  text-[clamp(2.4rem,5vw,5rem)]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.06em]
                  text-[var(--ink)]
                "
              >
                Faites entrer
                <br />
                votre marque
                <br />

                <span className="text-[var(--blue)]">
                  dans l’expérience.
                </span>
              </h3>

              <p
                className="
                  mt-7
                  max-w-[450px]
                  text-[15px]
                  font-medium
                  leading-[1.8]
                  text-[var(--muted)]
                "
              >
                L’espace publicitaire EasyTop est intégré
                directement à l’accueil de l’application,
                entre les éléments essentiels de
                l’expérience utilisateur.
              </p>
            </div>

            {/* ---------------------------------------------
                Campaign source card
            ---------------------------------------------- */}

            <div
              ref={campaignRef}
              className="
                relative
                mt-14
                max-w-[370px]
                rounded-[28px]
                border
                border-[var(--line)]
                bg-white
                p-5
                shadow-[0_24px_70px_rgba(16,32,51,0.08)]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
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
                    Votre campagne
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-bold
                      text-[var(--ink)]
                    "
                  >
                    Prête à être mise en avant
                  </p>
                </div>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--blue-soft)]
                    text-[var(--blue)]
                  "
                >
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div
                className="
                  mt-5
                  overflow-hidden
                  rounded-[18px]
                  bg-[var(--blue)]
                  p-5
                  text-white
                "
              >
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white/65
                  "
                >
                  Votre marque
                </p>

                <p
                  className="
                    mt-6
                    max-w-[220px]
                    text-xl
                    font-bold
                    leading-tight
                    tracking-[-0.04em]
                  "
                >
                  Votre campagne pourrait être ici.
                </p>

                <div
                  className="
                    mt-6
                    h-[3px]
                    w-12
                    rounded-full
                    bg-white/70
                  "
                />
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================== */}

          <div
            className="
              relative
              flex
              min-h-[760px]
              items-center
              justify-center
              overflow-hidden
              bg-white
              px-5
              py-16
              sm:px-10
            "
          >
            {/* Grid */}

            <div
              className="
                soft-grid
                pointer-events-none
                absolute
                inset-0
                opacity-70
                [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]
              "
            />

            {/* Huge background text */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-[-25px]
                top-[10%]
                select-none
                text-[clamp(7rem,16vw,15rem)]
                font-black
                leading-none
                tracking-[-0.08em]
                text-[var(--blue)]/[0.035]
              "
            >
              ADS
            </span>

            {/* =============================================
                CONNECTION / SIGNAL
            ============================================== */}

            <div
              className="
                absolute
                left-[3%]
                top-1/2
                hidden
                w-[27%]
                -translate-y-1/2
                lg:block
              "
            >
              <div
                className="
                  relative
                  h-[1px]
                  w-full
                  bg-[linear-gradient(to_right,rgba(21,151,245,0.08),rgba(21,151,245,0.6))]
                "
              >
                <span
                  data-ad-signal
                  className="
                    absolute
                    right-0
                    top-1/2
                    h-3
                    w-3
                    -translate-y-1/2
                    rounded-full
                    bg-[var(--blue)]
                    shadow-[0_0_0_10px_rgba(21,151,245,0.10)]
                  "
                />
              </div>

              <p
                className="
                  mt-3
                  text-right
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[var(--faint)]
                "
              >
                Campagne publiée
              </p>
            </div>

            {/* =================================================
                PHONE
            ================================================== */}

            <div
              ref={phoneRef}
              className="
                relative
                z-20
                w-full
                max-w-[330px]
              "
            >
              {/* phone shadow */}

              <div
                className="
                  absolute
                  inset-x-[8%]
                  -bottom-8
                  h-20
                  rounded-[50%]
                  bg-[rgba(16,32,51,0.16)]
                  blur-3xl
                "
              />

              {/* shell */}

              <div
                className="
                  relative
                  rounded-[46px]
                  bg-[var(--ink)]
                  p-[7px]
                  shadow-[0_40px_100px_rgba(16,32,51,0.22)]
                "
              >
                {/* screen */}

                <div
                  className="
                    relative
                    h-[675px]
                    overflow-hidden
                    rounded-[40px]
                    bg-[#f7fbfe]
                  "
                >
                  {/* status bar */}

                  <div
                    className="
                      relative
                      z-30
                      flex
                      h-9
                      items-center
                      justify-between
                      px-6
                      text-[9px]
                      font-bold
                      text-[var(--ink)]
                    "
                  >
                    <span>9:41</span>

                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
                      <span className="h-1.5 w-3 rounded-full bg-[var(--ink)]" />
                      <span className="h-2 w-4 rounded-[3px] border border-[var(--ink)]" />
                    </div>
                  </div>

                  {/* Dynamic island */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-2
                      z-40
                      h-[22px]
                      w-[82px]
                      -translate-x-1/2
                      rounded-full
                      bg-[var(--ink)]
                    "
                  />

                  {/* app content */}

                  <div className="px-4 pb-16 pt-3">
                    {/* greeting */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[9px]
                            font-semibold
                            text-[var(--faint)]
                          "
                        >
                          Bonjour 👋
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[13px]
                            font-bold
                            text-[var(--ink)]
                          "
                        >
                          Bienvenue sur EasyTop
                        </p>
                      </div>

                      <div
                        className="
                          h-8
                          w-8
                          rounded-full
                          bg-[var(--blue-soft)]
                        "
                      />
                    </div>

                    {/* balance card */}

                    <div
                      className="
                        relative
                        mt-4
                        overflow-hidden
                        rounded-[22px]
                        bg-[var(--blue)]
                        p-4
                        text-white
                      "
                    >
                      {/* circles */}

                      <div
                        className="
                          absolute
                          -right-9
                          -top-12
                          h-28
                          w-28
                          rounded-full
                          bg-white/10
                        "
                      />

                      <div
                        className="
                          absolute
                          -bottom-14
                          -left-8
                          h-28
                          w-28
                          rounded-full
                          bg-white/[0.07]
                        "
                      />

                      <div
                        className="
                          relative
                          z-10
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <p
                          className="
                            text-[8px]
                            font-semibold
                            text-white/70
                          "
                        >
                          Solde disponible
                        </p>

                        <Eye className="h-2.5 w-2.5 text-white/70" />
                      </div>

                      <p
                        className="
                          relative
                          z-10
                          mt-1
                          text-[20px]
                          font-bold
                          tracking-[-0.04em]
                        "
                      >
                        0 FCFA
                      </p>

                      <div
                        className="
                          relative
                          z-10
                          mt-5
                          grid
                          grid-cols-3
                          gap-3
                        "
                      >
                        <PhoneAction
                          icon={Plus}
                          label="Ajouter"
                        />

                        <PhoneAction
                          icon={Send}
                          label="Transférer"
                        />

                        <PhoneAction
                          icon={Headphones}
                          label="Support"
                        />
                      </div>
                    </div>

                    {/* =====================================
                        AD CAROUSEL
                    ====================================== */}

                    <div className="mt-4">
                      <div
                        className="
                          relative
                          h-[145px]
                          overflow-hidden
                          rounded-[19px]
                          bg-white
                          shadow-[0_8px_30px_rgba(16,32,51,0.06)]
                        "
                      >
                        <div
                          className="
                            flex
                            h-full
                            transition-transform
                            duration-700
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                          "
                          style={{
                            width: `${flyers.length * 100}%`,
                            transform: `translateX(-${
                              activeFlyer *
                              (100 / flyers.length)
                            }%)`,
                          }}
                        >
                          {flyers.map((flyer) => (
                            <div
                              key={flyer.id}
                              className="h-full"
                              style={{
                                width: `${
                                  100 / flyers.length
                                }%`,
                              }}
                            >
                              <PhoneFlyer flyer={flyer} />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* indicators */}

                      <div
                        className="
                          mt-2.5
                          flex
                          justify-center
                          gap-1.5
                        "
                      >
                        {flyers.map((flyer, index) => (
                          <button
                            key={flyer.id}
                            type="button"
                            onClick={() =>
                              setActiveFlyer(index)
                            }
                            aria-label={`Afficher la publicité ${index + 1}`}
                            className={`
                              h-1.5
                              rounded-full
                              transition-all
                              duration-300

                              ${
                                activeFlyer === index
                                  ? 'w-5 bg-[var(--blue)]'
                                  : 'w-1.5 bg-[#d7e1e9]'
                              }
                            `}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Services */}

                    <div className="mt-4">
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <p
                          className="
                            text-[11px]
                            font-bold
                            text-[var(--ink)]
                          "
                        >
                          Services
                        </p>

                        <span
                          className="
                            text-[8px]
                            font-bold
                            text-[var(--blue)]
                          "
                        >
                          EasyTop
                        </span>
                      </div>

                      <div
                        className="
                          mt-3
                          grid
                          grid-cols-3
                          gap-2
                        "
                      >
                        <ServiceMini
                          icon={Smartphone}
                          label="Unités"
                        />

                        <ServiceMini
                          icon={Signal}
                          label="Internet"
                        />

                        <ServiceMini
                          icon={PhoneCall}
                          label="Appels"
                        />
                      </div>
                    </div>

                    {/* recent */}

                    <div className="mt-5">
                      <p
                        className="
                          text-[11px]
                          font-bold
                          text-[var(--ink)]
                        "
                      >
                        Activité récente
                      </p>

                      <div
                        className="
                          mt-3
                          flex
                          items-center
                          gap-3
                          rounded-[14px]
                          bg-white
                          p-3
                        "
                      >
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--blue-soft)]
                            text-[var(--blue)]
                          "
                        >
                          <Smartphone className="h-3.5 w-3.5" />
                        </div>

                        <div className="flex-1">
                          <div
                            className="
                              h-2
                              w-20
                              rounded-full
                              bg-[#dce6ed]
                            "
                          />

                          <div
                            className="
                              mt-2
                              h-1.5
                              w-12
                              rounded-full
                              bg-[#edf2f6]
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* bottom nav */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-30
                      flex
                      h-[55px]
                      items-center
                      justify-around
                      border-t
                      border-[#edf1f4]
                      bg-white/95
                      backdrop-blur
                    "
                  >
                    <BottomNavDot active label="Accueil" />
                    <BottomNavDot label="Historique" />
                    <BottomNavDot label="Profil" />
                  </div>
                </div>
              </div>

              {/* phone side button */}

              <div
                className="
                  absolute
                  -right-[3px]
                  top-[120px]
                  h-20
                  w-[3px]
                  rounded-r-full
                  bg-[#243446]
                "
              />
            </div>

            {/* floating badge */}

            <div
              className="
                absolute
                -right-5
                top-[24%]
                z-30
                hidden
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
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.13em]
                  text-[var(--faint)]
                "
              >
                Visible ici
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  font-bold
                  text-[var(--ink)]
                "
              >
                Accueil EasyTop
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            gap-8
            border-t
            border-[var(--line)]
            pt-9
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-[clamp(1.7rem,3vw,3rem)]
                font-bold
                leading-[1.1]
                tracking-[-0.045em]
                text-[var(--ink)]
              "
            >
              Vous souhaitez
              <br />

              <span className="text-[var(--blue)]">
                apparaître ici ?
              </span>
            </p>

            <p
              className="
                mt-4
                max-w-[550px]
                text-sm
                font-medium
                leading-[1.8]
                text-[var(--muted)]
              "
            >
              Échangez avec EasyTop pour en savoir plus sur
              les possibilités publicitaires et les
              partenariats disponibles.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[var(--ink)]
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[var(--blue)]
              hover:shadow-[0_18px_40px_rgba(21,151,245,0.22)]
            "
          >
            Discuter sur WhatsApp

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PHONE ACTION
========================================================= */

type IconType = React.ElementType;

function PhoneAction({
  icon: Icon,
  label,
}: {
  icon: IconType;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-white/15
        "
      >
        <Icon className="h-3 w-3" />
      </div>

      <span
        className="
          text-[7px]
          font-semibold
          text-white/80
        "
      >
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   MINI SERVICE
========================================================= */

function ServiceMini({
  icon: Icon,
  label,
}: {
  icon: IconType;
  label: string;
}) {
  return (
    <div
      className="
        rounded-[14px]
        bg-white
        px-2
        py-3
        text-center
      "
    >
      <div
        className="
          mx-auto
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-[var(--blue-soft)]
          text-[var(--blue)]
        "
      >
        <Icon className="h-3.5 w-3.5" />
      </div>

      <p
        className="
          mt-2
          text-[7px]
          font-bold
          text-[var(--ink)]
        "
      >
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   BOTTOM NAV
========================================================= */

function BottomNavDot({
  active = false,
  label,
}: {
  active?: boolean;
  label: string;
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        gap-1
      "
    >
      <span
        className={`
          h-2
          w-2
          rounded-full
          ${
            active
              ? 'bg-[var(--blue)]'
              : 'bg-[#cbd6df]'
          }
        `}
      />

      <span
        className={`
          text-[6px]
          font-bold
          ${
            active
              ? 'text-[var(--blue)]'
              : 'text-[var(--faint)]'
          }
        `}
      >
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   AD FLYER
========================================================= */

type Flyer = (typeof flyers)[number];

function PhoneFlyer({
  flyer,
}: {
  flyer: Flyer;
}) {
  if (flyer.type === 'dark') {
    return (
      <div
        className="
          relative
          flex
          h-full
          flex-col
          justify-between
          overflow-hidden
          bg-[var(--ink)]
          p-5
          text-white
        "
      >
        <div
          className="
            absolute
            -right-12
            -top-12
            h-32
            w-32
            rounded-full
            border
            border-white/10
          "
        />

        <p
          className="
            relative
            z-10
            text-[8px]
            font-bold
            tracking-[0.14em]
            text-white/55
          "
        >
          {flyer.eyebrow}
        </p>

        <div className="relative z-10">
          <p
            className="
              max-w-[210px]
              text-[18px]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
            "
          >
            {flyer.title}
          </p>

          <p
            className="
              mt-2
              max-w-[220px]
              text-[8px]
              leading-relaxed
              text-white/55
            "
          >
            {flyer.subtitle}
          </p>
        </div>
      </div>
    );
  }

  if (flyer.type === 'light') {
    return (
      <div
        className="
          relative
          flex
          h-full
          flex-col
          justify-between
          overflow-hidden
          bg-[var(--blue-soft)]
          p-5
        "
      >
        <div
          className="
            absolute
            right-5
            top-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white
            text-[var(--blue)]
          "
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>

        <p
          className="
            text-[8px]
            font-bold
            tracking-[0.14em]
            text-[var(--blue)]
          "
        >
          {flyer.eyebrow}
        </p>

        <div>
          <p
            className="
              max-w-[220px]
              text-[18px]
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-[var(--ink)]
            "
          >
            {flyer.title}
          </p>

          <p
            className="
              mt-2
              max-w-[220px]
              text-[8px]
              leading-relaxed
              text-[var(--muted)]
            "
          >
            {flyer.subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        relative
        flex
        h-full
        flex-col
        justify-between
        overflow-hidden
        bg-[var(--blue)]
        p-5
        text-white
      "
    >
      <div
        className="
          absolute
          -right-10
          -top-14
          h-36
          w-36
          rounded-full
          border
          border-white/20
        "
      />

      <div
        className="
          absolute
          right-2
          top-2
          h-20
          w-20
          rounded-full
          bg-white/[0.07]
        "
      />

      <p
        className="
          relative
          z-10
          text-[8px]
          font-bold
          tracking-[0.14em]
          text-white/65
        "
      >
        {flyer.eyebrow}
      </p>

      <div className="relative z-10">
        <p
          className="
            max-w-[210px]
            text-[18px]
            font-bold
            leading-[1.05]
            tracking-[-0.04em]
          "
        >
          {flyer.title}
        </p>

        <p
          className="
            mt-2
            max-w-[220px]
            text-[8px]
            leading-relaxed
            text-white/65
          "
        >
          {flyer.subtitle}
        </p>
      </div>
    </div>
  );
}