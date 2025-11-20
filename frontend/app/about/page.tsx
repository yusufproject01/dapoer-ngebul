"use client";

import FootChatGreen from "@/components/FootChatGreen";
import Headers from "@/components/Headers";
import FooterSection from "@/components/sections/FooterSection";
import { poppins } from "@/components/Typography";
import { values } from "@/lib/Text/Value/AboutValue";
import Image from "next/image";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="w-full h-auto overflow-x-hidden sm:pt-20">
      <Headers
        Title="Tentang Dapoer Ngebul"
        Description="Kisah kami dalam menghadirkan masakan rumahan berkualitas"
      />

      {/* Bagian About */}
      <section
        className={`${poppins.className} w-full py-16 md:py-20 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12`}
      >
        {/* Gambar */}
        <div className="flex-1 w-full">
          <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Dapur/dapur-01.png"
              alt="Dapoer Ngebul Kitchen"
              fill
              className="object-cover object-[center_60%]"
              priority
            />
          </div>
        </div>

        {/* Teks */}
        <div className="flex-1 text-gray-800">
          <h2 className="text-3xl sm:text-4xl text-leafGreen mb-6 font-semibold">
            Tentang Dapoer Ngebul
          </h2>

          <p className="mb-4 leading-relaxed text-base sm:text-lg">
            Dapoer Ngebul adalah usaha kuliner rumahan yang berawal dari
            kecintaan kami terhadap masakan Indonesia yang autentik dan penuh
            cita rasa.
          </p>
          <p className="mb-4 leading-relaxed text-base sm:text-lg">
            Setiap hidangan dibuat dengan bahan-bahan segar pilihan dan resep
            turun-temurun yang telah kami sempurnakan. Kami percaya bahwa
            masakan rumahan membawa kehangatan dan kenangan yang tak
            tergantikan.
          </p>
          <p className="leading-relaxed text-base sm:text-lg">
            Dari dapur rumah kami di Cirebon, kami melayani pesanan harian,
            paket menu, hingga catering untuk acara spesial Anda. Mari rasakan
            kehangatan masakan rumah di setiap suapan!
          </p>
        </div>
      </section>

      {/* Nilai-Nilai */}
      <section className="w-full py-16 md:py-20 bg-cream">
        <div className="text-center mb-10 sm:mb-14 px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-leafGreen">
            Nilai-Nilai Kami
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Prinsip yang kami pegang dalam setiap hidangan
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-8 text-center flex flex-col items-center hover:shadow-lg transition-all"
            >
              <div className="mb-4 w-20 h-20 rounded-full bg-leafGreen flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-leafGreen mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section
        className={`${poppins.className} w-full py-16 md:py-20 bg-white px-6`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-leafGreen">
            Tim Kami
          </h2>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Keluarga besar Dapoer Ngebul yang siap melayani Anda
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-[#FDF4E6] rounded-3xl p-6 sm:p-10 shadow-sm">
          <p className="text-gray-700 text-center leading-relaxed text-base sm:text-lg md:text-xl">
            Dapoer Ngebul dikelola oleh tim keluarga yang kompak dan
            berpengalaman dalam dunia kuliner. Dengan pengalaman lebih dari 5
            tahun dalam menyajikan masakan rumahan, kami terus berinovasi sambil
            mempertahankan keaslian cita rasa tradisional.
          </p>

          <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base md:text-lg mt-6">
            Dipimpin oleh Ibu Siti sebagai chef utama, didukung oleh tim yang
            solid, kami siap menghadirkan pengalaman kuliner terbaik untuk Anda.
          </p>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <FootChatGreen
        Title="Siap Mencoba Masakan Kami?"
        Description="Pesan sekarang dan rasakan kehangatan masakan rumahan kami"
        TextBtn="Hubungi kami via WhatsApp!"
      />

      <FooterSection />
    </main>
  );
}
