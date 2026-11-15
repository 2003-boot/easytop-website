
import { ArrowLeft, FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Présentation du service',
    paragraphs: [
      "EasyTop est une plateforme de services mobiles exploitée par SkyRecharge, en Côte d’Ivoire.",
      "Elle permet notamment aux utilisateurs d’acheter des unités téléphoniques, des pass Internet et des pass appel auprès des opérateurs pris en charge.",
      "Les présentes conditions définissent les règles générales d’utilisation de la plateforme EasyTop et de ses services.",
    ],
  },
  {
    title: '2. Acceptation des conditions',
    paragraphs: [
      "En créant un compte, en accédant à la plateforme ou en utilisant ses services, l’utilisateur reconnaît avoir pris connaissance des présentes conditions et les accepter.",
      "L’utilisateur qui n’accepte pas ces conditions doit s’abstenir d’utiliser les services concernés.",
    ],
  },
  {
    title: '3. Création et sécurité du compte',
    paragraphs: [
      "L’utilisateur s’engage à fournir des informations exactes et à maintenir ses coordonnées à jour.",
      "Il est responsable de la confidentialité de ses identifiants, de ses codes de vérification et des dispositifs de sécurité associés à son compte.",
      "Toute utilisation suspecte ou tout accès non autorisé doit être signalé rapidement au support EasyTop.",
    ],
  },
  {
    title: '4. Commandes et recharges',
    paragraphs: [
      "Avant de confirmer une commande, l’utilisateur doit vérifier le numéro de téléphone du bénéficiaire, l’opérateur, le service sélectionné et le montant à payer.",
      "Une erreur dans les informations fournies peut entraîner une recharge vers un mauvais numéro ou un échec de traitement.",
      "La disponibilité des services dépend notamment des opérateurs, des partenaires techniques et des conditions de fonctionnement du réseau.",
      "EasyTop ne garantit pas un délai identique pour toutes les commandes.",
    ],
  },
  {
    title: '5. Tarifs et paiements',
    paragraphs: [
      "Les prix et les éventuels frais de service applicables à une commande sont présentés à l’utilisateur avant sa confirmation.",
      "L’utilisateur doit vérifier le montant total affiché avant de procéder au paiement.",
      "Les paiements peuvent être traités par des prestataires tiers. Leur disponibilité dépend de leurs propres systèmes et conditions d’utilisation.",
      "EasyTop peut modifier ses tarifs pour les commandes futures. Une modification tarifaire ne s’applique pas rétroactivement à une commande déjà confirmée.",
    ],
  },
  {
    title: '6. Échecs, annulations et remboursements',
    paragraphs: [
      "En cas d’échec de commande ou de difficulté de livraison, l’utilisateur peut contacter le support EasyTop afin de demander une vérification.",
      "Un remboursement n’est pas nécessairement automatique. Chaque situation peut nécessiter un contrôle du paiement et de l’état réel de la commande.",
      "Lorsqu’un remboursement est justifié, ses modalités et son délai dépendent notamment du moyen de paiement utilisé et des vérifications nécessaires.",
      "Une recharge correctement exécutée vers le numéro indiqué par l’utilisateur ne peut pas être considérée comme annulable de plein droit.",
      "Ces dispositions s’appliquent sous réserve des droits impératifs reconnus aux consommateurs par la réglementation applicable.",
    ],
  },
  {
    title: '7. Utilisation autorisée',
    paragraphs: [
      "L’utilisateur s’engage à utiliser EasyTop conformément à la législation applicable et à ne pas détourner ses fonctionnalités.",
      "Sont notamment interdits les tentatives de fraude, l’utilisation de moyens de paiement non autorisés, l’usurpation d’identité et les tentatives d’accès non autorisé aux systèmes.",
      "EasyTop peut prendre des mesures de protection proportionnées en cas de suspicion sérieuse d’activité frauduleuse ou abusive, sous réserve de la réglementation applicable.",
    ],
  },
  {
    title: '8. Services EasyTop Agent',
    paragraphs: [
      "EasyTop peut proposer une application distincte destinée aux cabinistes et agents partenaires.",
      "L’accès à cette activité peut être soumis à des conditions particulières, notamment la vérification de l’identité professionnelle, des lignes utilisées et des capacités techniques nécessaires.",
      "Les conditions commerciales et opérationnelles propres aux agents peuvent faire l’objet d’un accord distinct.",
    ],
  },
  {
    title: '9. Disponibilité et responsabilité',
    paragraphs: [
      "EasyTop s’efforce d’assurer la disponibilité et le bon fonctionnement de ses services.",
      "Des interruptions peuvent toutefois survenir en raison d’opérations de maintenance, de problèmes de réseau ou de défaillances de partenaires techniques.",
      "La responsabilité de SkyRecharge est appréciée conformément aux dispositions légales applicables. Aucune clause des présentes conditions ne vise à exclure une responsabilité qui ne pourrait légalement être exclue.",
    ],
  },
  {
    title: '10. Données personnelles',
    paragraphs: [
      "Les données personnelles collectées dans le cadre de l’utilisation d’EasyTop sont traitées conformément à la Politique de confidentialité de la plateforme et à la réglementation applicable.",
      "L’utilisateur est invité à consulter cette politique pour connaître les catégories de données traitées, leurs finalités et les modalités d’exercice de ses droits.",
    ],
  },
  {
    title: '11. Modification des conditions',
    paragraphs: [
      "SkyRecharge peut faire évoluer les présentes conditions pour tenir compte de modifications techniques, commerciales ou réglementaires.",
      "Lorsqu’une modification importante le nécessite, les utilisateurs en seront informés par un moyen approprié avant son entrée en vigueur, conformément à la réglementation applicable.",
    ],
  },
  {
    title: '12. Réclamations et contact',
    paragraphs: [
      "Pour toute question concernant une commande, un paiement ou l’utilisation des services, l’utilisateur peut contacter le support EasyTop.",
      "Contact WhatsApp : +225 01 61 30 07 16.",
      "Les présentes conditions sont soumises au droit applicable en Côte d’Ivoire, sous réserve des règles impératives de compétence et de protection des consommateurs.",
    ],
  },
];

export default function TermsOfUse() {
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
            <FileText className="h-4 w-4 text-[var(--blue)]" />
            Informations juridiques
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.06em]">
            Conditions
            <br />
            <span className="text-[var(--blue)]">
              d'utilisation.
            </span>
          </h1>

          <p className="mt-7 max-w-[680px] text-base leading-8 text-[var(--muted)]">
            Ce document présente les règles générales
            applicables à l'utilisation des services EasyTop,
            exploités par SkyRecharge.
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

        {/* Contenu juridique */}
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
              </div>
            </section>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-14 max-w-[850px] rounded-[28px] bg-[var(--blue-pale)] p-7 sm:p-10">
          <h2 className="text-xl font-bold">
            Une question concernant ces conditions ?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            Notre équipe est disponible pour vous orienter
            concernant les services EasyTop.
          </p>

          <a
            href="https://wa.me/2250161300716"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-[var(--blue)] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Contacter le support
          </a>
        </div>

        <p className="mt-10 max-w-[850px] text-xs leading-6 text-[var(--faint)]">
          EasyTop est un produit de SkyRecharge.
          Ce document constitue une version provisoire
          susceptible d'être complétée avant sa validation
          juridique définitive.
        </p>
      </div>
    </main>
  );
}
