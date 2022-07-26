import {
  discordURL,
  mediumURL,
  telegramURL,
  twitterURL,
  chromeStoreExtURL
} from "config/config";

export const MENUS = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/contributor",
    name: "Contributors",
  },
  {
    external: mediumURL,
    name: "Docs",
  },
  {
    external: discordURL,
    name: "NFTs Playground",
  },
];



export const FOOTER_MENU = [
  {
    href: "/contributor",
    label: "Contributors",
  },
  {
    external: mediumURL,
    label: "Docs",
  },
  {
    external: discordURL,
    label: "Community",
  },
];
export const MENU_MOBILE = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/contributor",
    name: "Contributors",
  },
  {
    external: mediumURL,
    name: "Docs",
  },
  {
    external: discordURL,
    name: "Community",
  },
  {
    external: discordURL,
    name: "NFTs Playground",
  },
]

export const FUTURE_SECTION = {
  description: 'Simple, Elegant and Easy to use. Available on iOS, Chrome and more',
  getExt: 'Get Extension',
  imgExt: "svgs/chrome2.svg",
  imgBgMobile: "images/bg-mobile-hero.png",
  linkExt: chromeStoreExtURL
}

export const PREDICT_SECTION = {
  title: "The best way to predict the ‘Fewcha’ is to create it",
  des: 'We research and develop cool products for Aptos - the future of blockchain',
  title2: "Old man said best way to predict ‘Fewcha’ is to create it"
}

export const UNLOCK_SECTION = {
  title: 'The key to unlock the Aptoverse',
  description: 'Fewcha is a web3 wallet that unlocks a universe of applications in Aptos Blockchain',
  content: [
    {
      id: 1,
      label: "Fully Secured",
      des: 'You can store, send and swap Tokens & NFTs with Fewcha Wallet',
      imgPhone: 'images/Iphone12Pro-1.png',
      shape: 'svgs/shape1.svg',
    },
    {
      id: 2,
      label: "Independent Audit",
      des: "Fewcha's safety and security will be thoroughly audited by Verichains Lab",
      imgPhone: 'images/Iphone12Pro-2.png',
      shape: 'svgs/shape2.svg'
    },
    {
      id: 3,
      label: "Provide Web3",
      des: 'Fewcha also provides web3 connection for dApps builders to integrate with Aptos ecosystem in a handy way.',
      imgPhone: 'images/Iphone12Pro-3.png',
      shape: 'svgs/shape3.svg'
    },
    {
      id: 4,
      label: "Privacy matters",
      des: 'We know privacy is a fundamental human right. So only you can access your wallet. You are in control of your funds at all times',
      imgPhone: 'images/Iphone12Pro-4.png',
      shape: 'svgs/shape4.svg',

    },
  ]
}

export const ROADMAP_SECTION = {
  title: "Our roadmap in 2022",
  des: "The below view is an insight into what we're currently working on, what's coming up and what is planned. We will update regularly",
  checkIcon: '/svgs/check-solid.svg',
  descIcon: "/svgs/circle-solid.svg",
  content: [
    ['Initial Research', 'Trend Analytics', 'Tech Possibility Validation'],
    ['Product Conceptualization', 'UI/UX Design', 'Chrome Extension v0.1 & v0.2 Development', 'Web3 Connection v0.1.0 Development (Web3.js)'],
    ['Chrome Extension v0.3 Development', 'Web3 Connection v0.2.0 Development (Web3 React)', 'Developer Guide Document v0.1', 'Security Audit', 'Mobile Prototype v0.1 Development', 'Aptos Improvement Proposal Contributor for Wallet & Web3', 'Aptos SDK Dart v0.1 Development'],
    ['Chrome Extension Official v1.0 (Chrome, Brave, Edge)', 'Firefox Extension Official v1.0', 'Web3 Connection Official v1.0', 'Developer Guide Document Official v.1.0', 'Security Audit', 'Mobile Prototype v0.2 Development', 'Aptos Improvement Proposal Contributor for Wallet & Web3'],
  ]
}

export const INSTALL_SECTION = {
  title: 'Install Fewcha to explore the Aptoverse',
  des: 'You are just 1-click away from an amazing promised world of Aptos. What are you waiting for?',
  more: 'Get Extension',
  linkExt: chromeStoreExtURL
}

export const JOIN_SECTION = {
  title: 'Join us',
  des: 'Fewcha is currently under development and anybody can contribute to the vision by joining our community',
  links: [
    {
      label: "Medium",
      src: "/svgs/medium.svg",
      href: mediumURL,
    },
    {
      label: "Discord",
      src: "/svgs/discord2.svg",
      href: discordURL,
    },
    {
      label: "Twitter",
      src: "/svgs/twitter.svg",
      href: twitterURL,
    },
    {
      label: "Telegram",
      src: "/svgs/telegram2.svg",
      href: telegramURL,
    },
  ]
}

export const MEET_SECTION = {
  title: "Meet our contributors",
  des: "We are a group of talented engineers, designers and strategists with a lot of experiences in blockchain and fintech. We always welcome talents from all over the world to build Fewcha together",
  list: [
    "All",
    "Core (3)",
    "Blockchain (3)",
    "Front-End(2)",
    "Designer (1)",
    "Community(2)",
    "Quality Control(2)"
  ],
  members: [
    {
      srcImg: "/images/contributor_person_1.png",
      name: "Gabriel Lan",
      jobName: "Co-Founder, Chief Executive Officer",
      des: "Everything will be tokenized one day",
      position: 'core'
    },
    {
      srcImg: "/images/contributor_person_2.png",
      name: "Tuan Nguyen",
      jobName: "Co-Founder, Chief Operation Officer",
      des: "Speed is everything",
      position: 'core'
    },
    {
      srcImg: "/images/contributor_person_3.png",
      name: "Trong Dinh",
      jobName: "Chief Strategy Officer",
      des: "Hope is not a strategy. Be prepared",
      position: 'core'
    },
    {
      srcImg: "/images/contributor_person_4.png",
      name: "Pierre",
      jobName: "Blockchain, Chief Technology Officer",
      des: "I build complex blockchain system",
      position: 'blockchain'
    },
    {
      srcImg: "/images/contributor_person_5.png",
      name: "Vien Le",
      jobName: "Blockchain",
      des: "I believe in decentralized future",
      position: 'blockchain'
    },
    {
      srcImg: "/images/contributor_person_6.png",
      name: "Hoa",
      jobName: "Blockchain",
      des: "Happiness is when your code runs without error",
      position: 'blockchain'
    },
    {
      srcImg: "/images/contributor_person_7.png",
      name: "Leon",
      jobName: "Head of Design",
      des: "Good design is invisible and intuitive",
      position: 'design'
    },
    {
      srcImg: "/images/contributor_person_8.png",
      name: "Yueru",
      jobName: "Head of Communication",
      des: "Every problems is made to be solved",
      position: 'community'
    },
    {
      srcImg: "/images/contributor_person_9.png",
      name: "Quoc",
      jobName: "Senior Front-End",
      des: "I love to build beautiful interfaces",
      position: 'font end'
    },
    {
      srcImg: "/images/contributor_person_10.png",
      name: "Chung Nguyen",
      jobName: "Senior Front-End",
      des: "Making beautiful HTML/CSS",
      position: 'font end'
    },
    {
      srcImg: "/images/contributor_person_11.png",
      name: "Pham Anh",
      jobName: "Senior Quality Control",
      des: "Quality is everyone’s responsiblity",
      position: 'tester'
    },
    {
      srcImg: "/images/contributor_person_12.png",
      name: "Lam Tran",
      jobName: "Senior Quality Control",
      des: "Keep highest quality output",
      position: 'tester'
    },
    {
      srcImg: "/images/contributor_person_13.png",
      name: "Galen",
      jobName: "Community Manager",
      des: "Keep everything organized & funny",
      position: 'community'
    },
  ]
}

export const GET_APP_SECTION = {
  title: "Get Fewcha app now!",
  des: "You are just 1-click away from an amazing promised universe of Aptoverse. So what are you waiting for?",
  title2: "Get the extension",
  linkExt: chromeStoreExtURL,
}