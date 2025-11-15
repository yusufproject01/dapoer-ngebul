import { poppins } from "../Typography";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

export default function ContactSection() {
  return (
    <section
      className={`${poppins.className} w-full bg-white py-20 px-6 md:px-16`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-4xl font-bold text-leafGreen mb-3">
          Informasi & Kontak
        </h2>
        <p className="text-gray-700 mb-16">Kami siap melayani Anda!</p>

        {/* Grid Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kartu 1 - Jam Operasional */}
          <div className="bg-[#FFF7EB] rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-leafGreen flex items-center justify-center mb-6">
              <FaRegClock size={35} className="text-white" />
            </div>
            <h3 className="text-leafGreen font-semibold text-lg mb-3">
              Jam Operasional
            </h3>
            <p className="text-gray-800 font-medium">Senin - Sabtu</p>
            <p className="text-gray-800 mb-1">08:00 - 20:00 WIB</p>
            <p className="text-[#E24D3C] font-medium">Minggu: Tutup</p>
          </div>

          {/* Kartu 2 - Alamat */}
          <div className="bg-[#FFF7EB] rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-[#E24D3C] flex items-center justify-center mb-6">
              <LuMapPin size={35} className="text-white" />
            </div>
            <h3 className="text-leafGreen font-semibold text-lg mb-3">
              Alamat
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Jl. Kesambi Raya No. 123 <br />
              Kesambi, Cirebon <br />
              Jawa Barat 45133
            </p>
          </div>

          {/* Kartu 3 - Telepon */}
          <div className="bg-[#FFF7EB] rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-[#F5A623] flex items-center justify-center mb-6">
              <FiPhone size={35} className="text-white" />
            </div>
            <h3 className="text-leafGreen font-semibold text-lg mb-3">
              Telepon / WhatsApp
            </h3>
            <p className="text-gray-800 font-medium mb-2">+62 812-3456-7890</p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-leafGreen text-sm hover:text-[#55771A] transition-colors"
            >
              Chat via WhatsApp →
            </a>
          </div>

          {/* Kartu 4 - Email */}
          <div className="bg-[#FFF7EB] rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-[#C49A6C] flex items-center justify-center mb-6">
              <IoMailOutline size={35} className="text-white" />
            </div>
            <h3 className="text-leafGreen font-semibold text-lg mb-3">Email</h3>
            <p className="text-gray-800 font-medium mb-1 wrap-break-words">
              dapoerngebul@email.com
            </p>
            <p className="text-gray-600 text-sm">Respon 1x24 jam</p>
          </div>
        </div>
      </div>
    </section>
  );
}
