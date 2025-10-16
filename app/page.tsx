import Link from "next/link"
import Image from "next/image"
import { PRODUCTS } from "@/config/products"
import { SITE } from "@/config/site"
import ProductCard from "@/components/ProductCard"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 md:px-10 lg:px-16 py-12 md:py-16 min-h-[115vh] md:min-h-[120vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#0D0E12] to-[#0F1115]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,122,69,0.05),transparent_50%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-400/40 rounded-full animate-[float_8s_ease-in-out_infinite_2s]" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-rose-400/40 rounded-full animate-[float_7s_ease-in-out_infinite_1s]" />
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-[float_9s_ease-in-out_infinite_3s]" />
          <div className="absolute top-1/2 left-1/5 w-0.5 h-0.5 bg-cyan-400/30 rounded-full animate-[float_10s_ease-in-out_infinite_1.5s]" />
          <div className="absolute bottom-1/4 right-1/5 w-0.5 h-0.5 bg-pink-400/30 rounded-full animate-[float_11s_ease-in-out_infinite_2.5s]" />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[28%] md:-translate-y-[22%] lg:-translate-y-[18%] w-[640px] h-[640px] md:w-[1000px] md:h-[1000px] lg:w-[1300px] lg:h-[1300px] pointer-events-none">
          <div className="relative w-full h-full animate-[float_12s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-950/20 via-black/30 to-red-900/15 blur-[120px] animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-[5%] rounded-full bg-gradient-to-br from-red-900/25 via-black/25 to-red-950/20 blur-[100px] animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-red-800/30 via-red-950/30 to-black/20 blur-[80px] animate-[pulse_6s_ease-in-out_infinite]" />
            <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-red-700/35 via-red-900/35 to-red-950/30 blur-[60px] animate-[pulse_5s_ease-in-out_infinite_1s]" />

            <div className="absolute inset-[25%] rounded-full overflow-hidden">
              {/* Atmospheric edge glow - darker red */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-800/50 via-red-900/40 to-transparent animate-[pulse_4s_ease-in-out_infinite]" />

              {/* Logo image with transparency */}
              <Image
                src="/images/trappist1ai-logo.jpg"
                alt="Trappist1AI"
                fill
                className="object-cover opacity-95 mix-blend-screen scale-110"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-br from-red-700/25 via-transparent to-red-900/25 animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
              <div className="absolute inset-0 bg-gradient-to-tl from-red-800/20 via-transparent to-red-950/20 animate-[pulse_4s_ease-in-out_infinite_1.5s]" />
            </div>

            <div className="absolute inset-[23%] rounded-full border border-red-800/30 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-[22%] rounded-full border border-red-900/20 animate-[spin_35s_linear_infinite_reverse]" />
            <div className="absolute inset-[21%] rounded-full border border-red-950/10 animate-[spin_45s_linear_infinite]" />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-[420px] md:pt-[520px] lg:pt-[560px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 text-balance animate-[fadeIn_1s_ease-out] drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
            The Future of Intelligence Has{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-rose-400 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
              Multiple Worlds
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-6 text-pretty animate-[fadeIn_1s_ease-out_0.2s_both] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            {SITE.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeIn_1s_ease-out_0.4s_both]">
            <Link
              href="#worlds"
              className="px-8 py-3.5 rounded-xl bg-zinc-900/70 text-white ring-1 ring-white/10 hover:ring-white/20 hover:bg-zinc-900 transition-all duration-300 font-medium hover:scale-105 active:scale-95"
            >
              Explore the System
            </Link>
            <Link
              href="/trailer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:opacity-90 transition-all duration-300 font-medium shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95"
            >
              Watch Trailer
            </Link>
          </div>
        </div>
      </section>

      {/* Four Worlds Section */}
      <section id="worlds" className="relative px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115] to-[#0B0C10]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Four Worlds. One Intelligence.</h2>
            <p className="text-lg text-zinc-400">Hover a planet to preview. Click to enter its world.</p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
