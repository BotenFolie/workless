// Données partagées — catalogue des pages automatisation
// Importé par Nav.tsx et les pages individuelles

export type CatalogueEntry = {
  href: string
  label: string
  desc: string
}

export const CATALOGUE: CatalogueEntry[] = [
  {
    href: '/automatisation-reactivite-leads',
    label: 'Réactivité leads',
    desc: 'Répondre en moins de 2 minutes au lieu de plusieurs heures',
  },
  {
    href: '/automatisation-traitement-factures-documents',
    label: 'Traitement documents',
    desc: 'Zéro saisie manuelle, extraction et injection automatiques',
  },
  {
    href: '/automatisation-relances-prospects',
    label: 'Relances prospects',
    desc: '100% des leads suivis selon des séquences structurées',
  },
  {
    href: '/automatisation-reactivation-base-clients',
    label: 'Réactivation clients',
    desc: 'CA additionnel sans budget acquisition supplémentaire',
  },
  {
    href: '/automatisation-reporting-interne',
    label: 'Reporting interne',
    desc: 'Décisions sur données fraîches, sans compilation manuelle',
  },
]

// Retourne les 4 autres entrées (cross-links) pour une page donnée
export function getCrossLinks(currentHref: string): CatalogueEntry[] {
  return CATALOGUE.filter(e => e.href !== currentHref)
}
