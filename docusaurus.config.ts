import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CoCo Next',
  tagline: '🎉 欢迎来到 CoCo Next 文档',
  favicon: 'img/logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://next.ccwidget.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitee.com/oldsquaw-coco-next/CoCo-Next-Docs/edit/main/',
          routeBasePath: '/'
        },
        blog: false,
        pages: {
          editUrl: 'https://gitee.com/oldsquaw-coco-next/CoCo-Next-Docs/edit/main/'
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CoCo Next',
      logo: {
        alt: 'CoCo Next Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'left',
          label: '关于我们',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: '使用指南',
        },
        {
          type: 'docSidebar',
          sidebarId: 'techSidebar',
          position: 'left',
          label: '技术分析',
        },
        {
          href: 'https://gitee.com/oldsquaw-coco-next/CoCo-Next',
          label: 'Gitee',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '关于我们',
              to: '/about/intro',
            },
            {
              label: '使用指南',
              to: '/guide/introduction',
            },
            {
              label: '技术分析',
              to: '/tech/fork',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'QQ：907170983',
              href: 'https://wpa.qq.com/msgrd?uin=907170983',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '主页',
              href: 'https://next.ccwidget.top/',
            },
            {
              label: 'Gitee',
              href: 'https://gitee.com/oldsquaw-coco-next/CoCo-Next',
            },
          ],
        },
      ],
      copyright: `CoCo Next 文档遵循 署名—非商业性使用 4.0 协议国际版。使用 Docusaurus 构建于 ${new Date().toUTCString()}。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
