"use client";

import { LiaWhatsapp } from "react-icons/lia";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // hamburger
import { IoClose } from "react-icons/io5"; // close
import { poppins } from "../Typography";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  // Fungsi navigasi dengan smooth scroll
  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => router.push(path), 400);
    setOpenMenu(false); // tutup menu mobile
  };

  return (
    <nav
      className={`${poppins.className} w-full h-16 sm:h-24 md:h-20 fixed z-50 bg-white 
      border-b border-slate-200 shadow-sm px-6 md:px-12 flex items-center justify-between`}
    >
      {/* LOGO */}
      <div
        className="flex items-center gap-x-3 hover:cursor-pointer brightness-90 hover:brightness-100 transition-all"
        onClick={() => handleNavigate("/")}
      >
        <div className="sm:w-14 w-10 sm:h-14 h-10  flex justify-center items-center rounded-full">
          <Image
            src={"/Icon/Dapoer-Ngebul-03.png"}
            alt="Dapur Ngebul"
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="sm:text-lg text-base font-medium text-leafGreen">
            Dapoer Ngebul
          </h1>
          <p className="sm:text-[13px] text-[11px] font-medium text-orangeAccent">
            Masakan Rumahan
          </p>
        </div>
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden sm:flex">
        <ul className="flex gap-8 text-lg">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Menu", "/menu"],
            ["Catering", "/catering"],
            ["Gallery", "/gallery"],
            ["Contact", "/contact"],
          ].map(([name, link]) => (
            <li key={link}>
              <button
                onClick={() => handleNavigate(link)}
                className={`${
                  pathname === link
                    ? "text-leafGreen font-semibold"
                    : "text-slate-700"
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* TOMBOL WA DESKTOP */}
      <div className="hidden sm:flex">
        <button
          onClick={() => handleNavigate("/contact")}
          className="flex gap-x-2 px-4 py-2 bg-green-600 text-white font-medium rounded-md text-xs md:text-sm hover:scale-105 transition-all"
        >
          <LiaWhatsapp size={18} />
          Pesan via WhatsApp
        </button>
      </div>

      {/* ICON MENU (MOBILE) */}
      <button
        className="sm:hidden text-leafGreen"
        onClick={() => setOpenMenu(true)}
      >
        <HiOutlineMenuAlt3 size={30} />
      </button>

      {/* ==================== MOBILE MENU ==================== */}
      {openMenu && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpenMenu(false)}
          />

          {/* Panel menu */}
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg 
            p-6 flex flex-col gap-6 animate-slide-left"
          >
            {/* Close button */}
            <div className="flex justify-end">
              <button onClick={() => setOpenMenu(false)}>
                <IoClose size={32} className="text-slate-700" />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-5 text-lg">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Menu", "/menu"],
                ["Catering", "/catering"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([name, link]) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavigate(link)}
                    className={`w-full text-left ${
                      pathname === link
                        ? "text-leafGreen font-semibold"
                        : "text-slate-700"
                    }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Tombol WA Mobile */}
            <button
              onClick={() => handleNavigate("/contact")}
              className="mt-4 flex items-center justify-center gap-x-2 px-4 py-2 bg-green-600 text-white font-medium rounded-md text-sm hover:scale-105 transition-all"
            >
              <LiaWhatsapp size={18} />
              Pesan via WhatsApp
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
