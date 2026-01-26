import { Poppins, DM_Sans } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: "400",
});
