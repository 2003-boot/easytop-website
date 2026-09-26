import {
  ArrowUpRight,
  Building2,
  Megaphone,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/2250161300716?text=Bonjour%20EasyTop%2C%20je%20souhaite%20obtenir%20des%20informations%20concernant%20les%20offres%20publicitaires%20et%20les%20possibilit%C3%A9s%20de%20partenariat%20sur%20votre%20plateforme.';

const opportunities = [
  {
    icon: Building2,
    number: '01',
    title: 'Partenariat',
    description:
      'Vous souhaitez explorer une collaboration avec EasyTop ? Échangeons autour de votre projet.',
  },
  {
    icon: Megaphone,
    number: '02',
    title: 'Publicité',
    description:
      'Vous souhaitez présenter votre activité dans l’espace publicitaire EasyTop ? Parlons de votre campagne.',
  },
];

export default function Partnership() {
  return (
    <section
      id="partenariat"
      className="
        section
        relative
        overflow-hidden
        bg-white
      "
    >
      <div className="page-container">

        {/* =================================================
            TOP
        ================================================== */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.75fr_1.25fr]
            lg:items-start
          "
        >
          <div className="lg:sticky lg:top-[120px]">
            <div className="eyebrow mb-5">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[var(--blue)]
                "
              />

              Construisons ensemble
            </div>

            <p
              className="
                max-w-[360px]
                text-[15px]
                font-medium
                leading-[1.8]
                text-[var(--muted)]
              "
            >
              Entreprises, marques et partenaires peuvent
              entrer directement en contact avec EasyTop
              pour discuter d’une collaboration.
            </p>
          </div>

          {/* ===============================================
              BIG MESSAGE
          ================================================ */}

          <div>
            <h2
              className="
                max-w-[900px]
                text-[clamp(3rem,7vw,7.4rem)]
                font-bold
                leading-[0.9]
                tracking-[-0.065em]
                text-[var(--ink)]
              "
            >
              Une idée.
              <br />

              Une marque.
              <br />

              <span className="text-[var(--blue)]">
                Une conversation.
              </span>
            </h2>

            <div
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--blue-soft)]
                  text-[var(--blue)]
                "
              >
                <MessageCircle className="h-4 w-4" />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[var(--faint)]
                  "
                >
                  Canal de contact
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-bold
                    text-[var(--ink)]
                  "
                >
                  WhatsApp Business
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            OPPORTUNITIES
        ================================================== */}

        <div
          className="
            mt-24
            grid
            border-y
            border-[var(--line)]
            md:grid-cols-2
          "
        >
          {opportunities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className={`
                  group
                  relative
                  min-h-[360px]
                  overflow-hidden
                  py-10
                  transition-colors
                  duration-500
                  md:p-10

                  ${
                    index === 0
                      ? 'border-b border-[var(--line)] md:border-b-0 md:border-r'
                      : ''
                  }
                `}
              >
                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.15em]
                      text-[var(--faint)]
                    "
                  >
                    {item.number}
                  </span>

                  <div
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
                      duration-500
                      group-hover:scale-110
                      group-hover:bg-[var(--blue)]
                      group-hover:text-white
                    "
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                </div>

                <div
                  className="
                    relative
                    z-10
                    mt-24
                  "
                >
                  <h3
                    className="
                      text-[clamp(2rem,4vw,4rem)]
                      font-bold
                      leading-none
                      tracking-[-0.055em]
                      text-[var(--ink)]
                    "
                  >
                    {item.title}.
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[440px]
                      text-sm
                      font-medium
                      leading-[1.8]
                      text-[var(--muted)]
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* hover decoration */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-[180px]
                    -right-[180px]
                    h-[360px]
                    w-[360px]
                    rounded-full
                    border
                    border-[rgba(21,151,245,0.10)]
                    transition-transform
                    duration-700
                    group-hover:scale-125
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-[115px]
                    -right-[115px]
                    h-[230px]
                    w-[230px]
                    rounded-full
                    border
                    border-[rgba(21,151,245,0.08)]
                    transition-transform
                    duration-700
                    group-hover:scale-125
                  "
                />
              </div>
            );
          })}
        </div>

        {/* =================================================
            WHATSAPP PORTAL
        ================================================== */}

        <div
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[42px]
            bg-[var(--blue)]
            px-7
            py-12
            sm:px-12
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* decorative circles */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[100px]
              -top-[180px]
              h-[460px]
              w-[460px]
              rounded-full
              border
              border-white/15
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[20px]
              -top-[100px]
              h-[300px]
              w-[300px]
              rounded-full
              border
              border-white/15
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[150px]
              left-[18%]
              h-[330px]
              w-[330px]
              rounded-full
              bg-white/[0.05]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-12
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-white/70
                "
              >
                <Sparkles className="h-4 w-4" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                  "
                >
                  Parlons de votre projet
                </span>
              </div>

              <h3
                className="
                  mt-6
                  max-w-[780px]
                  text-[clamp(2.5rem,6vw,6rem)]
                  font-bold
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-white
                "
              >
                Tout peut commencer
                <br />

                par un simple
                <br />

                message.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[570px]
                  text-[14px]
                  font-medium
                  leading-[1.8]
                  text-white/70
                "
              >
                Présentez-nous votre entreprise, votre
                campagne ou votre idée de partenariat.
                La conversation se poursuit directement
                sur WhatsApp Business.
              </p>
            </div>

            {/* CTA intentionally WHITE here */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                min-w-[230px]
                items-center
                justify-between
                gap-8
                rounded-full
                bg-white
                px-6
                py-4
                text-sm
                font-bold
                text-[var(--ink)]
                shadow-[0_20px_50px_rgba(0,80,150,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_25px_60px_rgba(0,70,140,0.25)]
              "
            >
              Écrire à EasyTop

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--blue-soft)]
                  text-[var(--blue)]
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

        {/* =================================================
            TRANSITION TO APP
        ================================================== */}

        <div
          className="
            mt-24
            flex
            justify-center
          "
        >
          <div
            className="
              flex
              max-w-[650px]
              flex-col
              items-center
              text-center
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[var(--blue)]
              "
            />

            <p
              className="
                mt-6
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[var(--faint)]
              "
            >
              Et pour les utilisateurs ?
            </p>

            <p
              className="
                mt-4
                text-[clamp(1.8rem,4vw,3.5rem)]
                font-bold
                leading-[1.05]
                tracking-[-0.05em]
                text-[var(--ink)]
              "
            >
              EasyTop tient dans
              <span className="text-[var(--blue)]">
                {' '}votre poche.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}