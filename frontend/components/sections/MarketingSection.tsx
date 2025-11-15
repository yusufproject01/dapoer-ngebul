import { FiHome } from "react-icons/fi";
import { poppins } from "../Typography";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function MarketingSecttion() {
  return (
    <section
      className={`${poppins.className} w-full bg-[#FEF6E9] py-20 px-6 md:px-16`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-leafGreen mb-4">
          UMKM Lokal Cirebon
        </h2>
        <p className="text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
          Dapoer Ngebul adalah bagian dari UMKM (Usaha Mikro Kecil Menengah)
          yang berkomitmen menghadirkan masakan rumahan berkualitas dengan cita
          rasa autentik Indonesia.
        </p>

        {/* 3 Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kartu 1 */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-leafGreen flex items-center justify-center mb-6">
              {/* <Home className="w-9 h-9 text-white" /> */}
              <FiHome size={30} className="text-white" />
            </div>
            <h3 className="text-leafGreen font-semibold text-lg mb-3">
              Diproduksi di Rumah
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Semua masakan dibuat langsung di dapur rumah kami dengan standar
              kebersihan dan kehigienisan yang terjaga.
            </p>
          </div>

          {/* Kartu 2 */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-[#E24D3C] flex items-center justify-center mb-6">
              {/* <Heart className="w-9 h-9 text-white" /> */}
              <FaRegHeart size={30} className="text-white" />
            </div>
            <h3 className="text-leafGreen font-semibold text-lg mb-3">
              Dibuat dengan Cinta
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Setiap hidangan dibuat dengan penuh perhatian dan cinta, seperti
              memasak untuk keluarga sendiri.
            </p>
          </div>

          {/* Kartu 3 */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-[#F5A623] flex items-center justify-center mb-6">
              {/* <TrendingUp className="w-9 h-9 text-white" /> */}
              <FaArrowTrendUp size={30} className="text-white" />
            </div>
            <h3 className="text-leafGreen font-semibold text-lg mb-3">
              Mendukung Ekonomi Lokal
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Dengan memilih produk kami, Anda turut mendukung pertumbuhan UMKM
              lokal di Cirebon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
