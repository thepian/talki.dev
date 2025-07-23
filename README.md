# Milo Astro Theme

Clean and modern resume template for Astro, built with Tailwind CSS, perfect for showcasing your professional profile online.

![milo-theme](https://oxygenna-themes.b-cdn.net/milo-astro/milo-git.png)

## Introduction

### About

Milo is an elegant and production-ready resume template built with Astro and Tailwind CSS. Designed for developers, designers, and creatives, Milo offers a clean, modern way to showcase your skills, experience, and projects — all in a beautifully structured, single-page layout. It’s fully responsive, developer-friendly, and optimized, making it ideal for digital portfolios.

### Features

- **Built with Tailwind CSS:** Powered by Tailwind CSS for fast UI development and fully responsive design.
- **Optimized for Performance:** Delivers excellent results in PageSpeed Insights for a fast, smooth experience.
- **Light & Dark Mode Support:** Seamlessly switch between light and dark themes to suit user preferences.
- **Fully Responsive & Customizable:** Ensure your site looks great on any device, with easy customization to match your brand’s identity.
- **SEO-Friendly:** Optimized for search engines with a perfect 100% score on Google PageSpeed Insights for performance, ensuring top-tier loading speed and visibility.
- **Easy Updates with JSON Files:** Simplify content management and updates using structured JSON files.
- **Page Loading & Transition Animations:** Enhance user experience with smooth loading and transition effects.
- **Clean Code & Folder Structure:** Maintain a well-organized codebase that’s easy to navigate and extend.
- **Heroicons by Tailwind:** Access a wide range of high-quality icons to use across your site.
- **Includes WindUI Components:** Integrates optional WindUI Tailwind CSS components.
- **Modular Design:** Organized into reusable blocks and ui elements for easy customization and expansion.
- **Integrated Analytics:** Includes Google Analytics and Google Tag Manager functionalities.
- **Integrated with Keystatic CMS:** Leverage a powerful, headless CMS for easy content management and updates.
- **Sitemap Included:** Enhances website navigation and search engine indexing.

## Getting Started

### Commands

After downloading the theme, install the dependencies and run it on your local server. Check the `package.json` file for available scripts.

> **Note**: Requires Node.js version 20.3.0 or later.

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

### Folder structure

Inside Milo Astro project, you'll see the following folders and files:

```plaintext
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── blocks/
│   │   │   └── ...
│   │   ├── scripts/
│   │   │   └── ...
│   │   └── ui/
│   │       └── ...
│   ├── config/
│   │   └── ...
│   ├── content/
│   │   ├── caseStudiesDesign/
│   │   │   └── ...
│   │   └── caseStudiesCode/
│   │       └── ...
│   ├── data/
│   │   └── ...
│   ├── icons/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

| Directory/File           | Description                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `public/`                | Contains static assets like images and the favicon. These files are served directly at the root URL.                               |
| `src/assets/`            | Contains all images and assets used in the project.                                                                                |
| `src/components/`        | Contains reusable components for your site. This directory is divided into `ui` for UI components and `blocks` for section blocks. |
| `src/components/blocks/` | Contains Section blocks used throughout the site.                                                                                  |
| `src/components/ui/`     | Contains individual UI components.                                                                                                 |
| `src/config/`            | Contains configuration files for the project in typescript format.                                                                 |
| `src/content/`           | Holds collection data, such as case studies.                                                                                       |
| `src/data/`              | Contains JSON files with content data (like features, testimonials etc).                                                           |
| `src/icons/`             | Contains all icons used in the project, most are sourced from [Heroicons](https://heroicons.com/).                                 |
| `src/layouts/`           | Contains layout components that define the overall structure of your pages.                                                        |
| `src/pages/`             | Contains `.astro` files for each page. Each file here is exposed as a route based on its file name.                                |
| `package.json`           | Lists dependencies and scripts for your project, including metadata and various package requirements.                              |

## Theme Configuration

The configuration files are located in the `src/config` directory, written in TypeScript. They contain various settings for the theme, including:

| Configuration Files        | Description                                                              |
| -------------------------- | ------------------------------------------------------------------------ |
| `src/config/config.ts`     | Basic configuration settings including SEO, mode, and scroll animations. |
| `src/config/navigation.ts` | Menu TypeScript interface options and JSON files for navigation.         |
| `src/config/analytics.ts`  | Analytics configuration file.                                            |

## Theme Customization

### Customize the Colors

The theme uses two main colors: primary and neutral. These colors are defined in the Tailwind CSS configuration file. To personalize the color scheme of your project, you can easily modify these color values.

To customize the colors, follow these steps:

1. Open the `tailwind.config.js` file.
2. Find the `theme` section within the file.
3. Under `theme`, locate the `extend` property and then the `colors` object.
4. Modify the color values for `primary` and `neutral` to suit your preferred color palette.

You can use the [tailwind CSS colors](https://nodejs.org/en/download/) or create your [own palette](https://uicolors.app/create) .

### Customize the Fonts

To customize the fonts used in your project, follow these steps:

1. **Update the Tailwind CSS Configuration**

   Open the `tailwind.config.js` file. In the `theme` section, find the `extend` property and update the `fontFamily` object.

2. **Ensure Font Packages are Installed**

   Verify that the necessary font packages are included in your `package.json` file and also imported in the `src/layouts/Layout.astro` file.

You can add your own fonts by following [this guide](https://docs.astro.build/en/guides/fonts/#using-fontsource)

### Dark/Light Mode

By default, the site uses forced modes, which can be either light or dark, depending on the chosen layout. The light layout sets the class to **`mode-light`** and the dark layout sets it to **`mode-dark`**. This setting allows you to maintain a fixed appearance across the site regardless of user preferences or system settings.

However, if you want to give users the ability to switch between themes, you can configure the theme to use the **`mode-auto`** class. You can easily do this by adding the **`mode-auto`** class to the **`src/layouts/LayoutDesign.astro`** and **`src/layouts/LayoutCode.astro`** files instead of using **`mode-light`** or **`mode-dark`** and uncommenting the ThemeSwitcher component in the NavigationBar component.

## Content Management

Milo includes Keystatic CMS integration for Case Studies collection management. The configuration can be found in `keystatic.config.ts`, which defines:

- Content collections structure
- Field configurations
- Storage settings

Keystatic is currently configured for the `caseStudiesDesign` collection. You can switch or configure both collections as needed.

To use Keystatic:

1. Run the development server
2. Access the dashboard at `http://127.0.0.1:4321/keystatic`
3. Configure cloud storage in production:

```typescript
storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
cloud: {
  project: '[TEAM_NAME]/[PROJECT_NAME]',
},
```

4. Set the folder for the content files in the `collections` property

For more details, see [Keystatic's documentation](https://keystatic.com/docs/introduction).

## Want more themes?

Check out **Foxi Pro**, our premium Astro website template with fully responsive, customizable Tailwind CSS components.

![foxi-pro](https://oxygenna-themes.b-cdn.net/foxi-pro-astro/foxi-pro.png)

[![Get Foxi Pro](https://oxygenna-themes.b-cdn.net/foxi-pro-astro/primary-button-get-foxi-pro.svg)](https://astro.build/themes/details/foxi-pro/)
[![View live Demo](https://oxygenna-themes.b-cdn.net/foxi-pro-astro/secondary-button-foxi-pro-demo.svg)](https://foxi-pro.netlify.app)

## License

Copyright 2025 - Designed & Developed by [Oxygenna](http://www.oxygenna.com/)

[![Hire Us](https://oxygenna-themes.b-cdn.net/foxi-astro/hireus.png)](mailto:info@oxygenna.com,christos@oxygenna.com)
