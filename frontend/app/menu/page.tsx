"use client";

import CartButton from "@/components/Buttons/CartButton";
import Image from "next/image";
import Link from "next/link";
import useMenuPageHook from "@/hooks/useMenuPage";
import { poppins } from "@/components/Typography";
import { MenuItem } from "@/lib/Datas/Menu";
import Headers from "@/components/Headers";
import FooterSection from "@/components/sections/FooterSection";
import FootChat from "@/components/FootChat";

export default function MenuPage() {
  const [
    addToCart,
    categories,
    activeCategory,
    setActiveCategory,
    categoryData,
  ] = useMenuPageHook();

  return (
    <main
      className={`${poppins.className} w-full min-h-screen overflow-x-hidden bg-cream sm:pt-20`}
    >
      {/* HEADER */}
      <Headers
        Title="Menu Dapoer Ngebul"
        Description="Beragam pilihan masakan rumahan yang lezat dan terjangkau"
      />

      {/* CATEGORY TAB */}
      <div className="w-full flex justify-center px-6">
        <div className="flex items-center justify-start gap-3 md:gap-6 my-10 px-4 py-2 overflow-x-auto scroll-smooth snap-x snap-mandatory max-w-5xl">
          {categories.map((cat: any) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-3 rounded-xl font-semibold border min-w-40 text-center snap-start
                transition-all duration-200 sm:text-base text-xs
                ${
                  activeCategory === cat
                    ? "bg-white border-leafGreen text-leafGreen shadow shadow-leafGreen/40"
                    : "bg-white/90 border-gray-300 text-gray-500 hover:bg-white"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MENU LIST */}
      <div className="px-6 md:px-10 lg:px-20 xl:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-16 max-w-7xl mx-auto">
        {categoryData[activeCategory].map((item: MenuItem) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="w-full h-52 relative z-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="font-bold text-xl text-leafGreen mb-1">
                {item.name}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-gray-800">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-orangeAccent text-white px-4 py-2 rounded-lg font-medium shadow hover:opacity-90 transition"
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CHECKOUT BUTTON (Sticky on mobile) */}
      <div className="z-10 mt-8 pb-10 text-center sticky bottom-0 bg-cream/80 backdrop-blur-sm py-6 border-t border-gray-300">
        <Link
          href="/menu/order"
          className="bg-leafGreen text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
        >
          Lanjutkan ke Pembayaran
        </Link>
      </div>

      {/* Konsultasi */}
      <FootChat
        Title="Ingin Menu Custom?"
        Description="Hubungi kami untuk request menu atau paket sesuai keinginan Anda!"
        TextBtn="Konsultasi via WhatsApp"
      />
      {/* Floating Cart Button */}
      <CartButton />

      <FooterSection />
    </main>
  );
}
