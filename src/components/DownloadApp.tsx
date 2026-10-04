import { ArrowDown, Bell, Smartphone, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import easytopIcon from '../assets/icon.png';

export default function DownloadApp() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(iconRef.current, {
        y: -12,
        rotate: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('[data-orbit-dot]', {
        scale: 1.5,
        opacity: 0.35,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.35,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="telecharger"
      className="
        relative
        overflow-hidden
        bg-[var(--ink)]
        py-24
        text-white
        sm:py-32
        lg:py-40
      "
    >
      {/* ===============================================
          BACKGROUND
      ================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[rgba(21,151,245,0.13)]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:60px_60px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]
        "
      />

      <div className="page-container relative z-10">

        {/* ===============================================
            TOP LABEL
        ================================================ */}

        <div
          className="
            mb-16
            flex
            items-center
            justify-between
            border-b
            border-white/10
            pb-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[var(--blue)]
                shadow-[0_0_0_6px_rgba(21,151,245,0.12)]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-white/50
              "
            >
              L’application EasyTop
            </span>
          </div>

          <span
            className="
              hidden
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white/30
              sm:block
            "
          >
            Bientôt disponible
          </span>
        </div>

        {/* ===============================================
            MAIN
        ================================================ */}

        <div
          className="
            grid
            gap-20
            lg:grid-cols-[1fr_0.85fr]
            lg:items-center
          "
        >
          {/* =============================================
              CONTENT
          ============================================== */}

          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
              "
            >
              <Sparkles
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
                  tracking-[0.14em]
                  text-white/60
                "
              >
                Une app. Vos services.
              </span>
            </div>

            <h2
              className="
                mt-8
                max-w-[820px]
                text-[clamp(3.8rem,9vw,9rem)]
                font-bold
                leading-[0.82]
                tracking-[-0.075em]
                text-white
              "
            >
              Easy
              <span className="text-[var(--blue)]">
                Top.
              </span>
            </h2>

            <p
              className="
                mt-10
                max-w-[590px]
                text-[clamp(1.4rem,2.6vw,2.4rem)]
                font-semibold
                leading-[1.25]
                tracking-[-0.035em]
                text-white/80
              "
            >
              Vos services mobiles,
              <br />

              <span className="text-white/35">
                toujours à portée de main.
              </span>
            </p>

            <p
              className="
                mt-7
                max-w-[520px]
                text-[14px]
                font-medium
                leading-[1.9]
                text-white/50
              "
            >
              Achat d’unités, pass internet, pass appel et
              une expérience pensée pour simplifier votre
              quotidien mobile.
            </p>

            {/* ===========================================
                AVAILABILITY
            ============================================ */}

            <div
              className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  px-5
                  py-3.5
                "
              >
                <Bell
                  className="
                    h-4
                    w-4
                    text-[var(--blue)]
                  "
                />

                <span
                  className="
                    text-sm
                    font-bold
                    text-white
                  "
                >
                  Bientôt disponible
                </span>
              </div>

              <a
                href="#accueil"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  px-2
                  py-3
                  text-xs
                  font-bold
                  text-white/50
                  transition-colors
                  hover:text-white
                "
              >
                Revoir EasyTop

                <ArrowDown
                  className="
                    h-3.5
                    w-3.5
                    rotate-180
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>

            {/* ===========================================
                SERVICES LINE
            ============================================ */}

            <div
              className="
                mt-16
                flex
                flex-wrap
                gap-x-8
                gap-y-3
                border-t
                border-white/10
                pt-7
              "
            >
              <MiniFeature text="Unités" />
              <MiniFeature text="Internet" />
              <MiniFeature text="Appels" />
              <MiniFeature text="Support" />
            </div>
          </div>

          {/* =============================================
              VISUAL
          ============================================== */}

          <div
            className="
              relative
              flex
              min-h-[520px]
              items-center
              justify-center
              sm:min-h-[650px]
            "
          >
            {/* orbit 1 */}

            <div
              className="
                absolute
                h-[440px]
                w-[440px]
                rounded-full
                border
                border-white/[0.08]
                sm:h-[560px]
                sm:w-[560px]
              "
            />

            {/* orbit 2 */}

            <div
              className="
                absolute
                h-[340px]
                w-[340px]
                rounded-full
                border
                border-dashed
                border-white/[0.10]
                sm:h-[430px]
                sm:w-[430px]
              "
            />

            {/* orbit dot */}

            <span
              data-orbit-dot
              className="
                absolute
                right-[8%]
                top-[23%]
                h-2.5
                w-2.5
                rounded-full
                bg-[var(--blue)]
                shadow-[0_0_0_10px_rgba(21,151,245,0.10)]
              "
            />

            <span
              data-orbit-dot
              className="
                absolute
                bottom-[19%]
                left-[12%]
                h-2
                w-2
                rounded-full
                bg-white/60
              "
            />

            {/* giant glow */}

            <div
              className="
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                bg-[var(--blue)]
                opacity-[0.13]
                blur-[75px]
                sm:h-[380px]
                sm:w-[380px]
              "
            />

            {/* ===========================================
                ICON
            ============================================ */}

            <div
              ref={iconRef}
              className="
                relative
                z-20
                w-[250px]
                sm:w-[330px]
                lg:w-[370px]
              "
            >
              <div
                className="
                  absolute
                  inset-x-[10%]
                  -bottom-12
                  h-24
                  rounded-[50%]
                  bg-black/50
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[48px]
                  border-[8px]
                  border-white/[0.08]
                  bg-white/[0.06]
                  p-[5px]
                  shadow-[0_45px_120px_rgba(0,0,0,0.35)]
                  backdrop-blur-xl
                "
              >
                <img
                  src={easytopIcon}
                  alt="Application EasyTop"
                  className="
                    aspect-square
                    w-full
                    rounded-[37px]
                    object-cover
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_45%)]
                  "
                />
              </div>
            </div>

            {/* ===========================================
                FLOATING ELEMENT 1
            ============================================ */}

            <div
              className="
                absolute
                left-[0%]
                top-[20%]
                z-30
                hidden
                rotate-[-6deg]
                rounded-[20px]
                border
                border-white/10
                bg-white/[0.07]
                px-4
                py-3
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
                sm:block
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[var(--blue)]
                  "
                >
                  <Smartphone className="h-4 w-4 text-white" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-white/35
                    "
                  >
                    EasyTop
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      font-bold
                      text-white
                    "
                  >
                    Simple au quotidien
                  </p>
                </div>
              </div>
            </div>

            {/* ===========================================
                FLOATING ELEMENT 2
            ============================================ */}

            <div
              className="
                absolute
                bottom-[17%]
                right-[0%]
                z-30
                hidden
                rotate-[5deg]
                rounded-full
                border
                border-white/10
                bg-white/[0.07]
                px-5
                py-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.13em]
                text-white/60
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
                sm:block
              "
            >
              FCFA · Mobile · EasyTop
            </div>
          </div>
        </div>

        {/* ===============================================
            BOTTOM
        ================================================ */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white/30
            "
          >
            EasyTop · Côte d’Ivoire
          </p>

          <p
            className="
              text-xs
              font-medium
              text-white/40
            "
          >
            Les liens de téléchargement seront ajoutés lors
            de la publication de l’application.
          </p>
        </div>
      </div>
    </section>
  );
}

function MiniFeature({
  text,
}: {
  text: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-2
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

      <span
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-white/40
        "
      >
        {text}
      </span>
    </div>
  );
}