import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import projectsData from "../../data/projects.json";

type ProjectSection = {
  title: string;
  items: string[];
};

type Project = {
  id: string;
  slug: string;
  title: string;
  short: string;
  image: string;
  content: string;
  sections: ProjectSection[];
};

const projects = projectsData as Project[];

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return (
      <div>
        <Navbar />
        <div className="max-w-3xl mx-auto p-10">Memuat produk...</div>
      </div>
    );
  }

  const slugStr = Array.isArray(slug) ? slug[0] : slug;
  const project = projects.find((p) => p.slug === slugStr);

  if (!project) {
    return (
      <div>
        <Navbar />
        <div className="max-w-3xl mx-auto p-10">Produk tidak ditemukan.</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20 pt-16">
      <Navbar />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-6 md:p-12">
        {/* ================= LEFT CONTENT ================= */}
        <div className="md:col-span-2 space-y-10">
          <button
            type="button"
            onClick={() => router.push("/#products")}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <span className="mr-2 text-lg">←</span>
            Kembali ke daftar workflow
          </button>

          {/* HEADER */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-600 text-lg">{project.short}</p>

            <div className="relative w-full h-[450px] mt-6 rounded-lg overflow-hidden bg-white border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* WHAT YOU WILL LEARN */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Tentang Workflow Ini</h2>
            <p className="text-gray-600 mb-6">{project.content}</p>

            {project.sections.map((sec, i) => (
              <div key={i} className="mb-8">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  {sec.title}
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  {sec.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* WHO IS THIS FOR */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Cocok Untuk Siapa?</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>UMKM & pebisnis online</li>
              <li>Freelancer automation</li>
              <li>Content creator</li>
              <li>Owner toko / jasa digital</li>
              <li>Orang tanpa skill coding</li>
            </ul>
          </div>

          {/* WHAT YOU GET */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Yang Kamu Dapatkan</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>File workflow n8n lengkap</li>
              <li>Panduan instalasi</li>
              <li>Video walkthrough</li>
              <li>Akses support Telegram</li>
              <li>Update workflow selamanya</li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>

            <FAQ
              q="Apakah workflow ini cocok untuk pemula?"
              a="Sangat cocok, semua dijelaskan step-by-step."
            />
            <FAQ
              q="Apakah saya dapat update?"
              a="Ya, semua update gratis selamanya."
            />
            <FAQ
              q="Bagaimana cara mendapatkan file workflow?"
              a="Setelah pembayaran sukses, Anda langsung mendapatkan link download."
            />
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR (STICKY CTA) ================= */}
        <div>
          <div className="sticky top-28 bg-white p-6 rounded-xl shadow-md border space-y-4">
            <h3 className="text-2xl font-bold">Rp 199.000</h3>
            <p className="text-gray-600">Dapatkan workflow lengkap + panduan.</p>

            <a
              href={`/checkout?product=${project.slug}`}
              className="block text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              Beli Workflow Ini
            </a>

            <p className="text-xs text-gray-400">
              Garansi refund 100% jika workflow tidak berfungsi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

type FAQProps = {
  q: string;
  a: string;
};

function FAQ({ q, a }: FAQProps) {
  return (
    <div className="border-b py-4">
      <h4 className="font-semibold">{q}</h4>
      <p className="text-gray-600 mt-1">{a}</p>
    </div>
  );
}

