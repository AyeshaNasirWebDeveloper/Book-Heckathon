import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI Physical & Robotics",
  tagline: "Advanced Physical AI & Humanoid Robotics",
  favicon: "img/favicon.ico",

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
  },

  // REQUIRED FOR GITHUB PAGES
  url: "https://ayeshanasirwebdeveloper.github.io",
  baseUrl: "/Book-Heckathon/",
  trailingSlash: false,
  organizationName: "AyeshaNasirWebDeveloper",
  projectName: "Book-Heckathon",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/global.css"),
            require.resolve("./src/css/themeOverrides.css"),
          ],
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    theme: {
      dark: {
        "--ifm-background-color": "var(--color-bg-dark)",
        "--ifm-text-color": "var(--color-text-dark)",
        "--ifm-color-primary": "var(--color-gold)",
        "--ifm-color-primary-dark": "var(--color-gold-hover)",
        "--ifm-navbar-background-color": "var(--color-bg-dark)",
        "--ifm-footer-background-color": "var(--color-bg-dark)",
        "--ifm-code-background": "#2e2e2e",
        "--ifm-code-color": "#f8f8f2",
        "--ifm-toc-border-color": "var(--color-border)",
      },
      light: {
        "--ifm-background-color": "var(--color-bg-light)",
        "--ifm-text-color": "var(--color-text-light)",
        "--ifm-color-primary": "var(--color-gold)",
        "--ifm-color-primary-dark": "var(--color-gold-hover)",
        "--ifm-navbar-background-color": "var(--color-bg-light)",
        "--ifm-footer-background-color": "var(--color-bg-light)",
        "--ifm-code-background": "#f6f8fa",
        "--ifm-code-color": "#24292e",
        "--ifm-toc-border-color": "var(--color-border)",
      },
    },

    navbar: {
      title: "AI Physical & Robotics",
      style: "dark",
      hideOnScroll: true,
      logo: {
        alt: "AI Robotics Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/modules", label: "Modules", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/AyeshaNasirWebDeveloper",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Tutorial", to: "/docs/intro" },
            { label: "Modules", to: "/modules" },
            { label: "Blog", to: "/blog" },
          ],
        },
        {
          title: "Contact Us",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/profile.php?id=100073726903710",
            },
            {
              label: "Linkedln",
              href: "https://www.linkedin.com/in/ayeshanasirwin/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/AyeshaNasir170",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Github",
              href: "https://github.com/AyeshaNasirWebDeveloper",
            },
            {
              label: "Portfolio",
              href: "https://kaleidoscopic-nougat-fe9e5e.netlify.app/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AI Physical & Robotics`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
