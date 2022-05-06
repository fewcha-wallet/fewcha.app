export const MENUS = [
  {
    href: '/features',
    name: 'Features'
  },
  {
    href: '/blog',
    name: 'Blog'
  },
  {
    href: '/support',
    name: 'Support'
  }
]

export const BROWSERS = [
  {
    label: 'Chrome',
    url: '/svgs/chrome.svg',
  },
  {
    label: 'Brave',
    url: '/svgs/brave.svg',
  },
  {
    label: 'Firefox',
    url: '/svgs/firefox.svg',
  },{
    label: 'Microsoft Edge',
    url: '/svgs/microsoft-edge.svg',
  }

]

export const ROADMAPS = [
  {
    label: '✅ Completed',
    cards: [
      {
        title: 'Wallet Prototype 1.0',
        date: 'MAY 2022',
        list: [
          'Chrome, Brave, Edge, Firefox',
          'Wallet control (mnemomic, private key)',
          'Contact addresses book',
          'Change network RPC',
          'Faucet'
        ]
      }
    ]
  },
  {
    label: '⏱ In progress',
    cards: [
      {
        title: 'Wallet Prototype 1.1',
        date: 'MAY 2022',
        list: [
          'Token listings',
          'NFTs listings',
          'Send Token & NFTs',
          'Receive Token & NFTs',
          'Integrate with Aptos Web3.js'
        ]
      },
      {
        title: 'Aptos Web3',
        date: 'MAY 2022',
        list: [
          'Integrate with official Web3.js',
          'Websites that can connect, make transactions',
        ]
      }
    ]
  },
   {
    label: '💭 Planned',
    cards: [
      {
        title: 'Mobile version',
        date: 'JUNE 2022',
        list: []
      },
      {
        title: 'Swap',
        date: 'JUNE 2022',
        list: []
      }
    ]
  },
]

export const FOOTER_MENU = [
  {
    title: 'Product',
    list: [
      {
        href: '/',
        label: 'Overview'
      },
      {
        href: '/',
        label: 'Download'
      },
      {
        href: '/',
        label: 'Support'
      },
      {
        href: '/',
        label: 'Feature Requests'
      },
    ]
  },
  {
    title: 'Resources',
    list: [
      {
        href: '/',
        label: 'Blog'
      },
      {
        href: '/',
        label: 'Docs'
      },
      {
        href: '/',
        label: 'Status'
      },
      {
        href: '/',
        label: 'Terms & Privacy'
      },
    ]
  },
  {
    title: 'Company',
    list: [
      {
        href: '/',
        label: 'About'
      },
      {
        href: '/',
        label: 'Jobs'
      },
      {
        href: '/',
        label: 'Press Kit'
      },
    ]
  }
]