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
              <span className="text-emerald-600">Jago n8n</span> Buat 12+ Project Automasi
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
                  <video
                    className="w-full h-full max-h-[320px] object-cover"
                    controls
                    poster="/images/hero.png"
                  >
                    <source src="/videos/n8n-intro.mp4" type="video/mp4" />
                    Browser kamu tidak mendukung pemutar video.
                  </video>
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
                    <img
                      src={p.image}
                      alt={p.title}
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
      <footer className="py-8 px-6 md:px-20 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} JagoN8n. All rights reserved.
          </p>
          <p>Built untuk membantu kamu lebih fokus ke pekerjaan yang penting.</p>
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
