---
title: Visual Evidence App
publishDate: "2023-06-01"
description: >-
  Design and implementation for a white-label iOS App for creating camera driven workflows, where the 
  user shows the system a situation, and the AI Agent determines what it is and what workflow is involved.
cardImage: /caseStudies/code/evidence/card.jpg
greyImage: /caseStudies/code/evidence/card-grey.jpg
heroImage: /caseStudies/code/evidence/card.jpg
roles:
  - product-design
  - mobile-app
  - ml-engineering
  - full-stack
introduction: >
  <p>Many workflows are highly manual from the employee or users perspective. By handing the user a self-service App, the workflow progress can be easily tracked, and a lot of details captured, only to be used if the case needs review. If you scan the QR code of your laptop next to the repair desk, you probably want to drop it off or pick it up.</p>
  <ul>
    <li>iOS SwiftUI base with Web Workflow in Svelte and Capacitor</li>
    <li>One install with updates like a web page</li>
    <li>Mobile-first task and document app</li>
  </ul>
aboutProject:
  leftCol: >
    <p>Many workflows are highly manual from the employee or users perspective. By handing the user a self-service App, the workflow progress can be easily tracked, and a lot of details captured, only to be used if the case needs review. If you scan the QR code of your laptop next to the repair desk, you probably want to drop it off or pick it up.</p>
    <ul>
      <li>Built using modern full-stack technologies (Node.js, Deno, Svelte)</li>
      <li>Implemented secure authentication and session flows</li>
    </ul>
  rightCol: >
    <p>This can be used to create a workflow as a simple webapp using React, Svelte or plain JS and Web Components</p>
    <ul>
      <li>Possible to implement async updates</li>
      <li>Can Filter PII for better privacy and compliance</li>
    </ul>
whatWeDid:
  leftCol: >
    <p>With further integrations in mind, we built a scalable and flexible base.</p>
    <ul>
      <li>Deployed using European CDN + serverless infrastructure </li>
      <li>Set up an automated build, test, deployment based on GitHub</li>
      <li>Embeds advanced ML Vision models to determine workflow state</li>
    </ul>
  rightCol: >
    <p>Android is a future possibility</p>
    <ul>
    </ul>
images:
  - /caseStudies/code/evidence/presentation.013.jpeg
  - /caseStudies/code/evidence/presentation.014.jpeg

clientFeedback:
  - blockquote: "This is exactly the foundation we need to improve our offboarding on time."
    figcaption: Product Manager
    cite: EchoTune
---
## Modern performance

The architecture allows several advantages

1) Native camera performance ensures good battery performance and experience
2) Private information can be kept natively on users device
3) Native ML Models are available
4) No streaming to edge hosted ML algos
5) Simple web deployment convenience
6) Control over data retention 
7) High efficiency with light-weight web apps