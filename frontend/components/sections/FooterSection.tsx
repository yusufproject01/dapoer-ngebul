import Image from "next/image";
import Link from "next/link";
import { BiMailSend, BiMapPin, BiPhone } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaHeart, FaPhone } from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className="bg-[#2E4029] text-white py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Kolom 1 - Logo dan Deskripsi */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 flex justify-center items-center rounded-full">
              <Image
                src={"/Icon/Dapoer-Ngebul-03.png"}
                alt="Dapur Ngebul"
                width={500}
                height={500}
                className="object-contain w-full hful"
              />
            </div>
            <div className="h-full flex flex-col items-start justify-center">
              <h1 className="text-lg font-medium text-white">Dapoer Ngebul</h1>
              <p className="text-[13px] font font-medium text-orangeAccent">
                Masakan Rumahan
              </p>
            </div>
          </div>
          <p className="text-[#E5E5E5] text-sm leading-relaxed">
            Masakan rumahan dengan cita rasa autentik Indonesia, dari dapur
            rumah ke meja Anda.
          </p>
        </div>

        {/* Kolom 2 - Menu Cepat */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Menu Cepat</h4>
          <ul className="space-y-2 text-[#E5E5E5]">
            <li>
              <Link href="/" className="hover:text-[#F5A623] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/tentang"
                className="hover:text-[#F5A623] transition-colors"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="hover:text-[#F5A623] transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/catering"
                className="hover:text-[#F5A623] transition-colors"
              >
                Catering
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-[#F5A623] transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#F5A623] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3 - Kontak */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
          <ul className="space-y-3 text-[#E5E5E5]">
            <li className="flex items-start gap-2">
              <BiMapPin className="w-5 h-5 text-[#F5A623] mt-0.5" />
              <span>
                Jl. Kesambi Raya No. 123
                <br />
                Cirebon, Jawa Barat
              </span>
            </li>
            <li className="flex items-center gap-2">
              <BiPhone className="w-5 h-5 text-[#F5A623]" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <BiMailSend className="w-5 h-5 text-[#F5A623]" />
              <span>dapoerngebul@email.com</span>
            </li>
          </ul>
        </div>

        {/* Kolom 4 - Sosial Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h4>
          <div className="flex items-center gap-3 mb-4">
            <a
              href="#"
              className="w-10 h-10 bg-[#3D4C3A] rounded-full flex items-center justify-center hover:bg-[#6B8E23] transition-all"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#3D4C3A] rounded-full flex items-center justify-center hover:bg-[#6B8E23] transition-all"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="w-10 h-10 bg-[#3D4C3A] rounded-full flex items-center justify-center hover:bg-[#6B8E23] transition-all"
            >
              <FaPhone className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-[#E5E5E5]">
            Jam Operasional:
            <br />
            <span className="font-medium">Senin - Sabtu</span>
            <br />
            08:00 - 20:00 WIB
          </p>
        </div>
      </div>

      {/* Garis Pemisah */}
      <div className="border-t border-[#465943] mt-12 pt-6 text-center text-[#D6E2C3] text-sm">
        © 2025 Dapoer Ngebul. All rights reserved. Made with{" "}
        <FaHeart className="inline w-4 h-4 text-[#E24D3C]" /> in Cirebon
      </div>
    </footer>
  );
}
