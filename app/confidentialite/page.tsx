import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Workless',
  description: 'Comment Workless collecte, utilise et protège vos données personnelles.',
}

export default function ConfidentialitePage() {
  return (
    <>
      <Nav />
      <main className="bg-[#111111] min-h-screen pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-8">
            Politique de confidentialité
          </span>
          <h1 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-12">
            Vos données nous appartiennent pas.
          </h1>

          <div className="space-y-10 font-inter text-neutral text-sm leading-relaxed">
            <section>
              <h2 className="font-grotesk font-semibold text-surface text-lg mb-4">Qui collecte vos données ?</h2>
              <p>
                Workless collecte les informations que vous soumettez via le formulaire de diagnostic.
                Ces données sont utilisées uniquement pour vous recontacter dans le cadre de votre demande.
              </p>
            </section>

            <section>
              <h2 className="font-grotesk font-semibold text-surface text-lg mb-4">Quelles données sont collectées ?</h2>
              <ul className="space-y-2">
                {[
                  'Prénom et adresse email',
                  'Informations sur votre secteur et la taille de votre équipe',
                  'Description de vos besoins en automatisation',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-grotesk font-semibold text-surface text-lg mb-4">Comment sont-elles utilisées ?</h2>
              <p>
                Vos données servent uniquement à analyser votre demande et à vous envoyer une réponse personnalisée.
                Elles ne sont pas revendues, partagées avec des tiers, ni utilisées à des fins commerciales tierces.
              </p>
            </section>

            <section>
              <h2 className="font-grotesk font-semibold text-surface text-lg mb-4">Durée de conservation</h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 12 mois.
                Passé ce délai, elles sont supprimées.
              </p>
            </section>

            <section>
              <h2 className="font-grotesk font-semibold text-surface text-lg mb-4">Vos droits (RGPD)</h2>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="space-y-2">
                {[
                  'Droit d\'accès à vos données',
                  'Droit de rectification',
                  'Droit à l\'effacement ("droit à l\'oubli")',
                  'Droit d\'opposition au traitement',
                  'Droit à la portabilité',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous par email.
              </p>
            </section>

            <section>
              <h2 className="font-grotesk font-semibold text-surface text-lg mb-4">Cookies</h2>
              <p>
                Ce site n&apos;utilise pas de cookies de tracking tiers. Aucune donnée de navigation n&apos;est transmise
                à des plateformes publicitaires ou d&apos;analyse.
              </p>
            </section>

            <p className="text-neutral/40 text-xs border-t border-white/[0.06] pt-8">
              Dernière mise à jour : mars 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
