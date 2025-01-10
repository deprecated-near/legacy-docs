// @ts-check
const path = require("path");
const changelogs = require("./src/utils/changelogs.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NEAR Documentation Archive",
  tagline: "Deprecated NEAR Protocol Documentation",
  url: "https://deprecated-near.github.io/",
  baseUrl: "/",
  organizationName: "deprecated-near",
  projectName: "legacy-docs",
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://use.fontawesome.com/221fd444f5.js",
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Source+Code+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap",
  ],
  favicon: "img/favicon.ico",
  customFields: {
    disableHeaderTitle: true,
    fonts: {
      myFont: ["Inter", "sans-serif"],
    },
    REACT_APP_PUBLIC_POSTHOG_KEY: process.env.REACT_APP_PUBLIC_POSTHOG_KEY,
    REACT_APP_PUBLIC_POSTHOG_HOST: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
  },
  themes: ["@saucelabs/theme-github-codeblock", "@docusaurus/theme-mermaid"],
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          breadcrumbs: true,
          path: "../docs",
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: false,
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
      },
    ],
  ],
  plugins: [
    "./src/plugins/monaco-editor",
    "./src/plugins/node-polyfills",
    "docusaurus-plugin-sass",
  ],
  themeConfig: {
    image: "docs/assets/welcome-pages/protocol.png",
    announcementBar: {
      id: 'id-0010',
      content:
        '<b>!!! Attention! This is collection of deprecated docs. Visit <a href="https://docs.near.org">https://docs.near.org</a> for full documentation !!!</b>',
      backgroundColor: '#fcfbfa',
      textColor: '#333',
      isCloseable: false,
    },
    prism: {
      additionalLanguages: [
        "rust",
        "java",
        "python",
        "ruby",
        "go",
        "typescript",
        "jsx",
        "bash",
      ],
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      logo: {
        alt: "NEAR Logo",
        src: "img/near_logo.svg",
        srcDark: "img/near_logo_white.svg",
      },
      items: [
        {
          to: "/",
          label: "Deprecated Docs ",
          position: "left",
          activeBaseRegex: "/",
        },
        {
          type: "html",
          position: "right",
          value:
            '<a href="https:docs.near.org" class="navbar__link" style="font-weight: 600">Official Docs</a>',
        },
        {
          type: "html",
           position: "right",
          value: '<span class="separator"></span>',
        },
        {
          type: "html",
          position: "right",
          value:
            '<a class="navbar__link false" href="#" onclick="google.translate.TranslateElement({pageLanguage: \'en\', includedLanguages: \'af,sq,am,en,fa,ar,ps,ja,zh-CN,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-TW,co,hr,cs,da,nl,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,jw,kn,kk,km,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,uz,vi,cy,xh,yi,yo,zu\'}, \'google_translate_element\');"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style="vertical-align: text-bottom"><path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg></a>',
        }
      ],
    },
    footer: {
      links: [],
      copyright: "Copyright © 2023 NEAR Protocol",
      logo: {
        src: "img/near_logo.svg",
      },
    },
  },
};

export default config;
