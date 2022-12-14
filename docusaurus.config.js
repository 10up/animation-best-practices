// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '10up - Animation Hub (Beta)',
  tagline: 'The central hub for everything animation related at 10up',
  url: 'https://10up.github.io/',
  baseUrl: '/animation-best-practices/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // SSO
  customFields: {
    homeUrl: 'https://10up.github.io/animation-best-practices/',
    tenupSSOProxy: 'https://ssoproxy.10uplabs.com/wp-login.php',
    googleSSOClientId: '633588772255-vbpba3ca5254j0n6d9pf3a552pcbkr8q',
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '10up', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
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
        title: 'Animation Hub (Beta)',
        logo: {
          alt: '10up Logo',
          src: 'img/10up-logo-full.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'right',
            label: 'Examples',
            docsPluginId: 'examples'
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'right',
            label: 'Guidelines',
            docsPluginId: 'guidelines'
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'right',
            label: 'Resources',
            docsPluginId: 'resources'
          },
          {
            label: 'Logout ????',
            position: 'right',
            to: 'logout',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        logo: {
          src: "img/10up-logo-full.svg",
          height: 50,
          width: 50,
          href: 'https://10up.com',
        },
        copyright:`???? 10up Animation Docs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'examples',
        path: 'examples',
        routeBasePath: 'examples',
        sidebarPath: require.resolve('./sidebars.js'),
        sidebarCollapsed: false,
      },
    ],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'guidelines',
				path: 'guidelines',
				routeBasePath: 'guidelines',
				sidebarPath: require.resolve('./sidebars.js'),
				sidebarCollapsed: false,
			},
		],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'resources',
				path: 'resources',
				routeBasePath: 'resources',
				sidebarPath: require.resolve('./sidebars.js'),
				sidebarCollapsed: false,
			},
		],
  ]
};

module.exports = config;
