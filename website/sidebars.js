const sidebar = {
  intro: [
    "welcome",
    {
      type: "html",
      value: "<hr/>",
    },
    {
      type: "category",
      label: "NEAR Components / BOS",
      items: [
        "components/what-is",
        "components/state",
        "components/dev-environment",
        "components/bos-gateway",
        "components/builtin-components",
        "components/interaction",
        "components/integrate-components",
        "components/web-methods",
        "components/social",
        "components/notifications",
        {
          type: "category",
          label: "Tutorials",
          items: [
            "components/blog-posts",
            "components/push-notifications",
            "components/lido",
            "components/near",
            "components/using-iframes",
            "components/ethers-js",
            "components/ethers-js-best-practices",
            "components/ds-components",
            "components/bos-loader",
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Chain Hosted UI",
      items: [
        "chain-hosted-ui/chain-hosted-ui",
        "chain-hosted-ui/chain-hosted-ui-tutorial",
      ],
    },
  ],

};

export default sidebar;
