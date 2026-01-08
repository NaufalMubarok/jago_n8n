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
  price?: number;
  promoDiscount?: number;
  couponDiscount?: number;
};

const projects = projectsData as Project[];

type FAQProps = {
  q: string;
  a: string;
};

function FAQ({ q, a }: FAQProps) {
  return (
    <div className="border border-slate-100 rounded-2xl p-4 md:p-5 bg-slate-50/60">
      <h4 className="font-semibold text-sm md:text-base text-slate-900">
        {q}
      </h4>
      <p className="text-xs md:text-sm text-slate-600 mt-2 leading-relaxed">
        {a}
      </p>
    </div>
  );
}

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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-slate-900 pb-20">
      <Navbar />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-8 lg:px-12 pt-24">
        {/* ================= LEFT CONTENT ================= */}
        <div className="md:col-span-2 space-y-8 md:space-y-10">
            <button
            type="button"
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:text-emerald-600 bg-white/80 hover:bg-white border border-slate-200 hover:border-emerald-300 rounded-xl transition-all duration-300 group hover:shadow-md"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Kembali</span>
          </button>

          {/* HEADER */}
          <section className="rounded-3xl border border-slate-100 bg-white shadow-sm p-5 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-slate-900">
              {project.title.replace(/^\d+\.\s+/, "")}
            </h1>
            <p className="text-sm md:text-base text-slate-600">
              {project.short}
            </p>

            <div className="relative w-full h-[450px] mt-6 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <Image
                src={project.image.replace('.png', 'b.png')}
                alt={project.title}
                fill
                className="object-contain p-4 md:p-6"
              />
            </div>
          </section>

          {/* WHAT YOU WILL LEARN */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900">
              Tentang Produk Ini
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              {project.content}
            </p>

            <div className="space-y-6">
              {project.sections.map((sec, i) => (
                <div key={i}>
                  <h3 className="text-base md:text-lg font-semibold text-emerald-600 mb-2">
                    {sec.title}
                  </h3>
                  <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-slate-700">
                    {sec.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* WHO IS THIS FOR */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900">
              Cocok Untuk?
            </h2>
            <ul className="list-disc ml-5 text-sm md:text-base text-slate-700 space-y-2">
              <li>UMKM & pebisnis online</li>
              <li>Freelancer otomasi</li>
              <li>Kreator konten</li>
              <li>Pemilik toko digital</li>
              <li>Pemula tanpa coding</li>
            </ul>
          </section>

          {/* WHAT YOU GET */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900">
              Yang Didapat
            </h2>
            <ul className="list-disc ml-5 text-sm md:text-base text-slate-700 space-y-2">
              <li>File n8n lengkap</li>
              <li>Panduan instalasi</li>
              <li>Video panduan</li>
              <li>Dukungan Telegram</li>
              <li>Update selamanya</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="rounded-3xl border border-slate-100 bg-white p-5 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-slate-900">
              Tanya Jawab
            </h2>

            <div className="space-y-4">
              <FAQ
                q="Cocok untuk pemula?"
                a="Sangat cocok, ada panduan lengkap."
              />
              <FAQ
                q="Dapat update?"
                a="Ya, update gratis selamanya."
              />
              <FAQ
                q="Cara dapat filenya?"
                a="Setelah bayar, langsung dapat link drivenya."
              />
            </div>
          </section>
        </div>

        {/* ================= RIGHT SIDEBAR (STICKY CTA) ================= */}
        <div>
          <div className="sticky top-28 rounded-3xl border border-emerald-500/60 bg-slate-950 text-slate-50 p-5 sm:p-6 md:p-7 shadow-[0_18px_60px_rgba(15,118,110,0.45)] space-y-4 sm:space-y-5">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-2">
                Harga Produk
              </p>
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-bold text-emerald-400">
                    Rp 50.000
                  </h3>
                </div>
                <p className="text-[11px] text-slate-400">
                  Harga spesial untuk produk satuan
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300">
              Dapat file lengkap, panduan, dan dukungan sampai berhasil.
            </p>

            <a
              href={`/checkout?product=${project.slug}`}
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3 sm:py-3.5 rounded-xl font-semibold shadow-lg shadow-emerald-500/40 transition text-sm"
            >
              Beli Sekarang
            </a>

            <ul className="text-xs text-slate-300 space-y-1">
              <li>• File n8n siap pakai</li>
              <li>• Update selamanya</li>
              <li>• Dukungan Telegram</li>
            </ul>

            <p className="text-[11px] text-slate-400">
              Garansi dukungan sampai berhasil digunakan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}