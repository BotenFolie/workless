# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router) + TypeScript strict + CSS natif (refonte complète : Tailwind, Framer Motion et Lenis abandonnés). Formulaires : route API Next + Resend. i18n par routes (`/` FR, `/es/` ES) avec hreflang — l'actuel i18n client en localStorage est abandonné (invisible pour Google). Domaine : stripwork.com. Déploiement GitHub → Vercel.

## Users

- **TPE locales** (artisans, chauffagistes, électriciens, paysagistes, restaurateurs, thérapeutes, praticiens bien-être) : n'ont pas de site ou un vieux site qui ne ramène rien ; cherchent « création site internet [métier/ville] » ou « prix site vitrine ». Décident seuls, sensibles au prix et à la confiance.
- **PME B2B** (industrie, services) : refonte d'un site daté, besoin de crédibilité face aux donneurs d'ordre et de demandes de devis qualifiées.
- Deux marchés : France et Espagne (côte méditerranéenne en priorité).

## Product Purpose

Studio qui crée ou refait des sites qui ramènent des clients : design sur mesure, SEO intégré dès la conception, puis Google Ads pour accélérer. Succès = le client reçoit des appels et des demandes de devis, pas seulement « un beau site ».

## Positioning

- Studio de 3 : une directrice artistique + 2 développeurs experts SEO/SEA. Le même trio conçoit le site, le référence et gère les campagnes — pas de sous-traitance, pas de passage de relais entre agence web et agence SEA.
- Chaque site est dessiné pour le métier du client (une scène signature qui raconte le métier), jamais un template.
- Prix d'agence divisés : offre d'entrée à 1 199 € HT site en ligne, SEO technique complet (domaine à la charge du client).
- Parrainage : chaque prospect recommandé qui tient un RDV qualifié = -10 %, jusqu'à 5 prospects = -50 %.

## Operating Context

- Parcours : audit gratuit du site existant → appel → devis → acompte → conception → mise en ligne → (option) SEO continu / Google Ads / forfait hébergement-maintenance.
- Hébergement : forfait mensuel proposé mais non obligatoire ; le client peut héberger à ses frais, accompagnement si besoin.
- Pas d'e-commerce.

## Capabilities and Constraints

- Services : création de site (vitrine, landing page), refonte (dont migration SEO sans perte de trafic), référencement SEO (audit, SEO local, référencement IA), Google Ads (gestion, audit).
- Stack maison Next.js : sites rapides, pas de WordPress ni plugins.
- Tarifs détaillés au-delà de l'offre d'entrée : [À CONFIRMER] (grille en cours d'étude).
- Pas de chiffres de résultat clients (trafic, leads, CA) tant qu'ils ne sont pas fournis.

## Brand Commitments

- Nom : Stripwork. Se présente comme « studio ».
- Voix : directe, concrète, honnête plutôt que sensationnelle ; parle de résultats business, pas de jargon technique.
- Bilingue FR/ES, ton identique dans les deux langues.

## Evidence on Hand

Réalisations en ligne (vraies, citables) :
- LBEG (électricien Lyon) — lbeg.vercel.app
- Maintenance Caladoise (chauffagiste Limas) — maintenance-caladoise.vercel.app
- BP Maintenance (CVC Pommiers) — bp-maintenance.vercel.app
- SB Paysagiste (Tassin) — sb-paysagiste.vercel.app
- Du Vert au Balcon (balcons Lyon) — du-vert-au-balcon.vercel.app
- NapoliForno (pizzaiolo Costa Blanca, FR/ES/EN) — napoliforno-costablanca.vercel.app
- Corgier Chaudronnerie (B2B Trévoux) — corgier-chaudronnerie.vercel.app
- Voyance Eric Brunet, Anne-Charlotte Girard, Claire Larnicol + autres thérapeutes
- Études de cas existantes dans `lib/realisations.ts` (narratif à relire)

Absents — ne pas inventer : avis clients sur Stripwork, chiffres de performance, logos presse, certifications (Google Partner etc.), noms/photos de l'équipe.

## Product Principles

1. Le site est un outil commercial : chaque page mène à un appel ou un audit.
2. Prouver par les réalisations, jamais par des promesses.
3. Un seul studio du design aux campagnes : c'est l'argument, il doit se voir.
4. Prix lisibles et assumés, sans astérisque caché.
5. FR et ES sont deux sites complets, pas une traduction de courtoisie.
