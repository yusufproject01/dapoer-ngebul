import Image from "next/image";
import { poppins } from "../Typography";
import { LuClock, LuUsers } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";

export default function CateringSection() {
  return (
    <section
      className={`${poppins.className} w-full bg-white py-16 px-6 sm:py-20 sm:px-10 md:px-16`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* GAMBAR */}
        <div className="relative w-full h-[260px] sm:h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/Catering/catering-all-02.png"
            alt="Layanan Catering Dapoer Ngebul"
            fill
            className="object-cover object-[center_top] hover:scale-110 transition-all duration-700"
          />
        </div>

        {/* KONTEN */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-leafGreen leading-snug mb-4">
            Layanan Catering
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
            Percayakan acara spesial Anda kepada kami! Dapoer Ngebul menyediakan
            layanan catering untuk berbagai acara seperti pernikahan, arisan,
            syukuran, meeting, dan acara lainnya.
          </p>

          {/* FITUR */}
          <div className="space-y-6">
            {/* ITEM */}
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="p-3 bg-leafGreen/10 rounded-xl shadow-sm">
                <LuUsers size={20} className="text-leafGreen" />
              </div>
              <div>
                <h3 className="text-leafGreen font-semibold text-sm sm:text-lg">
                  Fleksibel untuk Berbagai Ukuran
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Melayani 20 hingga 500+ porsi
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="p-3 bg-leafGreen/10 rounded-xl shadow-sm">
                <LuClock size={20} className="text-leafGreen" />
              </div>
              <div>
                <h3 className="text-leafGreen font-semibold text-sm sm:text-lg">
                  Pengiriman Tepat Waktu
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Makanan hangat dan fresh
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="p-3 bg-leafGreen/10 rounded-xl shadow-sm">
                <FaRegStar size={20} className="text-leafGreen" />
              </div>
              <div>
                <h3 className="text-leafGreen font-semibold text-sm sm:text-lg">
                  Menu Customizable
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Sesuaikan menu dengan selera Anda
                </p>
              </div>
            </div>
          </div>

          {/* TOMBOL */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
            <button className="w-full sm:w-auto bg-leafGreen text-white text-sm sm:text-base px-6 py-3 rounded-full font-semibold hover:bg-leafGreen-hover shadow-md transition-all">
              Lebih Lanjut
            </button>

            <button className="w-full sm:w-auto border-2 border-leafGreen text-leafGreen text-sm sm:text-base px-6 py-3 rounded-full font-semibold hover:bg-leafGreen hover:text-white shadow-md transition-all">
              Pesan Catering
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
