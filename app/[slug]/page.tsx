import { PRODUCTS } from "@/config/products"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

function ArrowLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </svg>
  )
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B0C10] to-[#0F1115]">
      <div className="px-6 md:px-10 lg:px-16 py-8 md:py-12 max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
          style={{ marginBottom: "60px" }}
        >
          <span className="transition-transform group-hover:-translate-x-1">
            <ArrowLeftIcon />
          </span>
          Back to all worlds
        </Link>

        <div className="relative">
          {/* Background glow */}
          <div
            className="absolute -inset-20 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ background: product.colors.base }}
            aria-hidden="true"
          />

          <div className="relative">
            <div className="relative h-32 w-32 md:h-40 md:w-40 mb-6 animate-[float_6s_ease-in-out_infinite]">
              {/* Glow effect behind logo */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-60"
                style={{ background: product.colors.glow }}
              />
              {/* Logo container with circular mask */}
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/10 backdrop-blur-sm">
                <Image
                  src={`/images/${product.slug}-logo.jpg`}
                  alt={`${product.name} Logo`}
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{product.name}</h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-5">{product.tagline}</p>
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-3">Key Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className="h-2 w-2 rounded-full mt-2 animate-pulse"
                      style={{ background: product.colors.base }}
                    />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              {product.links.app && (
                <a
                  href={product.links.app}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: product.colors.base,
                    boxShadow: `0 4px 20px ${product.colors.glow}`,
                  }}
                >
                  Launch App
                </a>
              )}
              {product.links.docs && (
                <a
                  href={product.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white/5 text-white ring-1 ring-white/10 hover:ring-white/20 font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  View Docs
                </a>
              )}
              {product.links.demo && (
                <a
                  href={product.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white/5 text-white ring-1 ring-white/10 hover:ring-white/20 font-medium transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
