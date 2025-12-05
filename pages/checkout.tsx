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
  price?: number;
  promoDiscount?: number;
  couponDiscount?: number;
};

const projects = projectsData as Project[];

// Konfigurasi yang bisa kamu ubah dengan mudah
const WHATSAPP_NUMBER = "6281234306725";

// Pricing for bundle (all workflows)
const BUNDLE_BASE_PRICE = 299000;
const BUNDLE_PROMO_DISCOUNT = 150000;
const BUNDLE_COUPON_DISCOUNT = 40000;

// Pricing per individual product (default if not in JSON)
const PRODUCT_BASE_PRICE = 50000;
const PRODUCT_PROMO_DISCOUNT = 25000;
const PRODUCT_COUPON_DISCOUNT = 5000;
const COUPON_CODE = "JAGON8N";


export default function Checkout() {
  const router = useRouter();
  const { product } = router.query;
  const slug = Array.isArray(product) ? product[0] : product;

  const selectedProject = useMemo(
    () => (slug ? projects.find((p) => p.slug === slug) : null),
    [slug]
  );

  const productTitle = selectedProject?.title ?? "Paket Lengkap";
  const productShort =
    selectedProject?.short ??
    "Semua produk n8n siap pakai.";
  const productContent =
    selectedProject?.content ??
    "Koleksi lengkap untuk otomasi berbagai proses bisnis.";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [coupon, setCoupon] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showCopyOption, setShowCopyOption] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  // Determine if this is a bundle or individual product
  const isBundle = !selectedProject;
  
  // Get pricing based on product type
  const basePrice = isBundle 
    ? BUNDLE_BASE_PRICE 
    : (selectedProject?.price ?? PRODUCT_BASE_PRICE);
  
  const promoDiscount = isBundle 
    ? BUNDLE_PROMO_DISCOUNT 
    : (selectedProject?.promoDiscount ?? PRODUCT_PROMO_DISCOUNT);
  
  const isCouponValid = coupon.trim() === COUPON_CODE;
  
  const couponDiscount = isCouponValid 
    ? (isBundle ? BUNDLE_COUPON_DISCOUNT : (selectedProject?.couponDiscount ?? PRODUCT_COUPON_DISCOUNT))
    : 0;
  
  const totalDiscount = promoDiscount + couponDiscount;
  const total = Math.max(basePrice - totalDiscount, 0);

  const formatRupiah = (value: number) =>
    "Rp " + value.toLocaleString("id-ID");

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setWhatsapp(value);
  };

  const isMobileDevice = () => {
    if (typeof window === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async (text: string, showAlert = true) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      if (showAlert) {
        alert("Pesan berhasil dicopy! Silakan paste di WhatsApp.");
      }
      setTimeout(() => setCopySuccess(false), 3000);
      return true;
    } catch (err) {
      console.error("Failed to copy:", err);
      if (showAlert) {
        alert("Gagal copy pesan. Silakan copy manual.");
      }
      return false;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !whatsapp) {
      setError("Nama, email, dan nomor WhatsApp wajib diisi.");
      return;
    }

    setSubmitting(true);

    const lines = [
      "================================",
      "   PESANAN PRODUK N8N",
      "================================",
      "",
      "[ DATA PEMBELI ]",
      `Nama     : ${name}`,
      `Email    : ${email}`,
      `WhatsApp : ${whatsapp}`,
      "",
      "--------------------------------",
      "",
      "[ DETAIL PRODUK ]",
      `Produk   : ${productTitle}`,
      "",
      "--------------------------------",
      "",
      "[ RINCIAN HARGA ]",
      `Harga Normal   : ${formatRupiah(basePrice)}`,
      promoDiscount > 0 ? `Diskon Promo   : -${formatRupiah(promoDiscount)}` : null,
      couponDiscount > 0 ? `Kode Kupon     : ${coupon.toUpperCase()}` : null,
      couponDiscount > 0 ? `Diskon Kupon   : -${formatRupiah(couponDiscount)}` : null,
      "--------------------------------",
      `TOTAL BAYAR    : ${formatRupiah(total)}`,
      "",
      "================================",
      "",
      "[ INFO PEMBAYARAN ]",
      "Transfer ke salah satu rekening:",
      "",
      "BCA",
      "No. Rek : 629.0146.303",
      "A.n.    : Fatkul Amri",
      "",
      "MANDIRI",
      "No. Rek : 144-00-1122645-0",
      "A.n.    : Fatkul Amri",
      "",
      "--------------------------------",
      "",
      "Setelah transfer, kirim bukti ke:",
      "WA    : 081234-306725",
      "Email : suratkita@gmail.com",
      "",
      "================================",
      "Terima kasih atas pesanannya!"
    ].filter(Boolean);

    const message = lines.join("\n");
    setGeneratedMessage(message);

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const isMobile = isMobileDevice();
    
    if (typeof window !== "undefined") {
      if (isMobile) {
        window.location.href = waUrl;
        setTimeout(() => {
          setSubmitting(false);
        }, 1000);
      } else {
        // Simpan URL dan tampilkan modal dulu, biar pelanggan sempat baca instruksi
        setWhatsappUrl(waUrl);
        copyToClipboard(message, false).then(() => {
          setShowCopyOption(true);
          setSubmitting(false);
          // Tidak auto-open WhatsApp, biar pelanggan klik tombol sendiri
        });
      }
    }
  };

  const openWhatsApp = () => {
    if (whatsappUrl && typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 text-slate-900 font-sans">
      <Navbar />

      <div className="pt-28 px-6 md:px-10 lg:px-20 pb-24">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-[1fr,340px] lg:grid-cols-[1fr,380px] gap-8 lg:gap-12 items-start">
            {/* Left: form */}
            <div className="space-y-8">
                {/* Move Back Button Here for Alignment */}
                <div>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:text-emerald-600 bg-white/80 hover:bg-white border border-slate-200 hover:border-emerald-300 rounded-xl transition-all duration-300 group hover:shadow-md"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium">Kembali Pilih Produk</span>
                    </button>
                </div>

                <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                        Checkout: <span className="text-emerald-600">{productTitle}</span>
                    </h1>
                    <p className="mt-3 text-slate-600 text-base leading-relaxed">
                        {productShort}
                    </p>

                    <div className="mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Rincian Produk</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{productContent}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700">
                                Nama Lengkap
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800 placeholder-slate-400"
                                    placeholder="Nama lengkap kamu"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700">
                                Alamat Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800 placeholder-slate-400"
                                    placeholder="email@kamu.com"
                                />
                            </div>
                        </div>

                        {/* WhatsApp Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-700">
                                Nomor WhatsApp
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <input
                                    type="tel"
                                    value={whatsapp}
                                    onChange={handleWhatsappChange}
                                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800 placeholder-slate-400"
                                    placeholder="Contoh: 0812xxxxxxx"
                                />
                            </div>
                            <p className="text-xs text-slate-500 ml-1">
                                *Untuk konfirmasi pesanan via WhatsApp
                            </p>
                        </div>

                        {/* Coupon Field */}
                        <div className="space-y-2 pt-2">
                            <label className="block text-sm font-semibold text-slate-700">
                                Kode Kupon (Opsional)
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    className={`w-full pl-12 pr-4 py-3.5 bg-white border rounded-xl focus:outline-none focus:ring-2 transition-all text-slate-800 placeholder-slate-400 ${
                                        coupon && isCouponValid 
                                        ? 'border-emerald-500 ring-1 ring-emerald-500/20' 
                                        : coupon && !isCouponValid
                                        ? 'border-red-300 focus:border-red-400 focus:ring-red-500/20'
                                        : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20'
                                    }`}
                                    placeholder="Punya kode promo?"
                                />
                            </div>
                            {coupon && (
                                <div className={`mt-2 text-xs flex items-center ${isCouponValid ? 'text-emerald-600' : 'text-red-500'}`}>
                                    {isCouponValid ? (
                                        <>
                                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Kode kupon diterapkan! Hemat {formatRupiah(couponDiscount)}
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            Kode kupon tidak valid
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start text-red-600 text-sm">
                                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
                        >
                            {submitting ? (
                                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                            )}
                            <span>
                                {submitting
                                ? "Membuka WhatsApp..."
                                : "Lanjut ke WhatsApp"}
                            </span>
                        </button>

                        <p className="text-center text-xs text-slate-400 leading-relaxed px-4">
                            Transaksi aman via WhatsApp resmi. Data hanya untuk proses pesanan.
                        </p>
                    </form>
                </div>
            </div>

            {/* Right: order summary */}
            <div className="md:sticky md:top-28 space-y-6">
                <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    <div className="bg-slate-50/50 border-b border-slate-100 p-4 px-5">
                        <h2 className="text-base font-bold text-slate-900">Ringkasan Pesanan</h2>
                    </div>
                    
                    <div className="p-5 space-y-4">
                        <div className="flex justify-between items-start text-sm">
                            <span className="text-slate-500 flex-1 pr-4">Produk</span>
                            <span className="font-semibold text-slate-800 text-right max-w-[140px] text-xs leading-relaxed">
                                {productTitle}
                            </span>
                        </div>

                        <div className="border-t border-slate-100 my-1"></div>

                        <div className="space-y-2.5">
                            <div className="flex justify-between text-xs">
                                <span className="text-slate-500">Harga Normal</span>
                                <span className="text-slate-700 font-medium decoration-slate-400">{formatRupiah(basePrice)}</span>
                            </div>

                            {promoDiscount > 0 && (
                                <div className="flex justify-between text-xs text-emerald-600">
                                    <span className="flex items-center">
                                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        Promo Spesial
                                    </span>
                                    <span>- {formatRupiah(promoDiscount)}</span>
                                </div>
                            )}

                            {couponDiscount > 0 && (
                                <div className="flex justify-between text-xs text-emerald-600">
                                    <span className="flex items-center">
                                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                        </svg>
                                        Diskon Kupon
                                    </span>
                                    <span>- {formatRupiah(couponDiscount)}</span>
                                </div>
                            )}
                        </div>

                        <div className="border-t-2 border-dashed border-slate-100 pt-3 mt-3">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-bold text-slate-700 mb-1">Total Pembayaran</span>
                                <div className="text-right">
                                    {totalDiscount > 0 && (
                                        <div className="text-[10px] text-slate-400 line-through mb-0.5">
                                            {formatRupiah(basePrice)}
                                        </div>
                                    )}
                                    <span className="text-2xl font-bold text-emerald-600 tracking-tight">
                                        {formatRupiah(total)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-emerald-50/80 p-3 px-4 border-t border-emerald-100">
                        <div className="flex gap-3 items-center">
                            <div className="flex-shrink-0">
                                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-[11px] text-emerald-800">
                                <p className="font-bold mb-0">Pembayaran Aman</p>
                                <p className="opacity-90 leading-tight hidden sm:block">
                                    Proses via WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Transaksi Terenkripsi & Aman</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Copy Message for Desktop */}
      {showCopyOption && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowCopyOption(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCopyOption(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pesan Sudah Di-Copy!</h3>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pesan sudah tercopy otomatis ke clipboard
              </div>
            </div>

            {/* Instruksi Step by Step */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm font-bold text-amber-800 mb-3">Langkah selanjutnya:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <p className="text-sm text-amber-800">Klik tombol <strong>"Buka WhatsApp"</strong> di bawah</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <p className="text-sm text-amber-800">Klik kolom chat di WhatsApp</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <p className="text-sm text-amber-800">Tekan <strong>Ctrl+V</strong> untuk paste pesan</p>
                </div>
              </div>
            </div>

            {/* Tombol Buka WhatsApp - BESAR dan JELAS */}
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-base shadow-lg shadow-green-500/30 transition-all hover:scale-[1.02] mb-4"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Buka WhatsApp
            </button>

            {/* Preview Pesan (collapsed by default) */}
            <details className="mb-4">
              <summary className="cursor-pointer text-sm text-slate-500 hover:text-slate-700 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Lihat preview pesan yang akan dikirim
              </summary>
              <div className="mt-3 bg-slate-50 rounded-xl p-4 max-h-48 overflow-y-auto">
                <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">
                  {generatedMessage}
                </pre>
              </div>
            </details>

            <button
              onClick={() => copyToClipboard(generatedMessage)}
              className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                copySuccess 
                  ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {copySuccess ? (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tercopy!
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Lagi
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
