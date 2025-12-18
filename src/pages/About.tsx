import Image from "next/image";
// import Link from "next/link";

import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section";
import Journey from "@/components/card/aboutCard/Journey";
import GuideCards from "@/components/card/aboutCard/GuideCards";
// import BottomSection from "@/components/home/BottomSection";

function About() {
  return (
    <>
      <Hero
        title="Our Story"
        subtitle="A legacy of luxury, hospitality, and coastal elegance"
        backgroundImage="/images/design.jpg"
        position=""
      />

      {/* Section One */}

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center items-center h-[400px] md:h-[600px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/about-s-2.jpg"
                alt="The Coastal Pearl"
                fill
                style={{ objectFit: "cover", borderRadius: "16px" }}
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <div className="w-[160px] bg-[#AEC6CF33] py-2 px-4 mb-6 rounded-full flex items-center">
              Founder's Name
            </div>

            <h2 className="!text-left mb-6">A Dream Realized</h2>

            <p className="text-2 mb-6">
              The Coastal Pearl was born from a vision to create a sanctuary
              where the sophistication of luxury hospitality meets the untamed
              beauty of nature. Growing up along the coast of Karachi, I always
              dreamed of establishing a place that would showcase the stunning
              potential of Hawksbay.
            </p>

            <p className="text-2 mb-6">
              After years of careful planning and design, we opened our doors
              with one simple promise: to offer every guest an experience that
              transcends ordinary hospitality. Each element of our resort, from
              the architectural details to the personalized service, reflects
              our commitment to excellence.
            </p>

            <p className="text-2 mb-6">
              Today, The Coastal Pearl stands as a testament to what can be
              achieved when passion, vision, and dedication come together. We
              invite you to experience the magic for yourself.
            </p>

            <p className="text-2 opacity-100">— Founder & Director</p>
            <p className="text-2 !text-[var(--text-beige)]">
              The Coastal Pearl Resort
            </p>
          </div>
        </div>
      </section>

      <Section
        title="The Coastal Pearl Journey"
        subtitle="From concept to reality, discover how we transformed a stretch of pristine coastline into Karachi's most exclusive beachfront resort."
        bgColor="bg-beige"
      >
        <Journey />
      </Section>

      <Section
        title="Our Guiding Principles"
        subtitle="The values and beliefs that shape every aspect of The Coastal Pearl experience."
        bgColor="bg-light"
      >
        <GuideCards />
      </Section>

      <section className="w-full bg-[var(--bg-dark)] py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          {/* LEFT TEXT CONTENT */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold !text-left !text-[var(--text-light)] mb-6">
              Spaces Design Wedith Purpose
            </h2>

            <p className="text-2 !text-[var(--text-light)] mb-4 text-justify">
              Private stay and family getways , Coporate offsite and curated
              events , Beachside, dinner and cabana setups, Photoshoots,
              creative projects, and celebrations
            </p>

            <p className="text-2 !text-[var(--text-light)] mb-4 text-justify">
              we don't believe in one-size-fits-all hospitality. Every guest
              arrives with a different reason, and we adapt accordingly.If you
              want quite we protect it, If you want to celebrate, we help you do
              it right.
            </p>

            <p className="text-2 !text-[var(--text-light)] text-justify">
              We see the beauty is rawness, potencial in the silence, and pride
              in offering a space that reflects a positive images's of Karachi
              beaches. The Costal Pride Resort is our Contribution to reshaping
              the city's costal side
            </p>
          </div>

          {/* RIGHT IMAGES FLEX */}
          <div className="flex-1 flex flex-wrap gap-4 h-full p-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex-1 min-w-[48%] md:min-w-[48%] rounded-2xl overflow-hidden *h-[180px] md:h-[220px] relative"
              >
                <Image
                  src={`/images/ab-${i}.jpeg`}
                  alt=""
                  width={264}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
