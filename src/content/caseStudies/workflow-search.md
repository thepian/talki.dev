---
title: Workflows start with Search or Evidence
publishDate: "2023-09-01"
description: >-
  Workflows start with an event — a query, a scan, a photo. This is the work of building the
  intelligence layer that interprets what someone means from what they submit, and starts the
  right workflow steps in response.
cardImage: /caseStudies/code/workflow-search/chart.png
greyImage: /caseStudies/code/workflow-search/chart.png
heroImage: /caseStudies/code/workflow-search/chart.png
featured: true
roles:
  - ml-engineering
  - full-stack
people:
  - h5
introduction: >
  <p>A business can be seen as a collection of workflows. For people trained in the workflows, the digital
  workflows can be organised in a navigational menu with appropriate names, which can be used to pick
  the appropriate workflow.
  Thepia Flows instead requires the user to present event evidence, a query or another form of prompt.
  The user intent is determined based on ML models interpretation of the input.</p>

  <ul>
    <li>A <a href="https://huggingface.co/datasets/thepian/product-query-benchmark">benchmark dataset</a> to measure whether search correctly understands what people are asking</li>
    <li>AI models trained specifically on product queries, working across 10 languages</li>
    <li>The same models running on personal devices — browser and native app — without a server round-trip</li>
  </ul>
aboutProject:
  leftCol: >
    <p>A business can be seen as a collection of workflows. For people trained in the workflows, the digital workflows can be organised in a navigational menu with appropriate names, which can be used to pick the appropriate workflow.
    Thepia Flows instead requires the user to present event evidence, a query or another form of prompt.
    The user intent is determined based on ML models interpretation of the input.</p>
    <p>Product search in a workflow is not a single lookup. Someone typing "palm oil free baking
    fat" has a constraint, a use context, and an implied fallback if nothing matches — they want
    a substitute, not an empty page. Someone typing "what is fairtrade" wants information before
    they buy, not a product list. Someone typing "I want to reduce plastic in my kitchen" is
    exploring, not filtering.</p>
    <p>Each of these calls for a different next step and a different interface to support it.
    Getting that right starts with measuring it — and there was no benchmark that covered this
    kind of multilingual, constraint-based, goal-oriented query. So one was built and published
    openly.</p>
  rightCol: >
    <p></p>
whatWeDid:
  leftCol: >
    <p>To expand the entities and determine intent, a new benchmark is needed beyond <a href="https://huggingface.co/datasets/milistu/amazon-esci-data">Amazon ESCI</a>.
    The benchmark covers approximately 331,000 products and 13,000 brands across 31 languages,
    enriched with trademark registry data from across Europe. It provides a clear, repeatable
    way to test whether a search system is understanding what someone is asking, not just
    matching the words they typed.</p>
    <ul>
      <li>Covers real query types missing from Amazon benchmark: substitution requests, ingredient avoidance, certification questions</li>
      <li>Based on <a href="https://www.euipo.europa.eu/en">know brands</a> present in Europe</li>
      <li>Built for European multilingual markets, not English-only data</li>
      <li>Publicly <a href="https://huggingface.co/datasets/thepian/product-query-benchmark">available on HuggingFace</a> for anyone to use and build on</li>
    </ul>
    <br/>

    <p>With a way to measure quality established, we need ML models that perform well
    against it. We train <a href="https://en.wikipedia.org/wiki/Named-entity_recognition">Entity Recognition</a> that can match against the types of sentences
    that identifies the wish to find a particular product with 9 of 10 accuracy.
    Getting that to ten out of ten is ongoing work.</p>

    <p>The model's accuracy matters because its output is what determines which workflow steps
    activate next. A wrong reading sends someone down the wrong path.</p>
  rightCol: >
    <p>When the NER parsing fails to match a query, we fall back to Agentic Search using an <a href="https://en.wikipedia.org/wiki/Large_language_model">LLM</a>.
    We use an <a href="https://developers.openai.com/api/docs/models/gpt-oss-120b">GPT OSS 120GB</a> with a prompt that precisely describes the situation.
    The LLM allows a wider range of responses, and even tool use, searching the web for detailed information.
    Based on the feedback we can decide to:
    </p>
    <ul>
    <li>Get more feedback from the user.</li>
    <li>Provide a quer with data we didn't previously support</li>
    <li>Save training for the next model version</li>
    <li>Flag the query for human follow up</li>
    </ul>
    <br/>

    <p>The process runs on the server by default. Running search takes running inference for multiple ML models. Some of them can be run on limited hardware. With quantised model variants, it can be run client side. Be that in a native iOS or Android app, or
    using WebGPU in the web browser.
    </p>
    <p>With that the workflow can respond at keypress speed, presenting suggestions and activating
    the right next step as the person types, with no waiting. This also means the interface can offer rich, responsive autosuggest driven by real
    understanding of what the person means — not just a list of matching words from a dictionary.</p>
images:
  - /caseStudies/code/workflow-search/chart.png
  - /caseStudies/code/workflow-search/chart-2.png
  - /caseStudies/code/workflow-search/chart-3.png
  - /caseStudies/code/workflow-search/chart-4.png
  - /caseStudies/code/workflow-search/f1_chart.svg

clientFeedback:
  - blockquote: "The intent routing means users searching for 'alternative to cling film' never see a cling film product page — they see functional substitutes. That's a trust-building difference."
    figcaption: Product Lead
    cite: EvidentSearch
---
## Workflows that start with what you have

Most workflow tools require you to know where you are going before you start — you navigate
to the right section, open the right form, and follow a fixed sequence of steps. Thepia Flows
starts from the other direction: present what you have in front of you, and the system
determines what comes next.

Product search is the clearest example of this. A query is an event. What the person means
by it determines which steps follow — a filtered search, a comparison, a guided exploration,
or an answer to a question before any searching happens. Those are different workflows, and
the right one only becomes clear once the query is understood.

## Search as steps, not a single lookup

Unlike search in Google or Amazon — a query in, results out — this approach treats search
as a sequence of steps that can narrow, redirect, or extend depending on what the person
actually needs. Context from earlier in the interaction carries forward. A preference expressed
once is remembered and applied to what follows.

The interface adapts to each step rather than showing a fixed layout for every possible state.
Each step gets the interface appropriate to what is happening at that moment — a constraint
picker, a comparison surface, an informational card, a curated bundle — without requiring the
person to navigate between them.

## A reusable capability

The benchmark, the models, and the on-device deployment path are not specific to one product
catalogue or one application. Any workflow that starts with a person expressing what they need
— in any of 10 languages, on any device — can use this layer to interpret that input and
activate the right response. The benchmark and models are published openly on HuggingFace.
