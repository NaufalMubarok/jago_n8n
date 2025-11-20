import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import projectsData from "../data/projects.json";

type Project = {
  id: string;
  slug: string;
  title: string;
  short: string;
  image: string;
  content: string;
};

const projects = projectsData as Project[];

// Konfigurasi yang bisa kamu ubah dengan mudah
const WHATSAPP_NUMBER = "6287812243298"; // ganti dengan nomor WhatsApp kamu (format internasional tanpa +)
const BASE_PRICE = 199000; // harga awal produk
const PROMO_DISCOUNT = 100000; // diskon promo tetap (tanpa kupon)
const COUPON_CODE = "JAGON8N"; // kode kupon (opsional)
const COUPON_DISCOUNT = 50000; // diskon tambahan dari kupon
const BANK_NAME = "BCA"; // nama bank
const BANK_ACCOUNT = "1234567890"; // nomor rekening
const BANK_HOLDER = "Nama Pemilik Rekening"; // nama pemilik rekening

export default function Checkout() {
  const router = useRouter();
  const { product } = router.query;
  const slug = Array.isArray(product) ? product[0] : product;

  const selectedProject = useMemo(
    () => (slug ? projects.find((p) => p.slug === slug) : null),
    [slug]
  );

  const productTitle = selectedProject?.title ?? "Workflow Paket Premium";
  const productShort =
    selectedProject?.short ??
    "Paket semua workflow n8n premium siap pakai.";
  const productContent =
    selectedProject?.content ??
    "Koleksi workflow lengkap untuk mengotomasi berbagai proses bisnis dengan n8n.";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [coupon, setCoupon] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const isCouponValid =
    coupon.trim().toUpperCase() === COUPON_CODE.toUpperCase();

  const promoDiscount = PROMO_DISCOUNT;
  const couponDiscount = isCouponValid ? COUPON_DISCOUNT : 0;
  const totalDiscount = promoDiscount + couponDiscount;
  const total = Math.max(BASE_PRICE - totalDiscount, 0);

  const formatRupiah = (value: number) =>
    "Rp " + value.toLocaleString("id-ID");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !whatsapp) {
      setError("Nama, email, dan nomor WhatsApp wajib diisi.");
      return;
    }

    setSubmitting(true);

    const lines = [
      "Halo, saya ingin membeli workflow n8n 🙌",
      "",
      `Nama      : ${name}`,
      `Email     : ${email}`,
      `WhatsApp  : ${whatsapp}`,
      "",
      `Produk    : ${productTitle}`,
      `Harga awal: ${formatRupiah(BASE_PRICE)}`,
      `Promo     : ${promoDiscount > 0 ? formatRupiah(promoDiscount) : "-"}`,
      `Kupon     : ${coupon || "-"}${
        isCouponValid ? " (kupon berlaku)" : coupon ? " (tidak valid)" : ""
      }`,
      `Diskon kupon: ${
        couponDiscount > 0 ? formatRupiah(couponDiscount) : "-"
      }`,
      `Total     : ${formatRupiah(total)}`,
      "",
      "Detail pembayaran:",
      `Bank      : ${BANK_NAME}`,
      `No Rek    : ${BANK_ACCOUNT}`,
      `Atas nama : ${BANK_HOLDER}`,
      "",
      "Setelah transfer, mohon kirim bukti pembayaran di chat ini ya 🙏",
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    if (typeof window !== "undefined") {
      window.location.href = waUrl;
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 px-6 md:px-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <span className="mr-2 text-lg">←</span>
              Kembali pilih produk
            </button>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-600 text-white text-xs font-semibold">
                1
              </span>
              <span>Data Pembeli</span>
            </div>
            <span className="h-px w-8 bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-green-600 text-white text-xs font-semibold">
                2
              </span>
              <span>Review Pesanan</span>
            </div>
            <span className="h-px w-8 bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-400 text-xs font-semibold">
                3
              </span>
              <span>Chat WhatsApp</span>
            </div>
          </div>

          <div className="grid md:grid-cols-[2fr,1.4fr] gap-8 items-start">
            {/* Left: form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold">
                Checkout: {productTitle}
              </h1>
              <p className="mt-3 text-gray-600 text-sm md:text-base">
                {productShort}
              </p>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <p className="font-semibold">Rincian produk:</p>
                <p>{productContent}</p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-sm">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Nama lengkap
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nama kamu"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="email@kamu.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="contoh: 0812xxxxxxx"
                  />
                  <p className="mt-1 text-[11px] text-gray-400">
                    Pastikan nomor aktif karena proses order akan dilanjutkan di
                    WhatsApp.
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Kode kupon (opsional)
                  </label>
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Masukkan kode kupon jika ada"
                  />
                  {coupon && (
                    <p className="mt-1 text-[11px] text-gray-500">
                      {isCouponValid
                        ? `Kupon berhasil digunakan, diskon ${formatRupiah(
                            COUPON_DISCOUNT
                          )}.`
                        : "Kupon tidak valid."}
                    </p>
                  )}
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-4 inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting && (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  <span>
                    {submitting
                      ? "Membuka WhatsApp..."
                      : "Kirim pesanan via WhatsApp"}
                  </span>
                </button>

                <p className="mt-3 text-[11px] text-gray-400">
                  Dengan klik tombol di atas kamu akan diarahkan ke WhatsApp
                  untuk melanjutkan proses pembelian langsung dengan kami.
                </p>
              </form>
            </div>

            {/* Right: order summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-7">
              <h2 className="text-lg font-semibold mb-4">Ringkasan Order</h2>

              <div className="flex justify-between mb-2 text-sm">
                <span className="text-gray-600">Produk</span>
                <span className="font-medium text-right ml-4">
                  {productTitle}
                </span>
              </div>

              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-600">Harga awal</span>
                <span>{formatRupiah(BASE_PRICE)}</span>
              </div>

              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-600">Promo diskon</span>
                <span>
                  {promoDiscount > 0 ? `- ${formatRupiah(promoDiscount)}` : "-"}
                </span>
              </div>

              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-600">Diskon kupon</span>
                <span>
                  {couponDiscount > 0
                    ? `- ${formatRupiah(couponDiscount)}`
                    : "-"}
                </span>
              </div>

              <div className="border-t mt-4 pt-4 flex justify-between items-center">
                <span className="text-sm font-semibold">Total</span>
                <span className="text-xl font-bold">
                  {formatRupiah(total)}
                </span>
              </div>

              <div className="mt-5 bg-green-50 border border-green-100 rounded-xl p-3 text-xs text-green-800">
                <p className="font-semibold mb-1">Proses via WhatsApp:</p>
                <p>
                  Setelah klik tombol, detail pesananmu otomatis dikirim ke
                  WhatsApp kami. Kamu akan dibantu sampai proses pembayaran dan
                  akses file selesai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

