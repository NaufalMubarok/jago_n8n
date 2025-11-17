import Navbar from "../components/Navbar"
import projects from "../data/projects.json"
import ProjectsGallery from "../components/ProjectsGallery"
import InstructorSection from "../components/InstructorSection"
import ProjectOutline from "../components/ProjectOutline"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />

      {/* Hero */}
      <header className="max-w-4xl mx-auto text-center px-6 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Jago<span className="text-emerald-600">n8n</span> : Buat 12+ Project Automasi!
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Ubah kerja manual jadi otomasi cerdas dan efisien. Biarkan sistem pintar yang bekerja untukmu.
        </p>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition">
          Mulai Sekarang
        </button>
      </header>

      {/* Galeri horizontal */}
      <section className="mt-0"> 
        <ProjectsGallery />
      </section>

      {/* Instructor Section dengan latar abu-abu agak gelap */}
      <InstructorSection />

      {/* ===== Course Outline (latar putih + rail kiri) ===== */}
     <section className="relative bg-white py-14 md:py-20">
  {/* Rail titik-titik di kiri (global, bukan per kartu) */}
  <div className="outline-rail absolute left-3 md:left-6 top-0 bottom-0 w-3 pointer-events-none" />
  <div className="relative max-w-6xl mx-auto px-6 pl-10 md:pl-14">
    
    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
      Course Outline (Project-Based Learning)
    </h2>

    <div className="mt-10 space-y-10 md:space-y-14">
      {projects.map((p, idx) => (
        <ProjectOutline key={p.id} project={p} index={idx} />
      ))}
    </div>
  </div>
</section>

    </div>
  )
}
