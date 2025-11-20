"use client";

import { poppins } from "@/components/Typography";
import { FaCheck } from "react-icons/fa6";
import useToWhatsApp from "@/hooks/useToWA";
import { packages } from "@/lib/Datas/CateringPaket";
import Headers from "@/components/Headers";
import FooterSection from "@/components/sections/FooterSection";
import { packagesCatering } from "@/lib/Text/Value/CateringValue";
import FootChatGreen from "@/components/FootChatGreen";

export default function CateringPage() {
  const [phone, message] = useToWhatsApp();

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <main className="w-full sm:pt-20 pt-0 bg-cream overflow-x-hidden">
      <Headers
        Title="Layanan Catering"
        Description="Percayakan acara spesial Anda kepada kami dengan pilihan paket yang fleksibel"
      />

      {/* SECTION DESKRIPSI */}
      <section className="w-full px-6 py-8">
        <div className="w-full bg-white rounded-xl shadow-md py-10 px-6 sm:px-10 flex flex-col items-center justify-center gap-y-6">
          <p className="text-base sm:text-xl text-slate-600 max-w-4xl text-center leading-relaxed">
            Dapoer Ngebul menyediakan layanan catering untuk berbagai acara
            seperti pernikahan, ulang tahun, arisan, syukuran, meeting kantor,
            dan acara lainnya. Kami menawarkan menu yang dapat disesuaikan
            dengan kebutuhan dan budget Anda.
          </p>
          <p className="text-sm sm:text-lg text-slate-600 max-w-4xl text-center leading-relaxed">
            Semua makanan dibuat fresh on order dan diantar tepat waktu ke
            lokasi acara Anda.
          </p>
        </div>
      </section>

      {/* SECTION PAKET CATERING */}
      <section
        className={`${poppins.className} w-full py-8 bg-cream flex flex-col items-center`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-leafGreen mb-10 sm:mb-12">
          Paket Catering
        </h2>

        {/* GRID RESPONSIVE */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`
                relative bg-white rounded-3xl shadow-md p-8 sm:p-10 flex flex-col items-center
                hover:scale-[1.03] transition-all duration-300 cursor-pointer ${pkg.border}
              `}
            >
              {pkg.popular && (
                <div className="absolute -top-5 px-6 py-1 bg-leafGreen text-white rounded-full text-sm font-medium">
                  Paling Populer
                </div>
              )}

              <h3
                className={`${pkg.textColor} text-xl sm:text-2xl font-semibold mb-2`}
              >
                {pkg.title}
              </h3>

              <p className={`${pkg.textColor} text-3xl sm:text-4xl font-bold`}>
                {pkg.price}
                <span className="text-slate-700 text-lg sm:text-xl font-medium">
                  / porsi
                </span>
              </p>

              <p className="text-gray-500 mt-1 mb-6 text-sm">{pkg.min}</p>

              {/* Fitur List */}
              <ul className="flex flex-col gap-3 mb-8 w-full">
                {pkg.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className={`${pkg.textColor} mt-1`} />
                    <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleClick}
                className={`w-full py-3 text-white rounded-full font-medium hover:brightness-95 transition ${pkg.buttonColor}`}
              >
                Pesan Paket
              </button>
            </div>
          ))}
        </div>

        {/* KONSULTASI */}
        <div className="w-full py-10 flex flex-col items-center gap-y-5 mt-6 px-6 text-center">
          <p className="text-base sm:text-lg text-slate-600">
            Ingin paket custom atau porsi berbeda? Hubungi kami untuk
            konsultasi!
          </p>

          <button
            onClick={handleClick}
            className="py-2 px-5 border-2 border-leafGreen hover:bg-leafGreen text-leafGreen hover:text-white rounded-full transition duration-300 font-medium"
          >
            Konsultasi Paket Custom
          </button>
        </div>
      </section>

      {/* SECTION LAYANAN TAMBAHAN */}
      <section
        className={`${poppins.className} bg-white w-full py-10 flex flex-col items-center px-6`}
      >
        <h1 className="text-2xl sm:text-3xl text-leafGreen font-semibold mb-8">
          Layanan Tambahan
        </h1>

        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {packagesCatering.map((pkg, index) => (
            <div
              key={index}
              className="w-full max-w-xs h-40 px-4 flex flex-col items-center justify-center text-center rounded-xl bg-cream hover:bg-white hover:border-2 border-leafGreen shadow-sm transition"
            >
              <h1 className="text-lg text-leafGreen mb-1">{pkg.title}</h1>
              <p className="text-sm text-slate-600">{pkg.text}</p>
            </div>
          ))}
        </div>
      </section>

      <FootChatGreen
        Title="Siap Memesan Catering?"
        Description="Konsultasikan kebutuhan catering anda sekarang juga!"
        TextBtn="Hubungi Kami Sekarang!"
      />

      <FooterSection />
    </main>
  );
}
