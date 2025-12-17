import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: any }) {
  // Use page's custom layout if defined
  const getLayout =
    Component.getLayout ??
    ((page: React.ReactNode) => (
      <>
        <Navbar />
        {page}
        <Footer />
      </>
    ));

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Toaster position="top-right" />
    </>
  );
}
