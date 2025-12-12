import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Toaster position="top-center" />
      <Footer />
    </div>
  );
}
