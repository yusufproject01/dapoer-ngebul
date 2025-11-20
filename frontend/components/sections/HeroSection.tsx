import Image from "next/image";
import { poppins } from "../Typography";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main
      className={`${poppins.className} w-full h-screen relative overflow-hidden`}
    >
      {/* Background Image */}
      <div className="w-full h-full absolute inset-0">
        <Image
          src="/Background/Traditional-Food/traditional-food-01.png"
          alt="Dapoer Ngebul"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Overlay Content */}
      <section className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white leading-tight">
          Masakan Rumahan, Rasa Tak Terlupakan
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Dapoer Ngebul — Dari Dapur Rumah ke Meja Anda
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href={"/menu"}
            className="bg-leafGreen text-white sm:px-8 px-6 sm:py-3 py-2 sm:text-base text-sm rounded-full hover:bg-leafGreen-hover transition-all ease-in-out duration-200"
          >
            Lihat Menu
          </Link>
          <Link
            href={"/menu"}
            className="bg-white text-gray-800 sm:px-8 px-6 sm:py-3 py-2 sm:text-base text-sm rounded-full hover:bg-gray-200 transition-all ease-in-out duration-200"
          >
            Pesan Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
}
