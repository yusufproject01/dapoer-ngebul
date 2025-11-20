"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { poppins } from "@/components/Typography";
import FooterSection from "@/components/sections/FooterSection";
import Headers from "@/components/Headers";

export default function ContactPage() {
  const [nama, setNama] = useState("");
  const [hp, setHp] = useState("");
  const [pesan, setPesan] = useState("");

  const handleWhatsApp = () => {
    const adminNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
    const text = `Halo, saya *${nama}*%0A%0A${pesan}%0A%0ANomor HP: ${hp}`;
    window.open(`https://wa.me/${adminNumber}?text=${text}`, "_blank");
    setNama("");
    setHp("");
    setPesan("");
  };

  return (
    <main className={`${poppins.className} w-full bg-cream sm:pt-20 pt-0`}>
      <Headers
        Title="Hubungi Kami"
        Description="Ada pertanyaan atau ingin memesan? Kami siap membantu Anda"
      />

      {/* =================== FORM & CONTACT CARD =================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ================= FORM ================= */}
        <div className="bg-white px-6 py-8 rounded-xl shadow-sm flex flex-col">
          <h1 className="text-3xl text-leafGreen mb-6">Kirim Pesan</h1>

          {/* Input Field */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 text-sm">Nama Lengkap</label>
              <input
                className="w-full bg-slate-100 px-4 py-3 rounded-lg outline-none text-sm"
                placeholder="Masukkan nama Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Nomor HP / WhatsApp</label>
              <input
                className="w-full bg-slate-100 px-4 py-3 rounded-lg outline-none text-sm"
                placeholder="08xx xxxx xxxx"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Pesan</label>
              <textarea
                className="w-full bg-slate-100 px-4 py-3 rounded-lg h-40 outline-none text-sm"
                placeholder="Tulis pesan atau pertanyaan Anda..."
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
              />
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleWhatsApp}
            className="w-full mt-6 bg-leafGreen text-white py-3 rounded-full font-medium hover:scale-105 transition-all"
          >
            Kirim via WhatsApp
          </button>

          <p className="text-center mt-6 text-slate-600">
            Atau hubungi langsung
          </p>

          <button className="w-full mt-3 border-2 border-leafGreen bg-cream px-4 py-3 rounded-full text-leafGreen font-medium hover:bg-leafGreen hover:text-white transition-all">
            Chat Langsung via WhatsApp
          </button>
        </div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="flex flex-col gap-6">
          {/* Alamat */}
          <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
            <FaMapMarkerAlt size={38} className="text-leafGreen shrink-0" />
            <div>
              <h2 className="text-lg font-semibold mb-1">Alamat</h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Pabedilan Wetan, Cirebon
                <br /> Jawa Barat 45193
              </p>
            </div>
          </div>

          {/* Telepon */}
          <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
            <FaPhoneAlt size={38} className="text-orangeAccent shrink-0" />
            <div>
              <h2 className="text-lg font-semibold mb-1">Telepon / WhatsApp</h2>
              <p className="text-slate-700 font-medium text-sm">
                +62 812-3456-7890
              </p>
              <button className="text-leafGreen mt-1 text-sm">
                Klik untuk chat →
              </button>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
            <FaEnvelope size={38} className="text-yellow-600 shrink-0" />
            <div>
              <h2 className="text-lg font-semibold mb-1">Email</h2>
              <p className="text-slate-700 text-sm">dapoerngebul@email.com</p>
              <p className="text-xs text-slate-500">Respon 1x24 jam</p>
            </div>
          </div>

          {/* Jam Operasional */}
          <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 items-start">
            <FaClock size={42} className="text-brown-500 shrink-0" />
            <div>
              <h2 className="text-lg font-semibold mb-1">Jam Operasional</h2>
              <p className="text-slate-700 text-sm">
                Senin – Sabtu: 08:00 – 20:00 WIB
              </p>
              <p className="text-slate-700 text-sm">Minggu: Tutup</p>
            </div>
          </div>
        </div>
      </section>

      {/* =================== MAP =================== */}
      <section className="w-full my-10 px-6">
        <h1 className="text-center text-4xl font-semibold text-leafGreen mb-10">
          Lokasi Kami
        </h1>

        <div className="max-w-7xl mx-auto px-0 md:px-4">
          <div className="bg-slate-200 rounded-3xl overflow-hidden shadow-md w-full h-[350px] sm:h-[400px] md:h-[450px] flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps?q=Pabedilan%20Wetan&z=15&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
