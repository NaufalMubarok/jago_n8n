import Image from "next/image";
import projects from "../data/projects.json";
import Navbar from "../components/Navbar";

type Project = {
  id: string;
  slug: string;
  title: string;
  short: string;
  image: string;
};

interface BenefitCardProps {
  title: string;
  desc: string;
}

interface StepProps {
  num: string;
  title: string;
  desc: string;
}

interface FAQProps {
  q: string;
  a: string;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 md:px-20 pt-28 pb-24 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-60" />
          <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-sky-200 blur-3xl opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.15fr,1fr] gap-12 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Library workflow n8n siap pakai
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-emerald-600">Jago n8n</span> Buat 12+ Project
              Automasi
            </h1>

            <p className="mt-5 text-base md:text-lg text-slate-600 max-w-xl">
              Kumpulan workflow n8n yang sudah teruji untuk keuangan, chatbot,
              sosial media, dan operasional harian. Tinggal impor, sesuaikan
              sedikit, dan jalankan.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm md:text-base font-semibold shadow-md shadow-emerald-500/30 transition"
              >
                Lihat semua workflow
              </a>
              <a
                href="#pricing"
                className="px-6 py-3 rounded-xl border border-slate-200 bg-white/70 text-sm md:text-base font-medium hover:border-emerald-400 hover:text-emerald-700 transition"
              >
                Beli paket lengkap
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div>
                <div className="font-semibold text-slate-900">12+ workflow</div>
                <div>siap pakai & bisa dimodifikasi</div>
              </div>
              <div className="h-9 w-px bg-slate-200 hidden sm:block" />
              <div>
                <div className="font-semibold text-slate-900">
                  Lifetime access
                </div>
                <div>update selamanya & support pribadi</div>
              </div>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative">
            <div className="relative rounded-3xl border border-slate-100 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm p-4 md:p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Intro video n8n
                </span>
              </div>

              <div className="rounded-2xl bg-slate-950 p-4 md:p-5 text-xs text-slate-100">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                    Apa itu n8n?
                  </span>
                  <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/40">
                    Demo workflow nyata
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black">
                  <div className="relative w-full pt-[56.25%]">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/Fy1UCBcgF2o?start=34"
                      title="Intro n8n"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 md:-left-10 rounded-2xl bg-white shadow-lg border border-slate-100 px-4 py-3 text-xs md:text-sm text-slate-700 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-lg">
                ⚡
              </div>
              <div>
                <div className="font-semibold">Hemat ratusan jam manual work</div>
                <div>Tanpa bikin workflow dari nol.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="px-6 md:px-20 py-10 border-t border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm md:text-base text-slate-500">
            Dipakai oleh praktisi dari berbagai bidang:
          </p>
          <div className="flex flex-wrap gap-5 md:gap-8 text-xs md:text-sm font-medium text-slate-400">
            <span className="uppercase tracking-wide">Automation Freelancer</span>
            <span className="uppercase tracking-wide">SMB Owners</span>
            <span className="uppercase tracking-wide">Agency & Creator</span>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className="px-6 md:px-20 py-24 bg-slate-950 text-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
                Workflow Library
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Workflow siap pakai untuk use-case nyata.
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-400 max-w-xl">
                Setiap workflow dilengkapi dokumentasi, sehingga kamu bisa
                mengerti alurnya dan mengembangkan sendiri sesuai kebutuhan.
              </p>
            </div>
            <p className="text-xs md:text-sm text-slate-500 max-w-sm">
              Klik salah satu workflow untuk melihat detail, alur node,
              integrasi yang dipakai, dan video penjelasan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {(projects as Project[]).map((p) => (
              <a
                key={p.id}
                href={`/projects/${p.slug}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-emerald-400 transition transform hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.8)]"
              >
                <div className="p-4 pb-3">
                  <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={400}
                      height={160}
                      className="w-full h-40 object-cover group-hover:scale-[1.02] transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="font-semibold text-base md:text-lg mb-1 text-white">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 line-clamp-3">
                    {p.short}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>Detail workflow & panduan</span>
                    <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                      Lihat detail →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="px-6 md:px-20 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase mb-3">
              Kenapa n8n + workflow siap pakai
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Belajar automation tanpa teori berbelit.
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
              Fokus ke implementasi nyata. Workflow yang kamu dapatkan memang
              dipakai sehari-hari oleh praktisi untuk menghemat waktu dan biaya.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              title="Mulai tanpa coding"
              desc="Drag & drop node, sambungkan ke tool favoritmu (Telegram, WhatsApp, Google Sheet, Notion, dan lainnya)."
            />
            <BenefitCard
              title="Belajar dari real project"
              desc="Bukan contoh abstrak. Semua contoh diambil dari use-case beneran: bisnis, agency, freelancer, dan creator."
            />
            <BenefitCard
              title="Bisa dikembangkan"
              desc="Setelah workflow jalan, kamu bisa menggandakan, menggabungkan, atau menambah cabang automasi sendiri."
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="px-6 md:px-20 py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase mb-3">
              Cara kerja
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Dari beli ke workflow jalan, dalam hitungan menit.
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
              Tanpa perlu kuasai semua node n8n dulu. Ikuti alur yang sudah
              disiapkan, sambungkan ke akunmu, dan langsung jalankan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Step
              num="1"
              title="Pilih workflow"
              desc="Pilih workflow yang paling dekat dengan kebutuhan bisnismu: keuangan, chatbot, CRM, atau lainnya."
            />
            <Step
              num="2"
              title="Ikuti panduan"
              desc="Import file, isi credential, dan lakukan penyesuaian kecil lewat panduan video + dokumentasi."
            />
            <Step
              num="3"
              title="Jalankan & scale"
              desc="Aktifkan workflow, biarkan n8n bekerja, dan kembangkan automasi baru dari contoh yang sudah berjalan."
            />
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section
        id="pricing"
        className="px-6 md:px-20 py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-emerald-500/60 bg-slate-900/70 p-8 md:p-10 shadow-[0_18px_60px_rgba(15,118,110,0.45)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
                  Paket lengkap
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Dapatkan semua workflow sekaligus.
                </h2>
                <p className="text-sm md:text-base text-slate-300 max-w-xl">
                  Satu kali bayar untuk akses ke semua workflow, termasuk update
                  ke depan dan support jika kamu mentok saat implementasi.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  <li>• 12+ workflow siap pakai, bisa dikembangkan.</li>
                  <li>• Akses file & update selamanya.</li>
                  <li>• Support via Telegram jika ada kendala.</li>
                </ul>
              </div>

              <div className="md:text-right">
                <div className="text-sm text-slate-400 mb-1">
                  Investasi sekali, manfaat berkali-kali:
                </div>
                <div className="flex items-baseline gap-2 md:justify-end">
                  <span className="text-3xl md:text-4xl font-bold text-emerald-400">
                    Rp 199.000
                  </span>
                </div>

                <a
                  href="/checkout"
                  className="mt-5 inline-flex items-center justify-center px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/40 transition text-sm md:text-base"
                >
                  Beli semua workflow sekarang
                </a>

                <p className="mt-3 text-xs text-slate-400">
                  Jika workflow tidak bisa digunakan sama sekali, kamu bisa
                  mengajukan bantuan sampai workflow jalan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="px-6 md:px-20 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Pertanyaan yang sering ditanyakan.
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
              Kalau masih ragu, beberapa pertanyaan ini mungkin bisa membantu.
            </p>
          </div>

          <div className="space-y-6">
            <FAQ
              q="Apakah cocok untuk pemula yang belum pernah pakai n8n?"
              a="Sangat cocok. Workflow sudah disiapkan dengan penjelasan step-by-step, jadi kamu tinggal ikuti alurnya."
            />
            <FAQ
              q="Apakah akses ke workflow berlaku selamanya?"
              a="Ya. Kamu mendapatkan akses lifetime ke file workflow dan update perbaikan yang dilakukan ke depannya."
            />
            <FAQ
              q="Apakah ada bantuan kalau saya mentok saat setup?"
              a="Ada. Kamu bisa menghubungi kami via Telegram, dan akan dibantu sampai workflow benar-benar jalan."
            />
            <FAQ
              q="Apakah saya perlu skill coding?"
              a="Tidak wajib. Selama bisa mengikuti instruksi dasar, kamu sudah bisa menjalankan workflow yang ada."
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-16 px-6 md:px-20 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 md:grid-cols-4 mb-10">
            {/* About */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo-n8n.png"
                  alt="JagoN8n Logo"
                  width={32}
                  height={32}
                  className="h-7 w-auto"
                />
            <span className="font-bold text-2xl">
            Jago<span className="text-green-600">n8n</span>
          </span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Platform workflow n8n siap pakai untuk automasi bisnis, chatbot, dan operasional harian.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4 text-sm">Navigasi</h4>
              <ul className="space-y-2.5 text-xs md:text-sm">
                <li>
                  <a href="#products" className="text-slate-600 hover:text-emerald-600 transition">
                    Workflow Library
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-slate-600 hover:text-emerald-600 transition">
                    Harga
                  </a>
                </li>
                <li>
                  <a href="/checkout" className="text-slate-600 hover:text-emerald-600 transition">
                    Beli Sekarang
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4 text-sm">Kontak Kami</h4>
              <ul className="space-y-2.5 text-xs md:text-sm">
                <li>
                  <a
                    href="mailto:halo@jagon8n.com"
                    className="text-slate-600 hover:text-emerald-600 transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    halo@jagon8n.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6287812243298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-emerald-600 transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    +62 878-1224-3298
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4 text-sm">Ikuti Kami</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/jagon8n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-400 transition"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://t.me/jagon8n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-400 transition"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@jagon8n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-400 transition"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Dapatkan tips & update workflow terbaru
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} JagoN8n. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-600 transition">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-emerald-600 transition">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function BenefitCard({ title, desc }: BenefitCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-2 text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ num, title, desc }: StepProps) {
  return (
    <div className="text-center md:text-left">
      <div className="inline-flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 w-10 h-10 text-base font-semibold mb-4">
        {num}
      </div>
      <h3 className="font-semibold text-xl mb-2 text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

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

