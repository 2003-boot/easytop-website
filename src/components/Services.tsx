import {
  ArrowUpRight,
  PhoneCall,
  Signal,
  Smartphone,
} from 'lucide-react';

const services = [
  {
    number: '01',
    title: "Achat d'unités",
    description:
      "Rechargez votre crédit mobile en quelques instants, pour vous-même ou pour un proche.",
    icon: Smartphone,
    className:
      'lg:col-span-7 lg:row-span-2 min-h-[430px]',
    variant: 'primary',
  },
  {
    number: '02',
    title: 'Pass Internet',
    description:
      "Choisissez le forfait qui vous convient et restez connecté quand vous en avez besoin.",
    icon: Signal,
    className:
      'lg:col-span-5 min-h-[250px]',
    variant: 'soft',
  },
  {
    number: '03',
    title: 'Pass Appel',
    description:
      "Accédez simplement aux offres d’appels disponibles auprès de votre opérateur.",
    icon: PhoneCall,
    className:
      'lg:col-span-5 min-h-[250px]',
    variant: 'dark',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section overflow-hidden bg-white"
    >
      <div className="page-container">

        {/* =============================================
            INTRODUCTION
        ============================================== */}

        <div
          className="
            mb-16
            grid
            gap-8
            lg:grid-cols-[1.25fr_0.75fr]
            lg:items-end
          "
        >
          <div>
            <div className="eyebrow mb-5">
              <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />

              L’essentiel, au même endroit
            </div>

            <h2
              className="
                section-title
                max-w-[800px]
                text-[var(--ink)]
              "
            >
              Votre téléphone
              <br />

              <span className="text-[var(--faint)]">
                ne devrait jamais
              </span>

              <br />

              vous ralentir.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p
              className="
                max-w-[430px]
                text-[15px]
                font-medium
                leading-[1.8]
                text-[var(--muted)]
                lg:ml-auto
              "
            >
              EasyTop rassemble les services mobiles que
              vous utilisez au quotidien dans une expérience
              simple, claire et rapide.
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                gap-3
                lg:justify-end
              "
            >
              <span
                className="
                  h-[1px]
                  w-10
                  bg-[var(--line)]
                "
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.13em]
                  text-[var(--faint)]
                "
              >
                Trois services essentiels
              </span>
            </div>
          </div>
        </div>

        {/* =============================================
            SERVICE COMPOSITION
        ============================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            lg:grid-cols-12
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              {...service}
            />
          ))}
        </div>

        {/* =============================================
            BOTTOM STATEMENT
        ============================================== */}

        <div
          className="
            mt-20
            flex
            flex-col
            gap-8
            border-t
            border-[var(--line)]
            pt-8
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <p
            className="
              max-w-[680px]
              text-[clamp(1.7rem,3vw,3rem)]
              font-bold
              leading-[1.1]
              tracking-[-0.045em]
              text-[var(--ink)]
            "
          >
            Moins de détours.
            <br />

            <span className="text-[var(--blue)]">
              Plus de simplicité.
            </span>
          </p>

          <a
            href="#transferts"
            className="
              group
              flex
              shrink-0
              items-center
              gap-3
              text-sm
              font-bold
              text-[var(--ink)]
            "
          >
            Et pour vos transferts ?

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[var(--blue-soft)]
                text-[var(--blue)]
                transition-all
                duration-300
                group-hover:rotate-45
                group-hover:bg-[var(--blue)]
                group-hover:text-white
              "
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

/* =========================================================
   SERVICE CARD
   ========================================================= */

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  className: string;
  variant: string;
};

function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  className,
  variant,
}: ServiceCardProps) {
  const isPrimary = variant === 'primary';
  const isDark = variant === 'dark';

  return (
    <article
      className={`
        group
        relative
        overflow-hidden
        rounded-[32px]
        p-7
        transition-transform
        duration-500
        hover:-translate-y-1
        sm:p-9

        ${className}

        ${
          isPrimary
            ? 'bg-[var(--blue)]'
            : isDark
              ? 'bg-[var(--ink)]'
              : 'border border-[var(--line)] bg-[var(--blue-pale)]'
        }
      `}
    >
      {/* Number */}

      <div
        className={`
          relative
          z-20
          flex
          items-center
          justify-between

          ${
            isPrimary || isDark
              ? 'text-white'
              : 'text-[var(--ink)]'
          }
        `}
      >
        <span
          className="
            text-[11px]
            font-bold
            tracking-[0.15em]
            opacity-60
          "
        >
          {number}
        </span>

        <div
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full

            ${
              isPrimary
                ? 'bg-white/15'
                : isDark
                  ? 'bg-white/10'
                  : 'bg-white'
            }
          `}
        >
          <Icon className="h-[18px] w-[18px]" />
        </div>
      </div>

      {/* Content */}

      <div
        className="
          relative
          z-20
          mt-auto
          flex
          h-[calc(100%-44px)]
          flex-col
          justify-end
        "
      >
        {isPrimary && (
          <div
            className="
              pointer-events-none
              absolute
              -right-[80px]
              -top-[100px]
              h-[320px]
              w-[320px]
              rounded-full
              border
              border-white/20
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[210px]
                w-[210px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/20
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[90px]
                w-[90px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/10
              "
            />
          </div>
        )}

        <div className="relative z-20">
          <h3
            className={`
              text-[clamp(2rem,4vw,4.4rem)]
              font-bold
              leading-[0.95]
              tracking-[-0.055em]

              ${
                isPrimary || isDark
                  ? 'text-white'
                  : 'text-[var(--ink)]'
              }
            `}
          >
            {serviceTitle(title)}
          </h3>

          <p
            className={`
              mt-5
              max-w-[440px]
              text-sm
              font-medium
              leading-[1.75]

              ${
                isPrimary || isDark
                  ? 'text-white/70'
                  : 'text-[var(--muted)]'
              }
            `}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Background decorative number */}

      {!isPrimary && (
        <span
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute
            -bottom-9
            -right-2
            text-[150px]
            font-bold
            leading-none
            tracking-[-0.08em]

            ${
              isDark
                ? 'text-white/[0.035]'
                : 'text-[var(--blue)]/[0.045]'
            }
          `}
        >
          {number}
        </span>
      )}

      {/* Small hover line */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          h-[3px]
          w-0
          transition-all
          duration-500
          group-hover:w-full

          ${
            isPrimary
              ? 'bg-white/60'
              : 'bg-[var(--blue)]'
          }
        `}
      />
    </article>
  );
}

function serviceTitle(title: string) {
  if (title === "Achat d'unités") {
    return (
      <>
        Achat
        <br />
        d’unités.
      </>
    );
  }

  if (title === 'Pass Internet') {
    return (
      <>
        Pass
        <br />
        Internet.
      </>
    );
  }

  return (
    <>
      Pass
      <br />
      Appel.
    </>
  );
}