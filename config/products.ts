export type Product = {
  name: string
  slug: "vizrec" | "qorscend" | "anivrse" | "igraverse" | "fanstosee"
  tagline: string
  description: string
  features: string[]
  links: {
    app?: string
    docs?: string
    demo?: string
  }
  colors: {
    base: string
    gradientFrom: string
    gradientTo: string
    glow: string
  }
  logo?: string
}

export const PRODUCTS: Product[] = [
  {
    name: "Vizrec",
    slug: "vizrec",
    tagline: "Build the minds of machines",
    description: "No-code logic, validation, and sensor fusion for robotics. Design → verify → deploy.",
    features: ["SentraCore logic builder", "IronGate validation", "SensorGrid fusion"],
    links: { app: "https://your-vizrec-app-url.com", docs: "https://your-vizrec-docs.com" },
    colors: { base: "#B39CFF", gradientFrom: "#2A2139", gradientTo: "#151627", glow: "rgba(179,156,255,0.35)" },
    logo: "/images/vizrec-logo.jpg",
  },
  {
    name: "Qorscend",
    slug: "qorscend",
    tagline: "Harness quantum power",
    description: "Transpile, benchmark, and clean quantum code. Your CUDA/LLVM for quantum.",
    features: ["QCode Convert", "QBenchmark Live", "QData Clean"],
    links: { app: "https://www.qorscend.com/", docs: "https://www.qorscend.com/" },
    colors: { base: "#FF7A45", gradientFrom: "#2A1B12", gradientTo: "#121212", glow: "rgba(255,122,69,0.35)" },
    logo: "/images/qorscend-logo.jpg",
  },
  {
    name: "Anivrse",
    slug: "anivrse",
    tagline: "Animate your imagination",
    description: "Create anime scenes & trailers. Publish, grow fans, and monetize.",
    features: ["Text-to-anime", "Character builder", "Creator economy"],
    links: {
      app: "https://your-anivrse-app-url.com",
      docs: "https://your-anivrse-docs.com",
      demo: "https://your-anivrse-demo.com",
    },
    colors: { base: "#FF7BC0", gradientFrom: "#2a1430", gradientTo: "#14121f", glow: "rgba(255,123,192,0.35)" },
    logo: "/images/anivrse-logo.jpg",
  },
  {
    name: "Igraverse",
    slug: "igraverse",
    tagline: "Play. Compete. Evolve.",
    description: "Motion capture from video, animation rigs, and automated QA for games.",
    features: ["Reel2Rig / Rigtopia", "BugSmith AI", "Compile Cloud"],
    links: { app: "https://www.igraverse.com/" },
    colors: { base: "#36D7B7", gradientFrom: "#0e1f26", gradientTo: "#0a0f14", glow: "rgba(54,215,183,0.35)" },
    logo: "/images/igraverse-logo.jpg",
  },
]
