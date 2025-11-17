import Link from 'next/link'
import Image from 'next/image'

type Project = {
  id: string
  slug: string
  title: string
  short: string
  image: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <div className="md:flex">
        <div className="p-6 md:flex-1">
          <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mb-3">
            Proyek
          </div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-gray-600 mt-3">{project.short}</p>
        </div>
        <div className="relative h-44 md:h-auto md:w-56">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  )
}
