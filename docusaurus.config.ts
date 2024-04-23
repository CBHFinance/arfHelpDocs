import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Appointment Request Docs',
  tagline: 'Appointment Request Docs',
  favicon: 'https://beverlyhills.org/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
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
      appId: 'CPYRVWPSN5',

      // Public API key: it is safe to commit it
      apiKey: {{env.ALGOLIA_SEARCH_API_KEY}},

      indexName: 'netlify_c5075186-9693-4c46-ac65-804c28858ea9_main_all',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
    // mermaid: {
    //   theme: {light: 'neutral', dark: 'forest'},
    //   options: {
    //     maxTextSize: 50,
    //   },
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
