# stripwork — Contexte Projet

## Concept
Site vitrine de l'agence d'automatisation IA de Mathieu. Présente les services, qualifie les leads via un diagnostic interactif (quiz 6 questions), et capture les contacts.

## Stack
- Next.js 16.2.1 (App Router, RSC) + React 19.0.0 + TypeScript 5 strict
- Framer Motion 12.38 + Lenis 1.3 (smooth scroll)
- Tailwind CSS 3.4.1 (dark theme, accent #c6ff00)
- Fonts : Space Grotesk + Inter (next/font/google)
- Resend 6.9.4 (emails) + Telegram (notifications instantanées)
- Zod 4.3.6 (validation) + simple-icons 16.14
- Déploiement : Vercel (Node 24.x)
- Repo GitHub : BotenFolie/workless

## Fichiers clés
- `app/page.tsx` — Homepage (landing)
- `app/api/contact/route.ts` — Lead capture
- `app/api/diagnostic/route.ts` — Quiz scoring (0-16)
- `lib/content.ts` / `lib/content.en.ts` — Copy FR/EN centralisé
- `lib/i18n.tsx` — Provider langue + switcher (localStorage)
- `lib/diagnosticConfig.ts` — Questions quiz + scoring pondéré
- `lib/rateLimit.ts` — Rate limiting IP (3 req/h)
- `lib/telegram.ts` — Notifications Telegram
- `components/DiagnosticModal.tsx` — Quiz interactif 6 questions

## Décisions critiques
- Diagnostic = CTA principal (qualifie leads auto → profil high/medium/low)
- Dual canal : Resend (email) + Telegram (alerte instantanée)
- Sécurité : Zod + sanitizeHTML + honeypot + rate limit IP + CSP headers
- i18n sans library : Context React + useContent() hook + localStorage
- Stateless : zéro BDD, données → emails uniquement (RGPD by design)
- suppressHydrationWarning sur composants Framer Motion (fix Next.js 16 + React 19)

## Tarification
- Starter : 1500€ | Growth : 2000€-4500€ | Full Stack : custom

## God nodes (graphify)
- POST() endpoints (8 edges), Page() (6 edges), useContent() (5), sanitizeHTML() (5)

## Vault
Voir ~/Desktop/claude-vault/stripwork/ pour architecture.md et decisions.md complets.

---

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
