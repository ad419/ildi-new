# Project Context & AI Coding Guidelines

This file is automatically loaded by the AI Studio agent to maintain context and rules across sessions.

## Project Overview
- **Name:** Ildi Idraulico / Ildi Hidraulik (Plumbing & Heating Services in Rome)
- **Languages Supported:** Italian (`it`) and Albanian (`sq`). All new features or text must utilize `src/translations.ts`.
- **Tech Stack:** React, Vite, Tailwind CSS, Framer Motion (`motion/react`).

## Key Integrations & Features
- **SEO & Meta Data:** We use `react-helmet-async` to dynamically update document `<title>` and `<meta name="description">` based on the selected language. 
- **Customer Chat:** The project uses Tawk.to for live customer support rather than a WhatsApp widget.
  - Package: `@tawk.to/tawk-messenger-react`
  - Property ID: `6a2fc2638d5a241d4b8f27cb`
  - Widget ID: `1jr58ul6g`
  - Location: Placed in `src/components/TawkChat.tsx` and injected at the root in `App.tsx`.

## Coding Guidelines
- **Modularity:** Separate components clearly.
- **Styling:** Strict adherence to Tailwind CSS.
- **Translation:** Never hardcode user-facing strings; always put them in `translations.ts` and ensure parity between Italian and Albanian.
