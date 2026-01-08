import Image from "next/image";
import projects from "../data/projects.json";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  slug: string;
  title: string;
  short: string;
  image: string;
};

interface BenefitCardProps {
  icon: string;
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 md:px-20 pt-28 pb-24 bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-300 blur-3xl opacity-60 animate-float"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div
            className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-sky-200 to-blue-300 blur-3xl opacity-40 animate-float"
            style={{
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
              animationDelay: '1s'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.15fr,1fr] gap-12 items-center">
          {/* Left: copy */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Koleksi n8n Siap Pakai
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-emerald-600">Jago n8n</span> Buat 11+ Produk
                Otomasi
              </h1>

              <p className="mt-5 text-base md:text-lg text-slate-600 max-w-xl">
                Kumpulan alur kerja n8n teruji untuk keuangan, chatbot,
                sosial media, dan operasional. Lihat vidio langkah demi langkah atau impor dan jalankan.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("products");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm md:text-base font-semibold shadow-md shadow-emerald-500/30 transition hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 overflow-hidden group"
                >
                  <span className="relative z-10">Lihat Semua Produk</span>
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("pricing");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-white/70 text-sm md:text-base font-medium hover:border-emerald-400 hover:text-emerald-700 transition"
                >
                  Lihat Daftar Paket
                </button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
                <div>
                  <div className="font-semibold text-slate-900">11+ Produk</div>
                  <div>Siap pakai & modifikasi</div>
                </div>
                <div className="h-9 w-px bg-slate-200 hidden sm:block" />
                <div>
                  <div className="font-semibold text-slate-900">
                    Vidio langkah demi langkah
                  </div>
                  <div>Atau impor dan jalankan</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: visual */}
          <ScrollReveal direction="right" delay={200}>
            <div className="relative animate-float">
              <div className="relative rounded-3xl border border-slate-100 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm p-4 md:p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Video Pengenalan
                  </span>
                </div>

                <div className="rounded-2xl bg-slate-950 p-4 md:p-5 text-xs text-slate-100">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                      Apa itu Jago n8n?
                    </span>
                    <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/40">
                      Contoh Nyata
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black">
                    <div className="relative w-full pt-[56.25%]">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/jU8283ENG_g"
                        title="Intro n8n"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 md:-left-10 rounded-2xl bg-white shadow-lg border border-slate-100 px-3 sm:px-4 py-2.5 sm:py-3 text-xs md:text-sm text-slate-700 flex items-center gap-2 sm:gap-3 max-w-[280px] sm:max-w-none">
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-base sm:text-lg flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="font-semibold">Hemat ratusan jam kerja</div>
                  <div className="text-[11px] sm:text-xs">Tanpa bikin ribet</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="px-6 md:px-20 py-10 border-t border-slate-100 bg-white">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm md:text-base text-slate-500">
              Dipakai oleh praktisi dari berbagai bidang:
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-8 text-[10px] sm:text-xs md:text-sm font-medium text-slate-400">
              <span className="uppercase tracking-wide">Freelancer Otomasi</span>
              <span className="uppercase tracking-wide">Pemilik Bisnis</span>
              <span className="uppercase tracking-wide">Agensi & Kreator</span>
              <span className="uppercase tracking-wide">Developer n8n</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= JASA OTOMATISASI BANNER ================= */}
      <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-sky-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                  Done For You Service
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Butuh Otomatisasi Custom?
                  <span className="text-sky-400"> Kami Buatkan!</span>
                </h2>
                <p className="text-sm md:text-base text-slate-400 mb-6 max-w-lg">
                  Tidak punya waktu untuk belajar? Serahkan pada kami. Tim ahli kami siap membuatkan otomatisasi sesuai kebutuhan bisnis Anda.
                </p>
                <a
                  href="https://wa.me/6281234306725?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-lg shadow-sky-500/30 transition hover:scale-105 hover:shadow-xl hover:shadow-sky-500/50 text-sm md:text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi Gratis via WhatsApp
                </a>
              </div>

              <div className="flex-1 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 text-xl mb-3 group-hover:scale-110 transition-transform">
                      📋
                    </div>
                    <h3 className="font-semibold text-white mb-1">Invoice Reminder</h3>
                    <p className="text-xs text-slate-400">Pengingat tagihan otomatis ke pelanggan</p>
                  </div>

                  <div className="group p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl mb-3 group-hover:scale-110 transition-transform">
                      💰
                    </div>
                    <h3 className="font-semibold text-white mb-1">Pencatatan Finansial</h3>
                    <p className="text-xs text-slate-400">Catat pemasukan & pengeluaran otomatis</p>
                  </div>

                  <div className="group p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl mb-3 group-hover:scale-110 transition-transform">
                      ✍️
                    </div>
                    <h3 className="font-semibold text-white mb-1">Pembuat Konten Otomatis</h3>
                    <p className="text-xs text-slate-400">Generate konten sosmed dengan AI</p>
                  </div>

                  <div className="group p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 text-xl mb-3 group-hover:scale-110 transition-transform">
                      🔔
                    </div>
                    <h3 className="font-semibold text-white mb-1">Notifikasi Harga Vendor</h3>
                    <p className="text-xs text-slate-400">Pantau perubahan harga supplier otomatis</p>
                  </div>
                </div>

                <p className="mt-4 text-center text-xs text-slate-500">
                  + otomatisasi custom lainnya sesuai kebutuhan bisnis Anda
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section
        id="products"
        className="px-6 md:px-20 py-24 bg-slate-950 text-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
                  Koleksi Produk
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Siap pakai untuk kebutuhan nyata
                </h2>
                <p className="mt-3 text-sm md:text-base text-slate-400 max-w-xl">
                  Dilengkapi dokumentasi lengkap agar mudah dipahami dan dikembangkan.
                </p>
              </div>
              <p className="text-xs md:text-sm text-slate-500 max-w-sm">
                Klik produk untuk lihat detail, alur kerja, dan panduan lengkap.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {(projects as Project[]).map((p, index) => (
              <ScrollReveal key={p.id} delay={index * 100}>
                <a
                  href={`/projects/${p.slug}`}
                  className="
                    group block rounded-2xl 
                    bg-slate-900/50 border border-slate-800
                    transition-all duration-300
                    hover:bg-slate-900 
                    hover:border-emerald-500/50
                    hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]
                    hover:-translate-y-2
                    hover:scale-[1.02]
                  "
                >
                  <div className="p-4 pb-3">
                    <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 group-hover:border-emerald-500/30 transition-colors">
                      <Image
                        src={p.image}
                        alt={p.title}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <h3 className="font-semibold text-base md:text-lg mb-1 text-white group-hover:text-emerald-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 line-clamp-3 group-hover:text-slate-300 transition-colors">
                      {p.short}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                      
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-gradient-to-br from-sky-100 to-blue-200 blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase mb-3">
                Kenapa Pilih Kami
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Belajar otomasi tanpa ribet
              </h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Langsung praktik dengan contoh nyata yang terbukti menghemat waktu dan biaya.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <BenefitCard
                icon="🚀"
                title="Tanpa Coding"
                desc="Tarik & lepas, sambungkan ke Telegram, WhatsApp, Google Sheet, Notion, dll."
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <BenefitCard
                icon="💡"
                title="Contoh Nyata"
                desc="Bukan teori. Semua diambil dari kebutuhan bisnis, agensi, freelancer, dan kreator."
              />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <BenefitCard
                icon="⚡"
                title="Bisa Dikembangkan"
                desc="Setelah jalan, kamu bisa gandakan, gabungkan, atau kembangkan sendiri."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-emerald-100 to-sky-100 blur-3xl opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase mb-3">
              Cara Kerja
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Dari beli sampai jalan, cukup beberapa menit
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Lihat tutorial, praktek langkah-langkah, langsung jalan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/3 left-[33%] right-[33%] h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200 -z-10" />

            <Step
              num="1"
              title="Pilih Produk"
              desc="Pilih yang sesuai kebutuhanmu: keuangan, chatbot, atau operasional."
            />
            <Step
              num="2"
              title="Ikuti Panduan"
              desc="Impor file, atur pengaturan, sesuaikan lewat panduan video."
            />
            <Step
              num="3"
              title="Jalankan"
              desc="Aktifkan dan biarkan bekerja otomatis. Kembangkan sesuai kebutuhan."
            />
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section
        id="pricing"
        className="px-6 md:px-20 py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
                Daftar Paket
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Pilih sesuai kebutuhanmu
              </h2>
              <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
                Mau belajar sendiri atau langsung jadi? Kami siap bantu.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Paket Lengkap - DIY */}
            <ScrollReveal delay={100}>
              <div className="rounded-3xl border border-emerald-500/60 bg-slate-900/70 p-8 md:p-10 shadow-[0_18px_60px_rgba(15,118,110,0.45)] animate-glow h-full flex flex-col">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Paling Populer
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Paket Lengkap
                  </h3>
                  <p className="text-sm text-slate-400 mb-6">
                    Belajar & praktik sendiri dengan panduan lengkap
                  </p>

                  <ul className="space-y-3 text-sm text-slate-300 mb-8">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      11+ produk siap pakai
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Video tutorial langkah demi langkah
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Akses & update selamanya
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Dukungan via Telegram
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-lg text-slate-500 line-through">
                      Rp 299.000
                    </span>
                    <span className="text-xs text-emerald-300 font-medium">
                      Hemat 50%
                    </span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
                    Rp 149.000
                  </div>

                  <a
                    href="/checkout"
                    className="w-full inline-flex items-center justify-center px-5 sm:px-7 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/40 transition text-sm md:text-base hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/60 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Beli Paket Lengkap</span>
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                  </a>

                  <p className="mt-3 text-xs text-slate-400 text-center">
                    Garansi dukungan sampai berhasil digunakan
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Jasa Pembuatan Otomatisasi */}
            <ScrollReveal delay={200}>
              <div className="rounded-3xl border border-sky-500/60 bg-slate-900/70 p-8 md:p-10 shadow-[0_18px_60px_rgba(14,165,233,0.25)] h-full flex flex-col">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    Done For You
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    Jasa Pembuatan Otomatisasi
                  </h3>
                  <p className="text-sm text-slate-400 mb-6">
                    Kami buatkan otomatisasi sesuai kebutuhanmu
                  </p>

                  <ul className="space-y-3 text-sm text-slate-300 mb-8">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Konsultasi kebutuhan bisnis
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom workflow n8n
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Setup & konfigurasi lengkap
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Revisi sampai sesuai
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Garansi support 30 hari
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-xs text-slate-400 mb-1">
                    Mulai dari
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-4">
                    Rp 2.000.000
                  </div>

                  <a
                    href="https://wa.me/6281234306725?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-lg shadow-sky-500/40 transition text-sm md:text-base hover:scale-105 hover:shadow-xl hover:shadow-sky-500/60"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Hubungi via WhatsApp
                  </a>

                  <p className="mt-3 text-xs text-slate-400 text-center">
                    Gratis konsultasi awal
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-20" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan yang sering ditanyakan.
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Kalau masih ragu, beberapa pertanyaan ini mungkin bisa membantu.
            </p>
          </div>

          <div className="space-y-5">
            <FAQ
              q="Apa itu n8n dan kenapa harus pakai n8n?"
              a="n8n adalah platform otomasi open-source yang memungkinkan Anda menghubungkan berbagai aplikasi dan layanan tanpa coding. Dengan n8n, Anda bisa mengotomasi tugas berulang, menghemat waktu, dan fokus pada hal yang lebih penting untuk bisnis Anda."
            />
            <FAQ
              q="Cocok untuk pemula?"
              a="Sangat cocok. Sudah ada panduan lengkap langkah demi langkah dengan video tutorial. Bahkan tanpa pengalaman teknis sebelumnya, Anda bisa mengikuti dan menjalankan otomatisasi dalam waktu singkat."
            />
            <FAQ
              q="Perlu skill coding?"
              a="Tidak. Semua produk dibuat dengan sistem drag-and-drop. Cukup ikuti panduan yang sudah disiapkan, hubungkan akun-akun yang diperlukan, dan otomatisasi siap berjalan."
            />
            <FAQ
              q="Apakah produk bisa dikustomisasi sesuai kebutuhan saya?"
              a="Tentu! Setelah Anda impor workflow, Anda bebas memodifikasi, menambah, atau mengurangi fitur sesuai kebutuhan bisnis Anda. Semua source code terbuka untuk dikembangkan."
            />
            <FAQ
              q="Butuh server sendiri atau bisa pakai cloud?"
              a="Fleksibel. Anda bisa install n8n di server sendiri (VPS), atau gunakan n8n Cloud yang lebih praktis. Panduan kami mencakup kedua opsi setup tersebut."
            />
            <FAQ
              q="Akses berlaku selamanya?"
              a="Ya. Akses selamanya termasuk update produk ke depannya. Sekali beli, dapat semua update dan produk baru yang ditambahkan tanpa biaya tambahan."
            />
            <FAQ
              q="Ada bantuan kalau mentok?"
              a="Ada. Hubungi via Telegram, kami bantu sampai berhasil. Kami juga punya komunitas pengguna yang aktif saling membantu."
            />
            <FAQ
              q="Beda paket lengkap dengan jasa pembuatan otomatisasi apa?"
              a="Paket lengkap cocok jika Anda ingin belajar dan setup sendiri dengan panduan. Jasa pembuatan otomatisasi cocok jika Anda tidak punya waktu dan ingin kami yang setup semuanya dari awal sampai jadi."
            />
            <FAQ
              q="Apakah bisa integrasi dengan tools yang saya pakai?"
              a="n8n mendukung 400+ integrasi termasuk WhatsApp, Telegram, Google Sheets, Notion, email, database, dan banyak lagi. Jika ada tool khusus, kami bisa bantu integrasikan via API atau webhook."
            />
            <FAQ
              q="Bagaimana dengan data security dan privasi?"
              a="Karena n8n bisa di-hosting sendiri, Anda punya kontrol penuh atas data Anda. Tidak ada data yang keluar ke pihak ketiga kecuali aplikasi yang Anda hubungkan sendiri."
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-20 px-6 md:px-20 border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-100 blur-3xl opacity-10" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            {/* About */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-5">
                <Image
                  src="/logo-n8n.png"
                  alt="JagoN8n Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="font-bold text-2xl">
                  Jago<span className="text-emerald-600">n8n</span>
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Platform n8n siap pakai untuk otomasi bisnis, chatbot, dan operasional.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-slate-900 mb-5 text-base">Menu</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-slate-600 hover:text-emerald-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
                    Produk
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-slate-600 hover:text-emerald-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
                    Harga
                  </button>
                </li>
                <li>
                  <a href="/checkout" className="text-slate-600 hover:text-emerald-600 transition-colors inline-flex items-center gap-2 group">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-emerald-500 transition-colors" />
                    Beli
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-slate-900 mb-5 text-base">Kontak Kami</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:suratkita@gmail.com"
                    className="text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-2.5 group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="break-all">suratkita@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6281212122388"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-2.5 group"
                  >
                    <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    +62 812-1212-2388
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-slate-900 mb-5 text-base">Ikuti Kami</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/jagon8n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-11 w-11 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:from-pink-500 hover:to-orange-500 hover:border-transparent hover:shadow-lg hover:shadow-pink-500/30 hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/jagon8n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-11 w-11 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:from-sky-400 hover:to-blue-500 hover:border-transparent hover:shadow-lg hover:shadow-sky-500/30 hover:scale-110 transition-all duration-300"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@jagon8n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-11 w-11 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:from-red-500 hover:to-red-600 hover:border-transparent hover:shadow-lg hover:shadow-red-500/30 hover:scale-110 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-slate-500">
            <p className="flex items-center gap-2">
              © {new Date().getFullYear()} <span className="font-semibold text-slate-700">Jagon8n</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-emerald-600 transition-colors relative group">
                Kebijakan Privasi
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#" className="hover:text-emerald-600 transition-colors relative group">
                Syarat & Ketentuan
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function BenefitCard({ icon, title, desc }: BenefitCardProps) {
  return (
    <div className="group relative p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function Step({ num, title, desc }: StepProps) {
  return (
    <div className="relative text-center group">
      <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white w-16 h-16 text-2xl font-bold mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-emerald-500/40 transition-all duration-300 relative z-10">
        {num}
      </div>
      <h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function FAQ({ q, a }: FAQProps) {
  return (
    <div className="group border border-slate-200 rounded-2xl p-6 md:p-7 bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-base md:text-lg text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
            {q}
          </h4>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}
