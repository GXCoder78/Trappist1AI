"use client"
import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/config/products"

function ArrowRightIcon() {
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
      className="transition-transform group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/${product.slug}`}
      className="group relative rounded-3xl p-8 md:p-10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 ring-1 ring-white/10 hover:ring-white/20 overflow-hidden hover:scale-[1.02] hover:-translate-y-1"
      style={{
        background: `linear-gradient(135deg, ${product.colors.gradientFrom} 0%, ${product.colors.gradientTo} 100%)`,
      }}
    >
      <div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-all duration-700"
        style={{ background: product.colors.base }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700 delay-100"
        style={{ background: product.colors.glow }}
        aria-hidden="true"
      />

      <div className="relative h-24 w-24 mb-6 group-hover:scale-110 transition-transform duration-700">
        {product.logo ? (
          <div className="relative w-full h-full">
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              style={{ background: product.colors.glow }}
            />

            {/* Perfectly circular logo container */}
            <div className="absolute inset-0 rounded-full overflow-hidden backdrop-blur-sm bg-black/30 ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: `radial-gradient(circle at center, ${product.colors.base}, transparent)` }}
              />

              {/* Logo image - using object-contain and padding to prevent distortion */}
              <div className="absolute inset-0 p-4">
                <Image
                  src={product.logo || "/placeholder.svg"}
                  alt={`${product.name} logo`}
                  fill
                  className="object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Surface glow overlay */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 30% 30%, ${product.colors.base}, transparent)` }}
              />
            </div>

            {/* Orbital ring */}
            <div
              className="absolute inset-0 rounded-full border opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{ borderColor: product.colors.glow }}
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${product.colors.base}, ${product.colors.glow})`,
              boxShadow: `0 0 40px ${product.colors.glow}, 0 0 80px ${product.colors.glow}, inset -5px -5px 20px rgba(0,0,0,0.3)`,
            }}
          />
        )}
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
          {product.name}
        </h3>
        <p className="text-zinc-400 text-base md:text-lg mb-6 group-hover:text-zinc-300 transition-colors">
          {product.tagline}
        </p>

        <div className="flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition-colors">
          <span>Enter World</span>
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  )
}
