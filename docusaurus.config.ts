import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type * as Preset from '@docusaurus/preset-classic';


const lightCodeTheme = prismThemes.github
const darkCodeTheme = prismThemes.dracula

const config: Config = {
  title: 'Appointment Request Docs',
  tagline: 'Appointment Request Docs',
  favicon: 'https://beverlyhills.org/favicon.ico',
  url: 'https://arfhelpdocs.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  trailingSlash: false,
  // stylesheets: [
  //   {
  //     href: '/katex/katex.min.css',
  //     type: 'text/css',
  //   },
  // ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  markdown: {
    format: 'detect',
    mermaid: true,
    mdx1Compat: {
      // comments: false,
    },
    remarkRehypeOptions: {
      footnoteLabel: '',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // sidebarPath: require.resolve("./sidebars.js"),
          // remarkPlugins: [remarkMath],
          // rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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

  themeConfig: {
    image: 'img/cbh_arfDocs_socialCard.png',
    navbar: {
      hideOnScroll: false,
      title: 'ARF Docs',
      logo: {
        alt: 'CBH Shield',
        src: 'img/cbh_logo_light.svg',
        srcDark: 'img/cbh_logo_dark.svg',
        href: '/',
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // docs: {
    //   sidebar: {
    //     hideable: false,
    //     autoCollapseCategories: true,
    //   },
    // },
    footer: {},
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'TV8DPDGDW5',
      apiKey: '63d62595a4303254b03acfe4e6f8c18d',
      indexName: 'arfhelpnetlify',
      contextualSearch: false,
    },
    zoom: {
      selector: '.markdown > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
    // imageZoom: {
    //   // CSS selector to apply the plugin to, defaults to '.markdown img'
    //   selector: '.markdown :not(em) > img',
    //   // Optional medium-zoom options
    //   // see: https://www.npmjs.com/package/medium-zoom#options
    //   options: {
    //     margin: 24,
    //     background: '#BADA55',
    //     scrollOffset: 0,
    //     container: '#zoom-container',
    //     template: '#zoom-template',
    //   },
    // },

  } satisfies Preset.ThemeConfig,
};

export default config;
