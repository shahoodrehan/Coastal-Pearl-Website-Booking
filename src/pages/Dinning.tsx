import Image from "next/image";

import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section";

import DiningCards from "@/components/card/DinningCard/DinningCards";
import MenuCards from "@/components/card/DinningCard/MenuCards";
import TeaCard from "@/components/card/DinningCard/TeaCards";

function Dinning() {
  return (
    <>
      <Hero
        title="Dining Experience"
        subtitle="Culinary excellence meets coastal charm"
        backgroundImage="/images/about-hero.jpg"
      />
      <Section
        title="Dining Spaces"
        subtitle="Multiple venues to suit every occasion, from intimate meals to grand celebrations"
      >
        <DiningCards />
      </Section>

      <section className="w-full bg-[var(--bg-beige)] py-12 md:py-20">
        <div className="w-[90%] mx-auto flex flex-col gap-12">
          <div class="w-full flex flex-col lg:flex-row lg:items-center gap-14">
            {/* LEFT — LARGE IMAGE */}
            <div
              className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden 
             h-64 md:h-96 lg:h-[600px] p-6"
            >
              <Image
                src="/images/space-2.jpg"
                alt="Design"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  Luxury Bedrooms
                </h3>
                <p className="!text-[var(--text-light)] text-2 opacity-90">
                  Wake up to breathtaking ocean views
                </p>
              </div>
            </div>

            {/* RIGHT — TWO BOXES */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              {/* Top Box: Image with text */}
              <div className="relative w-full h-[288px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/space-3.jpg"
                  alt="Top Room"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h4 className="!text-(--text-light) mb-1">Premium Suite</h4>
                  <p className="text-white/80 text-sm">
                    Ocean view with private balcony
                  </p>
                </div>
              </div>

              <div className="w-full p-6 rounded-2xl bg-white shadow-md flex flex-col">
                <h4 className="mb-4">Catering Services</h4>
                <p className="text-gray-700 mb-6">
                  We offer comprehensive catering services for all your events.
                  Our culinary team can create customized menus to suit your
                  preferences and dietary requirements.
                </p>

                <ul className=" gap-6">
                  <li className="flex items-center gap-2 mb-3">
                    <Image
                      src="/icons/brown-kitchen.png"
                      alt="check"
                      width={16}
                      height={16}
                    />
                    <span className="flex items-center text-base text-(--text-dark) opacity-80 ">
                      Climate controlled
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-3">
                    <Image
                      src="/icons/brown-kitchen.png"
                      alt="check"
                      width={16}
                      height={16}
                    />
                    <span className="text-base text-(--text-dark) opacity-80 ">
                      Premium tableware
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-3">
                    <Image
                      src="/icons/brown-kitchen.png"
                      alt="check"
                      width={16}
                      height={16}
                    />
                    <span className="text-base text-(--text-dark) opacity-80 ">
                      Ambient lighting
                    </span>
                  </li>
                  <li className="flex items-center gap-2 mb-3">
                    <Image
                      src="/icons/brown-kitchen.png"
                      alt="check"
                      width={16}
                      height={16}
                    />
                    <span className="text-base text-(--text-dark) opacity-80">
                      Sound system
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Our Menu"
        subtitle="A curated selection of local and international flavors"
      >
        <MenuCards />
        <p className="text-2 mt-6">
          *Menu items subject to seasonal availability. Custom requests and
          dietary preferences can be accommodated.
        </p>
      </Section>

      <section className="w-full bg-[var(--bg-dark)] py-12 md:py-20 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold !text-left mb-6 !text-(--text-light)">
              Beachside BBQ
            </h2>

            <p className="text-2 mb-6 !text-(--text-light) opacity-100">
              Experience the authentic taste of grilled perfection with our
              beachside BBQ setup. Fresh ingredients, expert grilling, and the
              soothing sound of waves create an unforgettable dining experience.
            </p>

            <p className="text-2 mb-6 !text-(--text-light) opacity-100">
              Our BBQ packages include fresh meats, marinades, grilling
              assistance, and all necessary equipment. Perfect for family
              gatherings, celebrations, or a casual evening by the sea.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/fire.png"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-base text-(--text-light)">
                  Fresh ingredients
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/icons/fire.png"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-base text-(--text-light)">
                  Grilling assistance
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/icons/fire.png"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-base text-(--text-light)">
                  Seating setup
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/icons/fire.png"
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-base text-(--text-light)">
                  Beachside location
                </span>
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
        title="Afternoon Hi-Tea"
        subtitle="Indulge in a traditional afternoon tea experience with a coastal twist. Enjoy premium teas, fresh pastries, and light refreshments while overlooking the Arabian Sea."
        bgColor="bg-beige"
      >
        <TeaCard />
      </Section>
    </>
  );
}

export default Dinning;
