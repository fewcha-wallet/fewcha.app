import {
  chromeStoreExtURL,
  discordURL,
  firefoxStoreExtURL,
  mediumURL,
} from "config/config";

export const MENUS = [
  {
    href: "/",
    name: "Overview",
  },
  {
    href: "/#roadmap",
    name: "Roadmap",
  },
  {
    external: mediumURL,
    name: "Blog",
  },
  {
    external: discordURL,
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
    label: (
      <div className="flex gap-2">
        <div>✅</div>
        <div className="ml-4">Completed</div>
      </div>
    ),
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
    label: (
      <div className="flex">
        <div>⏱</div>
        <div className="ml-4">In progress</div>
      </div>
    ),
    cards: [
      {
        title: "Wallet Prototype 0.2.0",
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
    label: (
      <div className="flex gap-2">
        <div>💭</div>
        <div className="ml-4">Planned</div>
      </div>
    ),
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
        href: "/terms",
        label: "Terms",
      },
      {
        href: "/privacy",
        label: "Privacy",
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
