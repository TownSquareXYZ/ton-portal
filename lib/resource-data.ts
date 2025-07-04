// 资源页面数据配置

// 快速访问类别数据
export const quickAccessItems = [
  {
    icon: "🎓",
    title: "Tutorials",
    description: "Step-by-step guides for all skill levels",
    scrollTo: "learning-paths",
  },
  {
    icon: "📖",
    title: "Documentation",
    description: "Official TON documentation and API references",
    scrollTo: "featured-resources",
  },
  {
    icon: "⚡",
    title: "Quick Start",
    description: "Get started with TON development in minutes",
    scrollTo: "quick-start-guide",
  },
  {
    icon: "👥",
    title: "Community",
    description: "Join developer communities and forums",
    scrollTo: "community-links",
  },
];

// 特色资源数据
export const featuredResourcesItems = [
  {
    icon: "📖",
    title: "TON Developer Documentation",
    description:
      "Comprehensive documentation covering smart contracts, dApps, and blockchain fundamentals. Everything from basic concepts to advanced implementation patterns.",
    tags: [
      "Documentation",
      "API Reference",
      "Smart Contracts",
      "Best Practices",
    ],
    buttonText: "View Documentation",
    buttonColor: "blue" as const,
    url: "https://docs.ton.org/v3/documentation/ton-documentation",
  },
  {
    icon: "⚡",
    title: "Quick Start Guide",
    description:
      "Get up and running with TON development in under 30 minutes. Includes wallet setup, first smart contract deployment, and basic dApp interaction examples.",
    tags: ["Quick Start", "Beginner Friendly", "30 Minutes", "Setup Guide"],
    buttonText: "Start Now",
    buttonColor: "green" as const,
    url: "https://docs.ton.org/v3/guidelines/quick-start/getting-started",
    id: "quick-start-guide",
  },
  {
    icon: "🔧",
    title: "Development Environment Setup",
    description:
      "Complete guide to setting up your TON development environment with all necessary tools, SDKs, and configurations for productive development.",
    tags: ["Setup", "Environment", "Tools", "Configuration"],
    buttonText: "Setup Guide",
    buttonColor: "purple" as const,
    url: "https://docs.ton.org/guidelines/api-sdk",
  },
];

// 学习路径数据
export const learningPathItems = [
  {
    icon: "🎓",
    title: "Beginner Tutorials",
    items: [
      "Your First TON Transaction",
      "Creating a Simple Smart Contract",
      "Building Your First dApp",
      "Wallet Integration Tutorial",
      "Understanding TON Architecture",
    ],
    buttonText: "Start Tutorials",
    buttonColor: "green" as const,
    url: "https://docs.ton.org/v3/guidelines/get-started-with-ton",
  },
  {
    icon: "🔨",
    title: "Hands-on Development",
    items: [
      "Smart Contract Development Tutorial",
      "Frontend Integration Workshop",
      "Testing and Debugging Guide",
      "Deployment Best Practices",
      "Real-world Project Examples",
    ],
    buttonText: "Build Projects",
    buttonColor: "blue" as const,
    url: "https://docs.ton.org/guidelines/smat-contracts-guidelines",
  },
  {
    icon: "🎯",
    title: "Advanced Tutorials",
    items: [
      "Multi-Contract Systems",
      "DeFi Protocol Development",
      "Advanced TON Features",
      "Performance Optimization",
      "Contributing to Open Source",
    ],
    buttonText: "Master Skills",
    buttonColor: "purple" as const,
    url: "https://docs.ton.org/guidelines/advanced-asset-processing",
  },
];

// 社区链接数据
export const communityItems = [
  {
    icon: "💬",
    title: "Telegram",
    description: "Official TON Chat",
    href: "https://t.me/addlist/1r5Vcb8eljk5Yzcy",
  },
  {
    icon: "💾",
    title: "GitHub",
    description: "Open Source Code",
    href: "https://github.com/ton-blockchain",
  },
  {
    icon: "🐦",
    title: "Twitter",
    description: "Official Updates",
    href: "https://x.com/ton_blockchain",
  },
  {
    icon: "🎥",
    title: "YouTube",
    description: "Video Tutorials",
    href: "https://www.youtube.com/@the_open_network",
  },
];
