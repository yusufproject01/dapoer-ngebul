"use client";

import { poppins } from "../Typography";
import { foodMenu, paketMenu } from "@/lib/Datas/Menu";
import Link from "next/link";
import Image from "next/image";

export default function MenuSection() {
  const allMenu = [...foodMenu, ...paketMenu];
  const popularMenu = allMenu.filter((item) => item.popular);

  return (
    <section
      className={`${poppins.className} w-full py-20 px-6 md:px-16 bg-warmCream text-center`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-leafGreen mb-2">
        Menu Populer Kami
      </h2>

      <p className="text-gray-700 mb-12">
        Pilihan favorit pelanggan yang wajib dicoba!.
      </p>

      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-6 
        justify-items-center
      "
      >
        {popularMenu.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg p-4 w-full max-w-xs"
          >
            <div className="w-full h-40 relative mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded"
              />
            </div>

            <h3 className="font-bold text-lg text-start">{item.name}</h3>
            <p className="text-gray-600 mb-3 text-xs text-start">
              {item.description}
            </p>
            <div className="w-full py-2 flex items-center justify-between">
              <p className="text-2xl font-semibold">
                Rp. {item.price.toLocaleString("id-ID")}
              </p>
              <Link
                href="/menu" // arahkan ke MenuPage, bukan langsung order
                className="bg-orangeAccent text-white px-4 py-2 rounded-full block mt-2"
              >
                Pesan
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
