# Design — Stripwork « L'annuaire »

Concept : avant il fallait être dans l'annuaire, aujourd'hui en tête de Google. Le site est une page d'annuaire : rubriques condensées, colonnes à filets, encarts publicitaires, onglets de tranche.

## Palette (tokens `app/globals.css`)

| Token | Valeur | Rôle |
|---|---|---|
| `--yellow` | `#f3cd15` | Couverture : hero, en-tête, bandes « prix » |
| `--paper` | `#f8e68a` | Pages intérieures jaunes, formulaires |
| `--white` | `#f7f6f0` | « Pages blanches » : contenu courant |
| `--ink` | `#15130f` | Encre, bandes sombres (preuves, CTA final, pied) |
| `--ink-2` / `--ink-soft` | `#3a3222` / `#5a4f36` | Texte secondaire teinté (jamais gris) |
| `--red` | `#cf2218` | Accent rare : stylo qui entoure, survols, focus, tampons |

Rythme : jaune → blanc → papier → encre → blanc → jaune → papier → encre. Filets `2px` (règle) et `1px` (trait), aucun arrondi sauf tampons.

## Typographie

- **Anybody** (variable, axe `wdth`) — titres. Rubriques `wdth 58–70` en capitales, encarts plus larges ; au survol de l'index métier, la largeur passe de 60 à 100.
- **Schibsted Grotesk** — texte courant.
- **Martian Mono** — téléphones, prix unitaires, folios, fil d'Ariane, notes.

Paire réservée à Stripwork : ne pas la réutiliser pour un client.

## Composants

- **Scène signature** (`components/SceneAnnuaire.tsx`) : une page d'annuaire, une entrée fictive. `--p` 0→1 au scroll → `--s1…--s6`. Ligne perdue → entourée au stylo (audit) → encart (design) → site (mise en ligne) → position 27→1 (SEO/Ads) → appel entrant. Barre d'étapes cliquable + Rejouer. Sans JS / mouvement réduit : état final figé, étapes en liste.
- **Leader** : ligne d'annuaire nom … points de conduite … valeur.
- **Encart** : réalisation encadrée (capture + métrique rouge).
- **Offres** : grille de 3 annonces, Signature en encre. **Abonnements** : lignes séparées de la grille.
- **Carte de parrainage** : 5 cases tamponnées -10 → -50 %.
- **Onglets de tranche** (desktop ≥1180 px) : index à pouce fixé à droite, rubrique active en encre.
- **Tête de page** : fil d'Ariane + folio « p. N ».

## Règles

- Pas de cartes arrondies, pas d'ombres décoratives (une ombre douce seulement sur encarts/scène), pas d'emoji ni de glyphes comme icônes (SVG maison `components/Icons.tsx`).
- Mobile : hero + scène + étapes tiennent dans 100svh ; 0 débordement de 320 à 430 px (`:where()` minmax(0,1fr) sur les grilles).
