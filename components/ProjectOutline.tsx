"use client"
import Image from "next/image"

type Section = { title?: string; items: string[] }
type Project = {
  id: string; slug: string; title: string;
  short?: string; content?: string; image: string;
  bullets?: string[]; sections?: Section[];
}

export default function ProjectOutline({ project, index }: { project: Project; index: number }) {
  return (
    <section id={project.slug} className="scroll-mt-24">
      <div className="bg-white rounded-3xl ring-1 ring-gray-200 shadow-sm p-6 md:p-8">
        {/* Badge Proyek */}
        <div className="mb-4">
          <span className="inline-flex items-center bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
            Proyek {index + 1}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Konten kiri */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{project.title}</h2>

            {project.sections ? (
              <div className="space-y-6">
                {project.sections.map((sec, i) => (
                  <div key={i}>
                    {sec.title && <h3 className="font-semibold text-gray-800 mb-2">{sec.title}</h3>}
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      {sec.items.map((it, j) => <li key={j}>{it}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            ) : project.bullets ? (
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            ) : (
              <>
                {project.short && <p className="text-gray-700 text-lg mb-3">{project.short}</p>}
                {project.content && <p className="text-gray-600 leading-relaxed">{project.content}</p>}
              </>
            )}
          </div>

          {/* Gambar kanan */}
          <div className="md:justify-self-end">
            <div className="bg-gray-50 rounded-2xl ring-1 ring-gray-200 shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-auto md:max-w-md object-contain block" />
              {/* Atau pakai <Image ... unoptimized /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
