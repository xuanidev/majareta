import { Poppins, Rethink_Sans } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: '--font-poppins',
});

export const rethink = Rethink_Sans({
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"],
  variable: '--font-rethink',
});
