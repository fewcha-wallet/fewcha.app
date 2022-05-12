import {
  chromeStoreExtURL,
  discordURL,
  firefoxStoreExtURL,
  mediumURL,
} from "config/config";

export const MENUS = [
  {
    href: "/#roadmap",
    name: "Roadmap",
  },
  {
    external: mediumURL,
    href: "",
    name: "Blog",
  },
  {
    external: discordURL,
    href: "",
    name: "Support",
  },
];

export const BROWSERS = [
  {
    label: "Chrome",
    url: "/svgs/chrome.svg",
    href: chromeStoreExtURL,
  },
  {
    label: "Brave",
    url: "/svgs/brave.svg",
    href: chromeStoreExtURL,
  },
  {
    label: "Firefox",
    url: "/svgs/firefox.svg",
    href: firefoxStoreExtURL,
  },
  {
    label: "Microsoft Edge",
    url: "/svgs/microsoft-edge.svg",
    href: chromeStoreExtURL,
  },
];

export const ROADMAPS = [
  {
    label: "✅ Completed",
    cards: [
      {
        title: "Wallet Prototype 0.1.0",
        date: "MAY 2022",
        list: [
          "Chrome, Brave, Edge",
          "Create wallet",
          "Wallet management",
          "Send, receive APT balance",
          "Change network RPC",
          "Contact addresses book",
          "Faucet",
        ],
      },
    ],
  },
  {
    label: "⏱ In progress",
    cards: [
      {
        title: "Wallet Prototype 0.1.1",
        date: "MAY 2022",
        list: [
          "Token listings",
          "NFTs listings",
          "Send and receive Token",
          "Send and receive NFTs",
          "Connect with ledger wallet",
        ],
      },
      {
        title: "Aptos Web3",
        date: "MAY 2022",
        list: [
          "Integrate w/ Aptos Web3.js",
          "Websites that can connect",
          "Make transactions",
          "Confirm transactions flow",
        ],
      },
    ],
  },
  {
    label: "💭 Planned",
    cards: [
      {
        title: "Release version 1.0.0",
        date: "July 2022",
        list: ["Update to official design", "Become a validator node!!!"],
      },
      {
        title: "Firefox version",
        date: "August 2022",
        list: [],
      },
      {
        title: "Mobile version",
        date: "September 2022",
        list: ["Android", "iOS"],
      },
      {
        title: "dApp",
        date: "December 2022",
        list: ["Token swap", "NFTs marketplace"],
      },
    ],
  },
];

export const FOOTER_MENU = [
  {
    title: "Product",
    list: [
      {
        external: "/",
        label: "Overview",
      },
      {
        external: "/",
        label: "Download",
      },
      {
        external: discordURL,
        label: "Support",
      },
      {
        external: discordURL,
        label: "Feature Requests",
      },
    ],
  },
  {
    title: "Resources",
    list: [
      {
        external: mediumURL,
        label: "Blog",
      },
      {
        label: "Docs (Building)",
      },
      {
        href: "",
        label: "Status",
      },
      {
        href: "/privacy",
        label: "Terms & Privacy",
      },
    ],
  },
  {
    title: "Company",
    list: [
      {
        href: mediumURL,
        label: "About",
      },
      {
        label: "Jobs",
      },
      {
        label: "Press Kit",
      },
    ],
  },
];
