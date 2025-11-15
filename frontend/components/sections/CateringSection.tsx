import Image from "next/image";
import { poppins } from "../Typography";
import { LuClock, LuUsers } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";

export default function CateringSection() {
  return (
    <section
      className={`${poppins.className} w-full bg-white py-20 px-6 md:px-16`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Gambar */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="/Catering/catering-all-02.png"
            alt="Layanan Catering Dapoer Ngebul"
            fill
            className="object-cover object-[center_top] hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Konten */}
        <div>
          <h2 className="text-4xl font-bold text-leafGreen mb-4">
            Layanan Catering
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Percayakan acara spesial Anda kepada kami! Dapoer Ngebul menyediakan
            layanan catering untuk berbagai acara seperti pernikahan, arisan,
            syukuran, meeting, dan acara lainnya.
          </p>

          {/* Fitur */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-leafGreen/10 rounded-xl">
                <LuUsers size={16} className="text-leafGreen" />
              </div>
              <div>
                <h3 className="text-leafGreen font-semibold text-lg">
                  Fleksibel untuk Berbagai Ukuran
                </h3>
                <p className="text-gray-600 text-sm">
                  Melayani 20 hingga 500+ porsi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-leafGreen/10 rounded-xl">
                <LuClock size={16} className="text-leafGreen" />
              </div>
              <div>
                <h3 className="text-leafGreen font-semibold text-lg">
                  Pengiriman Tepat Waktu
                </h3>
                <p className="text-gray-600 text-sm">
                  Makanan hangat dan fresh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-leafGreen/10 rounded-xl">
                <FaRegStar size={16} className="text-leafGreen" />
              </div>
              <div>
                <h3 className="text-leafGreen font-semibold text-lg">
                  Menu Customizable
                </h3>
                <p className="text-gray-600 text-sm">
                  Sesuaikan menu dengan selera Anda
                </p>
              </div>
            </div>
          </div>

          {/* Tombol */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="bg-leafGreen text-white px-6 py-3 rounded-full font-semibold hover:bg-leafGreen-hover transition-all">
              Lebih Lanjut
            </button>
            <button className="border-2 border-leafGreen text-leafGreen px-6 py-3 rounded-full font-semibold hover:bg-leafGreen hover:text-white transition-all">
              Pesan Catering
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
