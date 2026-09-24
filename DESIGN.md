# Design — Stripwork « L'annuaire suisse »

Concept : avant il fallait être dans l'annuaire, aujourd'hui en tête de Google. L'annuaire (rubriques, lignes à points de suite, folios, onglets de tranche) est exécuté en style suisse : blanc, encre, filets fins, un surligneur jaune. (v1 « annuaire jaune » abandonnée le 2026-09-25 : trop vintage, fatigante à l'œil.)

## Palette (tokens `app/globals.css`)

| Token | Valeur | Rôle |
|---|---|---|
| `--bg` | `#ffffff` | Fond principal |
| `--panel` | `#f4f4f1` | Bandes de rythme (services, prix, FAQ) |
| `--ink` | `#111111` | Texte, filets, une seule bande sombre (réalisations, CTA final, pied) |
| `--ink-2` / `--ink-soft` | `#3f3f3f` / `#6b6b6b` | Texte secondaire |
| `--line` | `#e2e2de` | Filets fins |
| `--hl` | `#ffe24a` | Surligneur : entrée active, étape en cours, survols, prix, focus |
| `--ok` | `#12a150` | « en ligne » (scène uniquement) |
| `--danger` | `#b42318` | Erreurs de formulaire uniquement |

## Typographie

- **Geist** 800, interlettrage -0.045 à -0.055em pour les titres ; 400/500 pour le texte. Casse normale, jamais de capitales forcées.
- **Geist Mono** : positions, prix unitaires, folios, fil d'Ariane, téléphones.

## Composants

- **Scène signature** (`components/SceneAnnuaire.tsx`) : une page d'annuaire, une entrée fictive. `--p` 0→1 au scroll → `--s1…--s6`. Ligne perdue → surlignée en jaune (audit) → encart (design) → site (mise en ligne) → position 27→1 (SEO/Ads) → appel entrant. Barre d'étapes cliquable + Rejouer. Sans JS / mouvement réduit : état final figé, étapes en liste.
- **Leader** : ligne d'annuaire nom … points de conduite … valeur.
- **Encart** : réalisation encadrée (capture + métrique surlignée).
- **Offres** : grille de 3 annonces, Signature en encre. **Abonnements** : lignes séparées de la grille.
- **Carte de parrainage** : 5 cases tamponnées -10 → -50 %.
- **Onglets de tranche** (desktop ≥1180 px) : index à pouce fixé à droite, rubrique active en encre, survol surligné.
- **Tête de page** : fil d'Ariane + folio « p. N ».

## Règles

- Rayons 4–6 px max, filets 1 px, une ombre douce seulement sur la scène et au survol des encarts, pas d'emoji ni de glyphes comme icônes (SVG maison `components/Icons.tsx`).
- Mobile : hero + scène + étapes tiennent dans 100svh ; 0 débordement de 320 à 430 px (`:where()` minmax(0,1fr) sur les grilles).
