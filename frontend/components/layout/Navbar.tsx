"use client";

import { LiaWhatsapp } from "react-icons/lia";
import { poppins } from "../Typography";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Fungsi untuk navigasi dengan scroll halus
  const handleNavigate = (path: string) => {
    // Scroll ke atas secara smooth
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Redirect setelah animasi scroll selesai
    setTimeout(() => {
      router.push(path);
    }, 500);
  };

  return (
    <nav
      className={`${poppins.className} w-full h-14 sm:h-24 md:h-20 fixed z-50 bg-white 
      border-b border-slate-200 shadow-sm px-6 md:px-12`}
    >
      <section
        className="
          w-full
          h-full
          flex
          justify-between
          items-center
        "
      >
        {/* Logo */}
        <div
          className="flex justify-center md:justify-start items-center 
          gap-x-3 hover:cursor-pointer brightness-90 hover:brightness-100 transition-all ease-in-out duration-300"
          onClick={() => handleNavigate("/")}
        >
          <div className="w-14 h-14 flex justify-center items-center rounded-full">
            <Image
              src={"/Icon/Dapoer-Ngebul.png"}
              alt="Dapur Ngebul"
              width={500}
              height={500}
              className="object-contain w-full hful"
            />
          </div>
          <div className="h-full flex flex-col items-start justify-center">
            <h1 className="text-lg font-medium text-leafGreen">
              Dapoer Ngebul
            </h1>
            <p className="text-[13px] font font-medium text-orangeAccent">
              Masakan Rumahan
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="md:col-span-4 hidden sm:flex justify-center items-center">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg">
            <li>
              <button
                onClick={() => handleNavigate("/")}
                className={`${
                  pathname === "/"
                    ? "text-leafGreen font-semibold"
                    : "text-slate-700"
                }`}
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavigate("/about")}
                className={`${
                  pathname === "/about"
                    ? "text-leafGreen font-semibold"
                    : "text-slate-700"
                }`}
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavigate("/menu")}
                className={`${
                  pathname === "/menu"
                    ? "text-leafGreen font-semibold"
                    : "text-slate-700"
                }`}
              >
                Menu
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavigate("/catering")}
                className={`${
                  pathname === "/catering"
                    ? "text-leafGreen font-semibold"
                    : "text-slate-700"
                }`}
              >
                Catering
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavigate("/gallery")}
                className={`${
                  pathname === "/gallery"
                    ? "text-leafGreen font-semibold"
                    : "text-slate-700"
                }`}
              >
                Gallery
              </button>
            </li>

            <li>
              <button
                onClick={() => handleNavigate("/contact")}
                className={`${
                  pathname === "/contact"
                    ? "text-leafGreen font-semibold"
                    : "text-slate-700"
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Tombol WA */}
        <div className="hidden sm:flex justify-center md:justify-end items-center">
          <button
            onClick={() => handleNavigate("/contact")}
            className="h-full flex gap-x-2 px-4 py-2 bg-green-600 text-white font-medium rounded-md text-xs md:text-sm hover:scale-105 transition-all ease-in-out duration-300"
          >
            <div className="h-full flex items-center justify-center">
              <LiaWhatsapp size={18} />
            </div>
            Pesan via WhatsApp
          </button>
        </div>
      </section>
    </nav>
  );
}
