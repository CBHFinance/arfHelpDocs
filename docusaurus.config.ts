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

  plugins: [
    'plugin-image-zoom',
    'docusaurus-plugin-auto-sidebars',
    // 'docusaurus-plugin-typedoc',
    //   // Plugin / TypeDoc options
    //   {
    //     entryPoints: ['../src/index.ts'],
    //     tsconfig: '../tsconfig.json',
    //   },
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
      apiKey: '63d62595a4303254b03acfe4e6f8c18d',
      indexName: 'arfhelpnetlify',
      contextualSearch: false,
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown :not(em) > img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
        container: '#zoom-container',
        template: '#zoom-template',
      },
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
