"use client"

import projects from "../data/projects.json"

export default function ProjectsGallery() {
  // gandakan project untuk animasi loop
  const loop = [...projects, ...projects]

  const handleClick = (slug: string) => {
    const target = document.getElementById(slug)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* marquee container */}
      <div className="marquee flex gap-6 px-6 py-8">
        {loop.map((p, i) => (
          <div
            key={`${p.id}-${i}`}
            className="flex-none w-48 h-48 bg-white rounded-2xl shadow-md overflow-hidden relative cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleClick(p.slug)}
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover block"
            />
            {/* Hapus judul visualnya tapi tetap ada datanya */}
            <div className="absolute bottom-2 left-2 text-white text-sm font-semibold drop-shadow-lg opacity-0 select-none">
              {p.title}
            </div>

          </div>
        ))}
      </div>

      {/* animasi marquee */}
      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marqueeAnim 36s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeAnim {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
