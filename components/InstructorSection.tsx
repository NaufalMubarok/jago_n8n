"use client"

export default function InstructorSection() {
  return (
    <section className="bg-neutral-100 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">

        {/* Headline atas (opsional banner di atas kartu) */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900">
          Diajarkan oleh <span className="underline decoration-emerald-500 decoration-4 underline-offset-4">
            Penjual Terbaik
          </span> Penulis Naufal Faisal
        </h2>

        {/* (Opsional) Banner bukti */}
       <div className="mt-8 flex justify-center">
          <img src="/projects/chat69.png" alt="Amazon Best Sellers"
               className="w-full max-w-3xl rounded-xl ring-1 ring-gray-200 shadow-sm" />
        </div> 

        <h3 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mt-12">
          Temui Instruktur Anda
        </h3>

        {/* Kartu profil: dibatasi max width & center */}
        <div className="mt-6 max-w-4xl mx-auto bg-white rounded-[28px] ring-1 ring-gray-200 shadow-sm p-6 md:p-10">
          <div className="grid md:grid-cols-[160px,1fr] items-start gap-6 md:gap-10">
            {/* Avatar */}
            <div className="justify-self-center md:justify-self-start">
              <img
                src="/projects/images.png" /* ganti sesuai fotomu */
                alt="Naufal Faisal"
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover ring-1 ring-gray-200"
              />
            </div>

            {/* Bio */}
            <div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Naufal Faisal
              </h4>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Naufal Faisal adalah penulis buku terlaris yang telah menerbitkan
                beberapa buku tentang pembelajaran mesin dan AI generatif. Dengan
                pengalaman lebih dari satu dekade di perusahaan teknologi ternama,
                ia membangun sistem AI yang cerdas, aman, dan efisien serta aktif
                mengajar.
              </p>
            </div>

            {/* CTA — baris terpisah, center */}
            <div className="md:col-span-2 flex justify-center pt-8">
              <a
                href="#daftar"
                className="inline-flex items-center justify-center gap-3
                           rounded-full bg-black text-white px-8 py-4 text-lg font-semibold
                           shadow-sm hover:bg-gray-900 transition
                           w-full sm:w-auto sm:min-w-[18rem] md:min-w-[22rem]"
              >
                <span className="mr-1 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                Mulai Pendaftaran
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
