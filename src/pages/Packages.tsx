import Image from "next/image";
// import Link from "next/link";

import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section";
import PackageCards from "@/components/card/Package/PackageCards";
import { useRouter } from "next/router";
import { useState } from "react";

// import Section from "@/components/home/Section";

function Packages() {
  const router = useRouter();

  return (
    <>
      <Hero
        title="Stay Packages"
        subtitle="Choose the perfect package for your beachside escape"
        backgroundImage="/images/package.hero.jpg"
        position=""
      />

      <PackageCards />
    </>
  );
}

export default Packages;
