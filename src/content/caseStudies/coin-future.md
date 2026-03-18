---
publishDate: "2026-02-01"
title: Coin Future Options Chain
description: >-
  Built a dependency-minimal, fully client-side options chain viewer for BTC, ETH, and BNB
  that streams live mark prices, Greeks, and implied volatility from Binance via a custom
  multiplexed WebSocket client. Deployed to Cloudflare Workers with a proxy layer to
  work around Binance's REST CORS restrictions.
cardImage: /caseStudies/code/coin-future/card.png
greyImage: /caseStudies/code/coin-future/card-grey.png
heroImage: /caseStudies/code/coin-future/hero.png
roles:
  - frontend-engineering
  - financial-technology
  - react-development
  - typescript
introduction: >
  <p>Coin Future is a self-directed project to build a production-grade crypto options
  chain viewer as a standalone embeddable React component — fast, dependency-light, and
  deployable to any CDN. It connects directly to Binance's public options market, showing
  all available strikes for the next weekly expiry with live mark prices updating in real
  time.</p>
  <ul>
    <li>Live options chain for BTC, ETH, and BNB — calls and puts, next-Friday expiry</li>
    <li>Custom <code>BinanceMarketStream</code> class: multiplexed WebSocket with auto-reconnect, visibility-aware pause, and dynamic kline subscriptions</li>
    <li>Delta, gamma, theta, vega, implied volatility, and open interest per strike</li>
    <li>Inline sparkline trend charts and expandable 15-minute candlestick rows</li>
    <li>Deployed on Cloudflare Workers with a proxy edge script to bypass Binance's CORS/IP restrictions</li>
  </ul>
aboutProject:
  leftCol: >
    <p>Options chains are the canonical UI for derivatives markets: every strike price for
    a given expiry listed in a two-sided grid, calls on the left, puts on the right. The
    at-the-money (ATM) strike — closest to the current index price — is the focal point,
    attracting the most liquidity and the tightest spreads. Building a useful options chain
    means solving for real-time data freshness, grid density on small screens, and making
    the ATM row immediately visible without forcing the user to scroll to find it.</p>
    <ul>
      <li>The Binance Options API is free and public, but aggressively CORS-blocked from
      cloud IPs — Cloudflare Workers, Vercel, and Bunny.net edges all return 403</li>
      <li>REST calls are handled in the browser at page load; live pricing flows solely
      through the WebSocket stream which has no IP restriction</li>
      <li>Market data (strikes, expiries) is refreshed once per hour to track any intraday
      changes to available instruments</li>
    </ul>
  rightCol: >
    <p>The stack was chosen for minimal bundle size and zero server-side coupling.
    React 19 handles the component tree; Zustand 5 owns all market state with O(1)
    symbol lookups. Vite 8 + Tailwind CSS v4 keep the build pipeline fast. There are
    no charting libraries — the candlestick chart and sparklines are hand-rolled SVG.
    Biome replaces ESLint and Prettier. Vitest covers the market data parsing logic.</p>
    <ul>
      <li><strong>React 19 + Zustand 5</strong> — fine-grained memoisation; store
      doubles as a ring buffer for sparkline history (configurable 1–60s sample rate)</li>
      <li><strong>Custom WebSocket client</strong> — JSON-RPC SUBSCRIBE/UNSUBSCRIBE to
      manage kline streams dynamically as rows expand and collapse</li>
      <li><strong>Cloudflare Workers + Wrangler</strong> — stateless edge deployment;
      separate worker script proxies <code>/eapi/*</code> REST calls for the browser</li>
      <li><strong>Hand-rolled SVG charts</strong> — no charting dependencies; candlesticks
      and sparklines computed inline from Zustand state</li>
    </ul>
whatWeDid:
  leftCol: >
    <p>The WebSocket layer was the core engineering challenge. <code>BinanceMarketStream</code>
    opens a single multiplexed connection to <code>wss://fstream.binance.com/market/stream</code>
    and subscribes to two stream types simultaneously: <code>{underlying}@optionMarkPrice</code>
    (live prices, Greeks, IV for every active symbol) and <code>{underlying}@optionOpenInterest@{YYMMDD}</code>
    (per-expiry OI snapshots). Kline streams (<code>{symbol}@kline_15m</code>) are subscribed
    on demand when a row is expanded and unsubscribed when collapsed, using Zustand state
    as the source of truth for active subscriptions.</p>
    <p>The stream also implements Page Visibility API listeners to close the connection
    when the tab is backgrounded and reconnect when it returns to focus — preventing
    unbounded message queuing during long inactive periods.</p>
  rightCol: >
    <p>The grid layout required careful work to stay usable across screen sizes.
    On desktop, CSS Grid with dynamically computed <code>gridTemplateColumns</code> strings
    mirrors the calls/puts layout symmetrically around a fixed-width strike column.
    The column template updates live as the user toggles columns in the settings panel.
    On mobile (below 768px), the symmetric layout is replaced by a single-column view
    with CALL/PUT tab switching — maintaining scannability without horizontal overflow.</p>
    <ul>
      <li><strong>ATM detection:</strong> Index price from the WebSocket stream is used
      to recalculate the ATM strike on every tick; the highlighted row tracks the
      market live via a ref-based scroll-into-view on initial load</li>
      <li><strong>Settings panel:</strong> Column visibility and decimal precision are
      persisted in component state; the grid template string is recomputed on change
      without a page reload</li>
      <li><strong>Candlestick chart:</strong> Hand-written SVG renderer — OHLC bars
      calculated from Zustand kline history, green/red fill, no external library</li>
      <li><strong>Cloudflare proxy:</strong> A 20-line Workers script forwards
      <code>/eapi/*</code> requests to <code>eapi.binance.com</code>, bypassing the
      CORS block that rejected Vercel and Bunny edges</li>
    </ul>
images:
  - /caseStudies/code/coin-future/screenshot-1.png
  - /caseStudies/code/coin-future/screenshot-2.png
  - /caseStudies/code/coin-future/screenshot-3.png
clientFeedback: []
---
