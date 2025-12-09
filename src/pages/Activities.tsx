import React from "react";
import Image from "next/image";

import Hero from "@/components/home/Hero";
import Gallery from "@/components/card/homeCard/GalleryCard";
import Button from "@/components/ui/Button";
import ActivityCards from "@/components/card/ActivitiesCard/ActivitiesCards";
import BeachCards from "@/components/card/ActivitiesCard/BeachCards";
import Section from "@/components/home/Section";
import ActivitiesBottomcards from "@/components/card/ActivitiesCard/ActivitiesBottomcards";

function Activities() {
  const homeGallery = ["/images/g-1.jpg", "/images/g-2.jpg", "/images/g-3.jpg"];
  return (
    <>
      <Hero
        title="Activities & Adventures"
        subtitle="Endless excitement both on water and shore"
        backgroundImage="/images/about-hero.jpg"
      />

      <section className="w-full flex flex-col items-center text-center bg-(--bg-light) px-4 md:px-8  py-12 md:py-20">
        <div className="mb-16 w-[60%] max-[769px]:w-[90%] max-[425px]:w-full ">
          <div className="inline-flex bg-[#AEC6CF33] py-2 px-6 mb-6 rounded-full items-center text-(--text-dark)">
            Water Adventures
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Dive Into Adventure
          </h2>
          <p className="text-1">
            Experience the thrill of the ocean with our exciting water sports
            and activities
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-y-12 mb-8 ">
          <ActivityCards />
          <Gallery images={homeGallery} />
        </div>
      </section>

      <section className="w-full flex flex-col items-center text-center bg-(--bg-beige) px-4 md:px-8 py-12 md:py-20">
        <div className="mb-16 w-[60%] max-[769px]:w-[90%] max-[425px]:w-full ">
          <div className="inline-flex bg-[#AEC6CF33] py-2 px-6 mb-6 rounded-full items-center text-(--text-dark)">
            On-Shore Activities
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Beach & Beyond
          </h2>
          <p className="text-1">
            Discover traditional and modern activities along the beautiful
            Hawksbay shoreline
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center mb-8 ">
          <BeachCards />
        </div>
      </section>

      <section className="w-full bg-[var(--bg-light)] py-12 md:py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold !text-left mb-6">
              Bonfire Nights
            </h2>

            <p className="text-2 mb-6">
              As the sun sets over the Arabian Sea, gather around our beachside
              bonfire for an unforgettable evening. Share stories, roast
              marshmallows, and enjoy the tranquil sound of waves under a
              starlit sky.
            </p>

            <p className="text-2 mb-6">
              Our bonfire setup includes comfortable seating, ambient lighting,
              and all the essentials for a perfect beach evening. Available as
              part of our night package or as an add-on for day guests.
            </p>

            <div className="flex gap-2 justify-between flex-wrap">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/sun-2.png"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-base">Seating for 20+</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/fire.png"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-base">Music system</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/music.png"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-base">Sunset views</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-64 md:h-[400px] lg:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/born-fire.jpg"
              alt="Bonfire"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Section
        title="Safety First"
        titleColor="var(--text-light)"
        subtitle="Your safety is our priority. All activities are supervised by trained professionals."
        subtitleColor="var(--text-light)"
        bgColor="bg-dark"
      >
        <ActivitiesBottomcards />
      </Section>
    </>
  );
}

export default Activities;
