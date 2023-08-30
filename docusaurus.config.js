// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RAW DevOps',
  tagline: 'Bootcamp com imersão completa no mundo DevOps',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rawdevops.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rawdevops', // Usually your GitHub org/user name.
  projectName: 'rawdevops', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  }, 

  plugins: [
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'RAW DevOps',
        logo: {
          alt: 'rawdevopslogo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/rawdevops',
            'aria-label': 'GitHub repository',
            position: 'right',
            className: 'navbar-github-link',
          },
          {
            href: 'https://www.instagram.com/rawdevopsbrasil/',
            'aria-label': 'Instagram',
            position: 'right',
            className: 'navbar-instagram-link',
          },
          {
            href: 'https://www.linkedin.com/company/rawdevopsbrasil',
            'aria-label': 'LinkedIn',
            position: 'right',
            className: 'navbar-linkedin-link',
          },
          {
            href: 'https://www.youtube.com/@rawdevops',
            'aria-label': 'YouTube',
            position: 'right',
            className: 'navbar-youtube-link',
          },
          {
            type: 'doc',
            docId: 'Bootcamp/welcome',
            position: 'right',
            label: 'Bootcamp',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        // logo: {
        //   alt: 'Meta Open Source Logo',
        //   src: 'img/logo.png',
        //   href: 'https://opensource.fb.com',
        //   width: 160,
        //   height: 51,
        // },
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RAW DevOps, Ltda. Made with docusaurus.io ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'desconto',
        content:
          '20% de desconto usando o Cupom RAWDEVOPS ou comprando pelo link -> <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/raw-devops-bootcamp/?couponCode=RAWDEVOPS">20% OFF</a>',
        backgroundColor: '#480058',
        textColor: '#FFFFFF',
        isCloseable: false,
      },
    }),
};

module.exports = config;
