---
publishDate: "2022-06-01"
title: Finnova Investment Cockpit
description: >-
  Designed and developed a comprehensive portfolio management application for Swiss banks using Finnova's core banking system, featuring advanced data visualization and real-time portfolio analytics.
cardImage: /caseStudies/code/finnova/table-config.png
greyImage: /caseStudies/code/finnova/table-config-grey.png
heroImage: /caseStudies/code/finnova/table-config.png
roles:
  - ui-ux-design
  - angular-development
  - investment-banking
people:
  - h5
introduction: >
  <p>The Finnova Investment Cockpit is a sophisticated portfolio management application designed for Swiss banks to manage and rebalance professional investment portfolios on behalf of their clients. Built on Finnova's core banking infrastructure, it provides comprehensive insights into portfolio performance, asset allocation, and risk metrics.</p>
  <ul>
    <li>Modern UI design system with advanced data visualization components</li>
    <li>Real-time integration with Finnova core banking systems</li>
    <li>Complex financial calculations and portfolio analytics</li>
    <li>Comprehensive portfolio management and rebalancing tools</li>
  </ul>
aboutProject:
  leftCol: >
    <p>Finnova AG is a leading Swiss provider of core banking software, serving private banks, wealth managers, and investment firms across Switzerland and internationally. The Investment Cockpit represents a modern approach to portfolio management, designed specifically for Swiss banking requirements and regulatory compliance.</p>
    <ul>
      <li>Built for Swiss private banks and wealth management firms</li>
      <li>Integrated with Finnova's established core banking ecosystem</li>
      <li>Designed for professional portfolio managers and relationship managers</li>
    </ul>
  rightCol: >
    <p>The application required sophisticated financial modeling capabilities, real-time data processing, and an intuitive interface that could handle complex portfolio structures while maintaining the precision required for institutional wealth management.</p>
    <ul>
      <li>Angular-based modern web application architecture</li>
      <li>Advanced data visualization for portfolio analytics</li>
      <li>Real-time integration with market data and core banking systems</li>
      <li>Responsive design optimized for professional workflows</li>
    </ul>
whatWeDid:
  leftCol: >
    <p>My work on the Finnova Investment Cockpit encompassed the complete design and development lifecycle, from initial UI/UX concepts to production deployment within the Finnova ecosystem.</p>
    <ul>
      <li><strong>UI/UX Design System:</strong> Created a comprehensive design system with reusable components optimized for financial data visualization and portfolio management workflows</li>
      <li><strong>Portfolio Analytics Dashboard:</strong> Designed and implemented advanced data visualization components for portfolio performance, asset allocation, and risk metrics analysis</li>
      <li><strong>Angular Development:</strong> Built a modern, responsive web application using Angular framework with TypeScript for type-safe financial calculations</li>
    </ul>
  rightCol: >
    <p>The technical implementation focused on creating a seamless integration with Finnova's core banking infrastructure while delivering an intuitive user experience for portfolio managers.</p>
    <ul>
      <li><strong>Real-time Data Integration:</strong> Implemented live data feeds from Finnova core banking systems for up-to-date portfolio valuations and market data</li>
      <li><strong>Portfolio Rebalancing Tools:</strong> Developed sophisticated algorithms and interfaces for portfolio optimization and rebalancing recommendations</li>
      <li><strong>Configurable Reporting:</strong> Created flexible reporting system allowing banks to customize portfolio reports for their specific client requirements</li>
    </ul>
images:
  - /caseStudies/code/finnova/table-config.png
  - /caseStudies/code/finnova/alerts.png
  - /caseStudies/code/finnova/profil-bild.png
  - /caseStudies/code/finnova/dimensions.png
  - /caseStudies/code/finnova/four-panels.png
  - /caseStudies/code/finnova/finnova-positionen.mp4

clientFeedback:
  - blockquote: "The Investment Cockpit Henrik designed has transformed how our portfolio managers interact with client portfolios. The intuitive interface and real-time analytics have significantly improved our efficiency and client service quality."
    figcaption: Head of Portfolio Management
    cite: Swiss Private Bank
  - blockquote: "Henrik's design system approach ensured consistency across all our portfolio management tools. The integration with our Finnova core banking system was seamless, and the data visualization capabilities exceeded our expectations."
    figcaption: Chief Technology Officer
    cite: Finnova Implementation Partner
  - blockquote: "The configurable reporting features Henrik developed allow us to provide our clients with exactly the portfolio insights they need. The application has become an essential tool for our relationship managers."
    figcaption: Head of Client Services
    cite: Swiss Wealth Management Firm
---
### Reactive Store

Angular 2 - 16 was based on RxJS Observables. The app was initially based on the NgRx store approach. This worked well for some types of applications, but it quickly felt clunky in our application. In response to a slowdown in velocity and challenges writing test coverage. I championed a more reactive approach. We evaluated the Redux way, and I concluded that **MobX** was the best fit.

- Simple conceptual model
- Central definition of derived state / computed properties
- Low boilerplate

We ended up with test improvements and greater clarity.
Today the soltuion should be based on Signals, which is the modern reactive solution for Angular.

### Legacy Oracle Context vs Cloud

The Backend is ultimately an Oracle On-Prem Solution running a Schema refined over decades and holding decades of banking data. Finnova created an API layer to the core banking engine, which our App interfaced.
Our solution created a traditional SpringBoot App running against the Core Banking API to translate and cache data to provide the performance profile required for our App. Rather than optimise caching HTTP requests, it cached response values in the midtier across responses at a more granular level.
The deployment was done with a simple set of containers running on Kubernetes, configured with OpenShift. It included Frontend, Midtier, Prometheus, Grafana, Jenkins to provide a standardised rollout approach across client banks.
The deployment is done on a mixture of private cloud and on premise.

The DTO's in the midtier were [compiled along with the API to a frontend TypeScript library](https://github.com/vojtechhabarta/typescript-generator). I picked this due to its rich mapping options. When translating between languages it's important not to loose expressivity, and making it feel natural to the language. Mapping types well from Java DTO to TypeScript enables coding the client without switching mental state.

On the Java side we used Lombok @Data annotations, which today would probably be Java Records.
