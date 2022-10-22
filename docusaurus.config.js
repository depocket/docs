/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DePocket Platform Docs',
  tagline: 'The docs for all services on DePocket Platform',
  url: 'https://docs.depocket.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'depocket',
  projectName: 'docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: 'DePocket Docs',
        logo: {
          alt: 'DePocket Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {to: 'faqs', label: 'FAQs', position: 'left'},
          {to: 'blog', label: 'Blog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/depocket/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://app.depocket.com/',
            label: 'App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Decentralized Finance Academy',
                to: 'https://defilearn.net',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/Depocketchannel',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DePocketFinance',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/depocket/docs',
              },
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://depocket.com/legal/privacy',
              },
              {
                label: 'Terms',
                href: 'https://depocket.com/legal/terms/',
              },
              {
                label: 'Data Policy',
                href: 'https://depocket.com/legal/data-policy/',
              },
              {
                label: 'Cookie Policy',
                href: 'https://depocket.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        logo: {
          alt: 'DePocket OSS',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/depocket.svg',
          href: 'https://depocket.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} DePocket Labs Jsc.`,
      },
    }),
};

module.exports = config;
