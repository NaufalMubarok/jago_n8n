import { useRouter } from 'next/router'
import projects from '../../data/projects.json'
import Navbar from '../../components/Navbar'
import Image from 'next/image'


export default function ProjectDetail() {
    const router = useRouter()
    const { slug } = router.query
    const project = projects.find((p) => p.slug === slug)


    if (!project) {
        return (
            <div>
                <Navbar />
                <div className="max-w-4xl mx-auto p-8">Project tidak ditemukan.</div>
            </div>
        )
    }


    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow mt-8">
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-gray-600 mt-4">{project.short}</p>
                <div className="mt-6 w-full h-72 relative">
                    <Image src={project.image} alt={project.title} fill className="object-contain rounded" />
                </div>
                <div className="prose mt-6">
                    <p>{project.content}</p>
                    <p>Tambahkan instruksi detail di sini sesuai isi folder workflow mu.</p>
                </div>
            </div>
        </div>
    )
}