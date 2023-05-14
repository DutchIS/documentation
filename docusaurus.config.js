// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DutchIS Documentation',
  tagline: 'Instant Infrastucture',
  url: 'https://docs.dutchis.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://dutchis.net/favicon.ico',
  organizationName: 'dutchis',
  projectName: 'documentation',
  titleDelimiter: '-',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: "theme-color",
        content: "#103f84"
      }
    }, {
      tagName: 'meta',
      attributes: {
        name: "keywords",
        content: "DutchIS, Documentation, Docs"
      }
    }, {
      tagName: 'meta',
      attributes: {
        property: "og:type",
        content: "article"
      }
    }
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],
  
  scripts: [{src: 'https://plausible.dutchis.net/js/script.js', defer: true, 'data-domain': 'docs.dutchis.net'}],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'DutchIS Logo',
          src: 'https://cdn.dutchis.net/dutchis/banner-black.svg',
        },
        items: [],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `Copyright 2020 - ${new Date().getFullYear()} DutchIS. All rights reserved. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
