// Données partagées — catalogue des pages automatisation
// Importé par Nav.tsx et les pages individuelles

export type CatalogueEntry = {
  href: string
  label: string
  desc: string
}

export const CATALOGUE: CatalogueEntry[] = [
  {
    href: '/automatisation-leads',
    label: 'Automatisation leads',
    desc: "Convertissez vos leads avant qu'ils refroidissent — réponse en moins de 2 minutes",
  },
  {
    href: '/traitement-factures-automatique',
    label: 'Traitement factures',
    desc: 'Zéro saisie manuelle — extraction et injection automatiques dans votre ERP',
  },
  {
    href: '/relance-commerciale-automatique',
    label: 'Relance commerciale',
    desc: '100% des prospects suivis selon des séquences structurées, sans intervention',
  },
  {
    href: '/reactivation-clients-automatique',
    label: 'Réactivation clients',
    desc: 'CA additionnel sur votre base existante — sans budget acquisition supplémentaire',
  },
  {
    href: '/reporting-automatique',
    label: 'Reporting automatique',
    desc: 'Décisions sur données fraîches chaque matin — sans compilation manuelle',
  },
]

// Retourne les 4 autres entrées (cross-links) pour une page donnée
export function getCrossLinks(currentHref: string): CatalogueEntry[] {
  return CATALOGUE.filter(e => e.href !== currentHref)
}
