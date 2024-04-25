import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Appointment Request Docs',
  tagline: 'Appointment Request Docs',
  favicon: 'https://beverlyhills.org/favicon.ico',

  // Set the production url of your site here
  url: 'https://arfhelpdocs.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CBHFinance', // Usually your GitHub org/user name.
  projectName: 'ARFHelpDocs', // Usually your repo name.
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            // require.resolve('@infinum/docusaurus-theme/dist/style.css'),
          ] 
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'always',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    format: 'detect',
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/cbh_arfDocs_socialCard.png',
    navbar: {
      title: 'ARF Docs',
      logo: {
        alt: 'CBH Shield',
        src: 'img/cbh_logo_light.svg',
        srcDark: 'img/cbh_logo_dark.svg',
        href: '/',
      },
    },
    footer: {},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'TV8DPDGDW5',
      apiKey: '6a72d652c6623319efce02cc81473255',
      indexName: 'ARFHelpDocsSearch',
      contextualSearch: true,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
