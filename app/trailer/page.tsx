import Link from "next/link"

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

export default function TrailerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B0C10] to-[#0F1115]">
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24 max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 group"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            <ArrowLeftIcon />
          </span>
          Back to home
        </Link>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-[fadeIn_1s_ease-out]">
            Trappist1AI Universe
          </h1>
          <p className="text-xl text-zinc-400 mb-12 animate-[fadeIn_1s_ease-out_0.2s_both]">
            Experience the future of connected intelligence
          </p>

          <div className="aspect-video rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 ring-1 ring-white/10 flex items-center justify-center relative overflow-hidden group animate-[fadeIn_1s_ease-out_0.4s_both]">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-rose-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center relative z-10">
              <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 mx-auto mb-4 flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                <svg className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors">Trailer coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
