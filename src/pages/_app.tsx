import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

import Navbar from "../components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AvailableSlotModalProvider } from "@/context/AvailableSlotModalContext";
import AvailabilityModal from "@/components/modal/AvailabilityModal";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: any }) {
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
    <AvailableSlotModalProvider>
      {getLayout(<Component {...pageProps} />)}
      <AvailabilityModal /> {/* Always mounted, controlled by context */}
      <Toaster position="top-right" />
    </AvailableSlotModalProvider>
  );
}
