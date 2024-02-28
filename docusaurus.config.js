// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RAW DevOps",
  tagline: "Bootcamp com imersão completa no mundo DevOps",
  favicon: "img/logofavicon.png",

  // Set the production url of your site here
  url: "https://rawdevops.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rawdevops", // Usually your GitHub org/user name.
  projectName: "rawdevops", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  plugins: [
    [
      "ideal-image",
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
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
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
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        title: "RAW DevOps",
        logo: {
          alt: "rawdevopslogo",
          src: "img/logoFlower.png",
        },
        items: [
          {
            href: "https://www.udemy.com/course/raw-devops-bootcamp/?couponCode=RAWDEVOPSJAN",
            "aria-label": "Udemy",
            position: "right",
            className: "navbar-udemy-link",
          },
          {
            href: "https://github.com/rawdevops",
            "aria-label": "GitHub repository",
            position: "right",
            className: "navbar-github-link",
          },
          {
            href: "https://www.instagram.com/rawdevopsbrasil/",
            "aria-label": "Instagram",
            position: "right",
            className: "navbar-instagram-link",
          },
          {
            href: "https://www.linkedin.com/company/rawdevopsbrasil",
            "aria-label": "LinkedIn",
            position: "right",
            className: "navbar-linkedin-link",
          },
          {
            href: "https://www.youtube.com/@rawdevops",
            "aria-label": "YouTube",
            position: "right",
            className: "navbar-youtube-link",
          },
          {
            href: "https://api.whatsapp.com/send?phone=62982654177",
            "aria-label": "Whatsapp",
            position: "right",
            className: "navbar-whatsapp-link",
          },
          {
            to: "consulting/",
            activeBasePath: "consulting/",
            label: "Consultoria",
            position: "left",
          },
          {
            to: "/bootcamp",
            position: "left",
            label: "Bootcamp",
          },
          {
            to: "/signoz",
            position: "left",
            label: "SigNoz",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Cursos",
            items: [
              {
                label: "Bootcamp DevOps",
                to: "/bootcamp",
              },
              {
                label: "SigNoz",
                to: "/signoz",
              },
            ],
          },
          {
            title: "Nossas Redes",
            items: [
              {
                label: "Udemy",
                href: "https://www.udemy.com/user/rawdevopsio/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@rawdevopsbrasil",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/rawdevopsbrasil/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/rawdevopsbrasil",
              },
              {
                label: "GitHub",
                href: "https://github.com/rawdevops",
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@rawdevops",
              },
            ],
          },
          {
            title: "Fale Conosco",
            items: [
              {
                html: `
                <a href="https://api.whatsapp.com/send?phone=62982654177" class="buttonFooter">
                  <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
                  Chamar no WhatsApp
                </a>
              `,
              },
              {
                html: `
                <a href="mailto:emailraw@gmail.com" class="buttonFooter">
                  <img src="https://img.icons8.com/color/48/000000/email.png" alt="Email" />
                  Enviar um Email
                </a>
              `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RAW DevOps, Ltda. Made with docusaurus.io ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: "desconto",
        content:
          '20% de desconto no bootcamp usando o Cupom RAWDEVOPSJAN ou comprando pelo link -> <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/raw-devops-bootcamp/?couponCode=RAWDEVOPSJAN">20% OFF</a>',
        backgroundColor: "#480058",
        textColor: "#FFFFFF",
        isCloseable: false,
      },
    }),
};

module.exports = config;
