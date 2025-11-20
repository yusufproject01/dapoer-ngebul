"use client";

import Image from "next/image";
import { poppins } from "@/components/Typography";
import Headers from "@/components/Headers";
import ScrollToTop from "@/components/Buttons/ScrollToTop";
import FooterSection from "@/components/sections/FooterSection";
import FootChat from "@/components/FootChat";

export default function GallerySection() {
  // Data bisa kamu ambil dari database jika perlu
  const galleryImages = [
    {
      src: "/Menu/rendang.png",
      title: "Rendang",
      category: "Menu Utama",
    },
    {
      src: "/Menu/sate-ayam-madura.png",
      title: "Sate Ayam Madura",
      category: "Menu Utama",
    },
    {
      src: "/Menu/nasi-goreng.png",
      title: "Nasi Goreng",
      category: "Menu Utama",
    },
    {
      src: "/Menu/soto-ayam-kuning.png",
      title: "Soto Ayam Kuning",
      category: "Menu Utama",
    },
    {
      src: "/Background/Traditional-Food/traditional-food-04.png",
      title: "Paket Ekonomis",
      category: "Catering",
    },
    {
      src: "/Background/Traditional-Food/traditional-food-02.png",
      title: "Paket Spesial",
      category: "Catering",
    },
    {
      src: "/Background/Traditional-Food/traditional-food-01.png",
      title: "Paket Premium",
      category: "Catering",
    },
    {
      src: "/Background/Traditional-Food/traditional-food-03.png",
      title: "Custom Paket",
      category: "Spesial",
    },
  ];

  return (
    <section
      className={`${poppins.className} w-full min-h-screen bg-[#F8F1E7] sm:pt-20 pt-0`}
    >
      <div className="max-w-7xl mx-auto">
        <Headers
          Title="Gallery Dapoer Ngebul"
          Description="Hasil karya kuliner kami yang menggugah selera"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 sm:px-8 pt-10">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-sm"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title || "Gallery Image"}
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
              />

              {/* Hover Overlay Title */}
              {item.title && (
                <div
                  className="
                    w-full h-1/2
                    flex flex-col justify-end
                    absolute bottom-0 left-0 right-0
                    bg-linear-to-t from-black to-transparent
                    px-4 sm:py-3 py-6
                    text-white
                    sm:opacity-0
                    translate-y-3
                    sm:group-hover:opacity-100
                    sm:group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                >
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm opacity-90">{item.category}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <FootChat
        Title="Tertarik dengan menu kami?"
        Description="Pesan sekarang dan rasakan kelezatan masakan rumahan kami!"
        TextBtn="Pesan via WhatsApp"
      />
      <FooterSection />
      {/* Scroll to Top */}
      <ScrollToTop />
    </section>
  );
}
