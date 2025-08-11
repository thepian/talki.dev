---
title: Consumer Train & Insurance Website
description: >-
  Improvements to two web sites for a country wide train services and property insurance in 2023 based on an
  extensive modern Design System, SolidJS and a custom element/web component approach.
cardImage: /caseStudies/test/sbb-zug.png
greyImage: /caseStudies/test/sbb-zug-grey.png
heroImage: /caseStudies/test/sbb-zug.png
roles:
  - frontend-engineering
  - consultant
  - interactive-maps
introduction: >
  <p>In 2023, I was made improvment to a production website Switzerland with millions of daily users. I had to fix the exisiting processes ensuring no downtime. Some of the issues addressed had been outstanding for years as nobody had found the root cause.</p>
  <ul>
    <li>Analysed existing code and planned a revision</li>
    <li>Manual/automated regression testing</li>
    <li>Put fix in production</li>
  </ul>
aboutProject:
  leftCol: >
    <p>In 2023 I worked on two high‑traffic consumer websites in Switzerland for public transport and insurance: sbb.ch (Swiss Federal Railways) journey information and the Wetter‑Alarm/GVB property insurance ecosystem. The mandate was to stabilise critical user journeys and deliver targeted improvements <em>without downtime</em>, while aligning with an established design system and a polyglot frontend (SolidJS and framework‑agnostic Web Components).</p>
    <ul>
      <li>Millions of daily requests with sharp commuter and severe‑weather peaks</li>
      <li>Zero‑downtime approach with canary/staged rollouts and fast rollback</li>
      <li>UI brought in line with the design system and accessibility guidance</li>
    </ul>
  rightCol: >
    <p>The work had to respect existing stacks and infrastructure (legacy pages, interactive maps, complex forms, CDN caching and SSR/hydration). I focused on pragmatic upgrades that could be introduced incrementally and verified in production.</p>
    <ul>
      <li>Introduced/extended Web Components to bridge stacks and isolate changes</li>
      <li>Improved render performance and memory use in interactive views (maps, lists)</li>
      <li>Hardened data‑fetch paths with timeouts/retries and schema guards</li>
      <li>Expanded monitoring and error reporting around critical flows</li>
    </ul>
whatWeDid:
  leftCol: >
    <p>Starting with a rapid assessment, I traced long‑standing production issues to specific race conditions, caching behaviours and brittle integration points. I proposed a plan that could be executed safely alongside ongoing releases and peak traffic windows.</p>
    <ul>
      <li><strong>Root‑cause analysis:</strong> Reproduced and isolated intermittent failures; added regression tests</li>
      <li><strong>Process‑safe fixes:</strong> Feature flags, staged rollout and observability to verify impact</li>
      <li><strong>Performance:</strong> Reduced layout thrash and unnecessary re‑renders in SolidJS and custom elements</li>
    </ul>
  rightCol: >
    <p>For the client‑facing features, I focused on map interactions, form reliability and page responsiveness under load. I ensured changes respected each organisation’s design system and release process.</p>
    <ul>
      <li><strong>Interactive maps:</strong> Smoothed pan/zoom, debounced network requests, improved marker clustering</li>
      <li><strong>Forms & flows:</strong> Hardened validation and submission, better empty/error states and retries</li>
      <li><strong>Design system alignment:</strong> Tokenised styles and accessible components across pages</li>
    </ul>
images:
  - /caseStudies/test/mobile.webp
  - /caseStudies/test/sbb-zug.png
  - /caseStudies/test/colors.webp
  - /caseStudies/test/wetteralarm.png

clientFeedback:
  - blockquote: "Shortly after the start of Henrik's mission, he had
identified the flaws in the product and was quick to ask useful questions and point out the elephant in the
room. His approach was always constructive, humble and respectful."
    figcaption: Client Side Product Owner
    cite: Train Travel Website
  - blockquote: "Henrik stabilised critical user journeys for our commuters during peak hours without any downtime. His fixes finally resolved issues we had carried for years."
    figcaption: Product Manager
    cite: sbb.ch
  - blockquote: "By aligning components with our design system and hardening form flows, Henrik improved reliability and reduced support load across our weather alert and insurance touchpoints."
    figcaption: Engineering Lead
    cite: wetteralarm.ch / gvb.ch
---
