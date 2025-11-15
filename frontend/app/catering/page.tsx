"use client";

import { poppins } from "@/components/Typography";
import { FaCheck } from "react-icons/fa6";
import useToWhatsApp from "@/hooks/useToWA";
import { packages } from "@/lib/Datas/CateringPaket";
import Headers from "@/components/Headers";
import FooterSection from "@/components/sections/FooterSection";
import { packagesCatering } from "@/lib/Text/Value/CateringValue";
import FootChatGreen from "@/components/FootChatGreen";

export default function CateringPackagesSection() {
  const [phone, message] = useToWhatsApp();

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <main className="w-full pt-20 bg-cream">
      <Headers
        Title="Layanan Catering"
        Description="Percayakan acara spesial Anda kepada kami dengan pilihan paket yang fleksibel"
      />
      {/* Konsultasi */}
      <section className="w-full px-6 py-8">
        <div className="w-full bg-white rounded-xl shadow-md py-10 flex flex-col items-center justify-center gap-y-6">
          <p className="text-xl text-slate-600 max-w-5xl w-full text-center">
            Dapoer Ngebul menyediakan layanan catering untuk berbagai acara
            seperti pernikahan, ulang tahun, arisan, syukuran, meeting kantor,
            dan acara lainnya. Kami menawarkan menu yang dapat disesuaikan
            dengan kebutuhan dan budget Anda.
          </p>
          <p className="text-lg text-slate-600 max-w-5xl w-full text-center">
            Semua makanan dibuat fresh on order dan diantar tepat waktu ke
            lokasi acara Anda.
          </p>
        </div>
      </section>
      <section
        className={`${poppins.className} w-full py-8 bg-cream flex flex-col items-center`}
      >
        <h2 className="text-4xl font-bold text-leafGreen mb-12">
          Paket Catering
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative hover:scale-105 transition-all ease-in-out hover:cursor-pointer duration-300 bg-white rounded-3xl shadow-md p-10 flex flex-col items-center ${pkg.border}`}
            >
              {/* Badge POPULER */}
              {pkg.popular && (
                <div className="absolute -top-5 px-6 py-1 bg-leafGreen text-white rounded-full text-sm font-medium">
                  Paling Populer
                </div>
              )}

              <h3 className={`${pkg.textColor} text-2xl font-semibold mb-2`}>
                {pkg.title}
              </h3>

              <p className={`${pkg.textColor} text-4xl font-bold`}>
                {pkg.price}
                <span className="text-slate-700 text-xl font-medium">
                  / porsi
                </span>
              </p>

              <p className="text-gray-500 mt-1 mb-6">{pkg.min}</p>

              {/* Fitur List */}
              <ul className="flex flex-col gap-3 mb-8">
                {pkg.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className={`${pkg.textColor} mt-1`} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button WA */}
              <button
                onClick={handleClick}
                className={`w-full py-3 text-white rounded-full font-medium hover:brightness-95 transition ${pkg.buttonColor}`}
              >
                Pesan Paket
              </button>
            </div>
          ))}
        </div>
        <div className="w-full h-auto py-10 flex flex-col items-center justify-center gap-y-6">
          <p className="text-lg text-slate-600">
            Ingin paket custom atau porsi berbeda? Hubungi kami untuk
            konsultasi!
          </p>
          <button
            onClick={handleClick}
            className="py-2 px-4 border-2 border-leafGreen hover:border-none hover:bg-leafGreen text-leafGreen hover:text-white rounded-full transition duration-300"
          >
            Konsultasi Paket Custom
          </button>
        </div>
      </section>
      <section
        className={`${poppins.className} bg-white w-full py-8 gap-y-6 flex flex-col items-center justify-center px-6`}
      >
        <h1 className="text-3xl text-leafGreen font-semibold">
          Layanan Tambahan
        </h1>
        <div className="w-full grid grid-cols-3 items-center justify-items-center gap-x-6">
          {packagesCatering.map((pkg, index) => (
            <div
              key={index}
              className="w-80 h-40 px-4 flex flex-col items-center justify-center rounded-xl bg-cream hover:bg-white hover:border-2 border-leafGreen shadow-sm"
            >
              <h1 className="text-lg text-leafGreen text-center">
                {pkg.title}
              </h1>
              <p className="text-sm text-slate-600 w-full text-center">
                {pkg.text}
              </p>
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
