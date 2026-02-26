const site = {
  // --- Site Metadata ---
  meta: {
    title: "Breeze",
    description: "A minimal Astro theme for personal websites",
    author: "Your Name",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "Writing", subtitle: "Blog", href: "/posts" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "Friends", subtitle: "Links", href: "/friends" },
    { name: "About", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    { name: "GitHub", href: "https://github.com/your-username", icon: "mdi:github" },
    { name: "Email", href: "mailto:hello@example.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "👋 Hello, I'm Breeze",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      'A minimal personal website theme built with <span class="font-medium text-foreground underline decoration-primary/30">Astro</span> and <span class="font-medium text-foreground underline decoration-primary/30">Tailwind CSS</span>.',
    cards: [
      { icon: "mdi:explore", label: "Status", value: "Building something cool" },
      { icon: "mdi:location", label: "Location", value: "Earth" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2025 Breeze",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
  },

  // --- Tools Page Data ---
  tools: [
    { name: "development", items: ["VS Code", "Terminal", "Chrome", "Git"] },
    { name: "design", items: ["Figma"] },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "Notes, thoughts, and technical musings",
    projectsTitle: "Projects",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "Stack",
    aboutTitle: "About",
    aboutDescription: "About this site and its author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search posts, tags, or commands...",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
