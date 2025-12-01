import Image from "next/image";
// import Link from "next/link";

import Hero from "@/components/home/Hero";
import GroundFloorCards from "@/components/card/Spaces/GroundFloorCards";
import FirstFloorCards from "@/components/card/Spaces/FirstFloorCards";
import TopFloorCards from "@/components/card/Spaces/TopFloorCards";
import SpaceBottomCards from "@/components/card/Spaces/SpaceBottomCards";
import Section from "@/components/home/Section";

function ResortSpaces() {
  return (
    <>
      <Hero
        title="Resort Spaces"
        subtitle="Discover our thoughtfully designed spaces across three magnificent floors"
        
        backgroundImage="/images/about-hero.jpg"
      />

      {/* GROUND FLOOR */}

      <section className="w-full bg-[var(--bg-light)] py-20">
        <div className="w-[90%] mx-auto flex flex-col gap-12">
          {/* TOP HEADING + PARAGRAPHS */}
          <div className="w-full lg:w-[70%]">
            <div className="inline-flex bg-[#AEC6CF33] py-2 px-6 mb-6 rounded-full items-center text-(--text-dark)">
              Level 1
            </div>
            <h2 className="text-white mb-6 !text-left">Ground Floor</h2>

            <p className="text-2 text-left text-[var(--text-light)] mb-4 ">
              The heart of our resort features expansive communal spaces, a
              stunning private pool, and direct access to the pristine beach.
              Perfect for gathering, relaxing, and creating memories.
            </p>
          </div>

          {/* BOTTOM TWO COLUMNS */}
          <div className="w-full flex flex-col lg:flex-row gap-14">
            {/* LEFT — CARD LIST */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <GroundFloorCards />
            </div>

            {/* RIGHT — IMAGE GRID */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 auto-rows-fr justify-center">
              <div className="rounded-2xl overflow-hidden h-80">
                <Image
                  src="/images/space-1.jpg"
                  alt="design"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden h-80">
                <Image
                  src="/images/space-2.jpg"
                  alt="design"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden h-40">
                <Image
                  src="/images/space-3.jpg"
                  alt="design"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="rounded-2xl overflow-hidden h-40">
                <Image
                  src="/images/g-1.jpg"
                  alt="design"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST FLOOR */}

      <section className="w-full bg-[var(--bg-beige)] py-20">
        <div className="w-[90%] mx-auto flex flex-col gap-12">
          <div className="w-full lg:w-[70%]">
            <div className="inline-flex bg-(--bg-light) py-2 px-6 mb-6 rounded-full items-center text-(--text-dark)">
              Level 2
            </div>

            <h2 className="text-white mb-6 !text-left">First Floor</h2>

            <p className="text-2 text-left text-[var(--text-light)] mb-4 ">
              Experience tranquility in our luxurious sea-facing bedrooms, each
              designed for ultimate comfort and privacy. Includes a dedicated
              theatre lounge for entertainment and relaxation.
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-14">
            {/* LEFT — IMAGE GRID */}
            <div
              className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden 
                h-64 md:h-96 lg:h-[500px] p-6"
            >
              {/* Background Image */}
              <Image
                src="/images/space-2.jpg"
                alt="Design"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  Luxury Bedrooms
                </h3>
                <p className="!text-[var(--text-light)] text-2 opacity-90">
                  Wake up to breathtaking ocean views
                </p>
              </div>
            </div>

            {/* RIGHt — CARD LIST */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <FirstFloorCards />
            </div>
          </div>
        </div>
      </section>

      {/* TOP FLOOR */}

      <section className="w-full bg-[var(--bg-light)] py-20">
        <div className="w-[90%] mx-auto flex flex-col gap-12">
          {/* TOP HEADING + PARAGRAPHS */}
          <div className="w-full lg:w-[70%]">
            <div className="inline-flex bg-[#AEC6CF33] py-2 px-6 mb-6 rounded-full items-center text-(--text-dark)">
              Level 3
            </div>

            <h2 className="text-white mb-6 !text-left">Top Floor Terrace</h2>

            <p className="text-2 text-left text-[var(--text-light)] mb-4 ">
              Our crown jewel - a magnificent rooftop terrace offering
              360-degree views of the ocean and coastline. The perfect setting
              for events, celebrations, and unforgettable sunsets.
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-14">
            {/* LEFT — CARD LIST */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <TopFloorCards />
            </div>

            {/* Right — IMAGE GRID */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden 
                h-64 md:h-96 lg:h-[500px] p-6">
              {/* Background Image */}
              <Image
                src="/images/space-3.jpg"
                alt="Design"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>

              {/* Overlay: Heading + Text at bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  Rooftop Experience
                </h3>
                <p className="!text-[var(--text-light)] text-2 opacity-90">
                  Panoramic views and endless sky
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Complete Resort Experience"
        titleColor="var(--text-light)"
        subtitle="Every level of The Coastal Pearl has been meticulously designed to offer unique experiences while maintaining a cohesive sense of luxury and comfort."
        subtitleColor="var(--text-light)"
        bgColor="bg-dark"
      >
        <SpaceBottomCards />
      </Section>
    </>
  );
}

export default ResortSpaces;
