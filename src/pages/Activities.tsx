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
  const homeGallery = [
    "/images/ab-1.jpeg",
    "/images/ab-4.jpeg",
    "/images/ab-2.jpeg",
  ];
  return (
    <>
      <Hero
        title="Activities & Adventures"
        subtitle="Endless excitement both on water and shore"
        backgroundImage="/images/ground-1.jpg"
        position=""
      />

      <section className="w-full flex flex-col items-center text-center bg-(--bg-light) px-4 md:px-8  py-12 md:py-20">
        <div className="w-full max-w-[1368px] mx-auto mb-16 px-4 md:px-8 flex flex-col items-center text-center">
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
        <div className="w-full flex flex-col lg:flex-col justify-center items-center gap-12 mb-8">
          <ActivityCards />
          <Gallery images={homeGallery} />
        </div>
      </section>

      <section className="w-full flex flex-col items-center text-center bg-(--bg-beige) px-4 md:px-8 py-12 md:py-20">
        <div className="w-full max-w-[1368px] mx-auto mb-16 px-4 md:px-8 flex flex-col items-center text-center">
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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold !text-left mb-6">
              Bonfire Nights
            </h2>

            <p className="text-2 mb-6 text-justify">
              As the sun sets over the Arabian Sea, gather around our beachside
              bonfire for an unforgettable evening. Share stories, roast
              marshmallows, and enjoy the tranquil sound of waves under a
              starlit sky.
            </p>

            <p className="text-2 mb-6 text-justify">
              Our bonfire setup includes comfortable seating, ambient lighting,
              and all the essentials for a perfect beach evening. Available as
              part of our night package or as an add-on for day guests.
            </p>

            <div className="flex gap-2 justify-between flex-wrap">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/events.png"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-base">Seating for 20+</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icons/tv.png" alt="icon" width={20} height={20} />
                <span className="text-base">Music system</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/ride.png"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-base">Sunset views</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-84 rounded-2xl overflow-hidden">
            <Image
              src="/images/born-fire.jpg"
              alt="Bonfire"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;
