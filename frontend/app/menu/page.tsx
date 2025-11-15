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
      className={`${poppins.className} w-full h-auto grid overflow-x-hidden sm:pt-20 bg-cream`}
    >
      {/* Floating Cart Button */}
      <CartButton />

      <Headers
        Title="Menu Dapoer Ngebul"
        Description="Beragam pilihan masakan rumahan yang lezat dan terjangkau"
      />

      {/* CATEGORY TAB */}
      <div className="flex items-center justify-center gap-3 md:gap-6 my-10 overflow-x-auto py-2">
        {categories.map((cat: any) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-6 py-3 rounded-xl font-semibold border
              transition-all min-w-[180px] text-center
              ${
                activeCategory === cat
                  ? "bg-white shadow-leafGreen border-leafGreen text-leafGreen shadow"
                  : "bg-white/90 border-gray-300 text-gray-500"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MENU LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {categoryData[activeCategory].map((item: MenuItem) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
          >
            {/* IMAGE */}
            <div className="w-full h-48 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="font-bold text-xl text-leafGreen mb-1">
                {item.name}
              </h3>

              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <p className="text-2xl font-bold text-gray-800">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-orangeAccent text-white px-4 py-2 rounded-lg font-medium shadow hover:opacity-90"
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CHECKOUT BUTTON */}
      <div className="mt-12 text-center pb-10">
        <Link
          href="/menu/order"
          className="bg-leafGreen text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:opacity-90"
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

      <FooterSection />
    </main>
  );
}
