
import { ArrowLeft, LockKeyhole } from 'lucide-react';

const sections = [
  {
    title: '1. Responsable du traitement',
    paragraphs: [
      "EasyTop est une plateforme de services mobiles exploitée par SkyRecharge, en Côte d’Ivoire.",
      "SkyRecharge est responsable des traitements de données personnelles qu’elle détermine dans le cadre de l’exploitation d’EasyTop, sous réserve des responsabilités propres à ses partenaires.",
      "Pour toute question relative à la protection des données, les utilisateurs peuvent contacter le support EasyTop au +225 01 61 30 07 16.",
      "Les coordonnées légales complètes du responsable du traitement seront précisées avant l’adoption de la version définitive de cette politique.",
    ],
  },
  {
    title: '2. Données personnelles concernées',
    paragraphs: [
      "Selon les fonctionnalités utilisées, EasyTop peut traiter les catégories de données suivantes :",
    ],
    items: [
      "Données d’identification et de contact : nom, numéro de téléphone et autres informations communiquées lors de l’inscription.",
      "Données de compte : identifiant utilisateur, paramètres du compte et informations nécessaires à l’authentification.",
      "Données de commande : opérateur, numéro bénéficiaire, service sélectionné, montant, date et statut de la commande.",
      "Données de paiement : moyen de paiement sélectionné, références de transaction et informations nécessaires au suivi du paiement.",
      "Données techniques et de sécurité : informations de connexion, événements de sécurité et données techniques nécessaires au fonctionnement du service.",
      "Données de support : messages et informations communiqués lors des demandes d’assistance.",
      "Données professionnelles des agents : informations nécessaires à la vérification et à la gestion des cabinistes partenaires.",
    ],
  },
  {
    title: '3. Finalités des traitements',
    paragraphs: [
      "Les données personnelles sont utilisées dans la mesure nécessaire aux finalités suivantes :",
    ],
    items: [
      "Créer, gérer et sécuriser les comptes utilisateurs.",
      "Vérifier les numéros de téléphone et authentifier les utilisateurs.",
      "Enregistrer, traiter et suivre les commandes de services mobiles.",
      "Faciliter les paiements et effectuer les rapprochements de transactions.",
      "Assurer le service client et traiter les réclamations.",
      "Prévenir les fraudes, les abus et les accès non autorisés.",
      "Gérer les comptes et les activités des agents partenaires.",
      "Respecter les obligations légales et réglementaires applicables.",
    ],
  },
  {
    title: '4. Fondements des traitements',
    paragraphs: [
      "Les traitements de données personnelles doivent reposer sur un fondement autorisé par la réglementation applicable, notamment la loi ivoirienne relative à la protection des données à caractère personnel.",
      "Selon les circonstances, les données peuvent être nécessaires à l’exécution d’un service demandé, au respect d’une obligation légale ou à une autre finalité légalement autorisée.",
      "Lorsque le consentement est requis, EasyTop doit le recueillir dans les conditions prévues par la réglementation applicable.",
    ],
  },
  {
    title: '5. Paiements et prestataires externes',
    paragraphs: [
      "Certaines opérations peuvent nécessiter l’intervention de prestataires de paiement, d’opérateurs de télécommunications ou de partenaires techniques.",
      "Les informations strictement nécessaires au traitement d’une transaction peuvent être transmises aux partenaires concernés.",
      "EasyTop ne doit pas demander aux utilisateurs de communiquer leurs codes secrets Mobile Money ou leurs mots de passe à un agent de support.",
      "Les prestataires externes peuvent également appliquer leurs propres politiques de confidentialité lorsqu’ils agissent en qualité de responsables de traitement distincts.",
    ],
  },
  {
    title: '6. Partage des données',
    paragraphs: [
      "Les données peuvent être accessibles, dans la limite de leurs missions, aux personnes habilitées de SkyRecharge et aux prestataires nécessaires au fonctionnement des services.",
      "Certaines informations relatives à une commande peuvent être communiquées à un agent chargé de son exécution, dans la mesure nécessaire à cette mission.",
      "Des données peuvent également être communiquées aux autorités compétentes lorsque la loi l’exige.",
      "EasyTop ne présente pas les données personnelles de ses utilisateurs comme un produit destiné à être vendu à des annonceurs.",
    ],
  },
  {
    title: '7. Conservation des données',
    paragraphs: [
      "Les données personnelles doivent être conservées pendant une durée proportionnée à leur finalité et aux obligations légales applicables.",
      "Les informations de compte peuvent être conservées pendant la période nécessaire à la gestion du compte.",
      "Certaines informations de commande, de paiement ou de sécurité peuvent devoir être conservées après la fermeture du compte, notamment pour respecter des obligations légales ou traiter un litige.",
      "Les durées précises de conservation seront définies et documentées avant l’adoption de la version définitive de cette politique.",
    ],
  },
  {
    title: '8. Sécurité des données',
    paragraphs: [
      "SkyRecharge s’engage à mettre en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données personnelles contre les accès non autorisés, la perte, l’altération et la divulgation illicite.",
      "Ces mesures doivent être adaptées à la nature des données, aux risques identifiés et à l’évolution des systèmes.",
      "Aucun système informatique ne pouvant garantir une sécurité absolue, les utilisateurs sont également invités à protéger leurs identifiants et leurs codes de vérification.",
    ],
  },
  {
    title: '9. Droits des utilisateurs',
    paragraphs: [
      "Dans les conditions prévues par la réglementation ivoirienne applicable, les utilisateurs peuvent disposer de droits concernant leurs données personnelles, notamment des droits d’accès, de rectification et d’opposition.",
      "Les demandes d’effacement ou de suppression de compte sont examinées sous réserve des obligations légales de conservation et des autres exceptions applicables.",
      "Pour exercer leurs droits, les utilisateurs peuvent contacter le support EasyTop. Une vérification raisonnable de leur identité peut être nécessaire pour protéger leurs informations.",
    ],
  },
  {
    title: '10. Suppression du compte',
    paragraphs: [
      "L’utilisateur peut demander la suppression de son compte par les moyens mis à disposition dans l’application ou auprès du support.",
      "La suppression du compte n’entraîne pas nécessairement l’effacement immédiat de toutes les données, lorsque certaines informations doivent être conservées pour satisfaire à une obligation légale, assurer la sécurité ou traiter une réclamation.",
      "Les modalités détaillées de suppression et les délais applicables seront précisés dans la version définitive de cette politique.",
    ],
  },
  {
    title: '11. Transferts et hébergement des données',
    paragraphs: [
      "Le fonctionnement d’EasyTop peut nécessiter le recours à des infrastructures techniques ou à des prestataires d’hébergement.",
      "Lorsque des données personnelles font l’objet d’un transfert hors de Côte d’Ivoire, SkyRecharge doit respecter les exigences applicables à ces transferts.",
      "Les pays d’hébergement, les prestataires concernés et les garanties mises en place devront être vérifiés et documentés avant la validation définitive de cette politique.",
    ],
  },
  {
    title: '12. Modifications de la politique',
    paragraphs: [
      "La présente politique peut évoluer afin de refléter les modifications des services EasyTop, de ses traitements de données ou de la réglementation applicable.",
      "En cas de modification importante, les utilisateurs seront informés par un moyen approprié lorsque cela est requis.",
    ],
  },
  {
    title: '13. Contact',
    paragraphs: [
      "Pour toute question relative à la confidentialité ou à l’utilisation des données personnelles, contactez le support EasyTop.",
      "WhatsApp : +225 01 61 30 07 16.",
      "EasyTop est un produit de SkyRecharge, exploité en Côte d’Ivoire.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-[var(--ink)]">
      <div className="page-container pb-24 pt-12 sm:pt-20">
        {/* Retour à l'accueil */}

        <a
          href="/"
          className="
            inline-flex items-center gap-2
            text-sm font-semibold text-[var(--muted)]
            transition-colors hover:text-[var(--blue)]
          "
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </a>

        {/* En-tête */}

        <div className="mt-14 max-w-[850px]">
          <div className="eyebrow mb-6">
            <LockKeyhole className="h-4 w-4 text-[var(--blue)]" />
            Protection des données
          </div>

          <h1
            className="
              text-[clamp(2.5rem,6vw,5rem)]
              font-bold
              leading-[1.05]
              tracking-[-0.06em]
            "
          >
            Politique de
            <br />
            <span className="text-[var(--blue)]">
              confidentialité.
            </span>
          </h1>

          <p className="mt-7 max-w-[680px] text-base leading-8 text-[var(--muted)]">
            Découvrez comment EasyTop traite les données
            personnelles nécessaires au fonctionnement de
            ses services et à la protection de ses utilisateurs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-[var(--blue-soft)] px-4 py-2 text-xs font-semibold text-[var(--blue)]">
              Version provisoire
            </span>

            <span className="rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold text-[var(--muted)]">
              Novembre 2026
            </span>
          </div>
        </div>

        {/* Sections */}

        <div className="mt-16 max-w-[850px] border-t border-[var(--line)]">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-b border-[var(--line)] py-9 sm:py-11"
            >
              <h2 className="text-xl font-bold tracking-[-0.025em] sm:text-2xl">
                {section.title}
              </h2>

              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[15px] leading-[1.9] text-[var(--muted)]"
                  >
                    {paragraph}
                  </p>
                ))}

                {'items' in section && section.items && (
                  <ul className="mt-5 list-disc space-y-3 pl-6">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="pl-1 text-[15px] leading-[1.8] text-[var(--muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Assistance */}

        <div className="mt-14 max-w-[850px] rounded-[28px] bg-[var(--blue-pale)] p-7 sm:p-10">
          <h2 className="text-xl font-bold">
            Une question sur vos données ?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Contactez notre équipe pour obtenir des
            informations ou soumettre une demande
            concernant vos données personnelles.
          </p>

          <a
            href="https://wa.me/2250161300716"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              inline-flex
              items-center
              rounded-full
              bg-[var(--blue)]
              px-6
              py-3
              text-sm
              font-bold
              text-white
              transition-opacity
              hover:opacity-90
            "
          >
            Contacter le support
          </a>
        </div>

        {/* Mention légale */}

        <p className="mt-10 max-w-[850px] text-xs leading-6 text-[var(--faint)]">
          EasyTop est un produit de SkyRecharge.
          Cette politique constitue une version provisoire.
          Elle doit être complétée et validée avant son
          adoption définitive.
        </p>
      </div>
    </main>
  );
}
