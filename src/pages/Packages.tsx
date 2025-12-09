import Image from "next/image";
// import Link from "next/link";

import Hero from "@/components/home/Hero";
import Button from "@/components/ui/Button";
import Section from "@/components/home/Section";
import PackageBottomCard from "@/components/card/Package/PackageBottomCard";

// import Section from "@/components/home/Section";

function Packages() {
  return (
    <>
      <Hero
        title="Stay Packages"
        subtitle="Choose the perfect package for your beachside escape"
        backgroundImage="/images/g-1.jpg"
      />

      <section className="w-full bg-(--bg-beige) py-12 md:py-20">
        <div className="w-[90%] mx-auto grid lg:grid-cols-2 gap-6">
          {/* LEFT PACKAGE */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            {/* TOP BOX */}
            <div
              className="p-6 md:p-10 flex flex-col text-left"
              style={{
                background: "linear-gradient(180deg, #D1C1A7 0%, #AEC6CF 100%)",
              }}
            >
              {/* Icon */}
              <Image
                src="/icons/sun.png"
                alt="icon"
                width={40}
                height={40}
                className="mb-4 md:mb-6 md:w-[60px] md:h-[60px]"
              />

              <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                Day Package
              </h3>

              <p className="text-sm md:text-base text-[var(--text-light)] mb-4 md:mb-6">
                10 AM - 6 PM
              </p>

              <p className="text-3xl md:text-5xl text-[var(--text-light)] font-bold">
                PKR 50,000
              </p>
              <p className="text-sm md:text-base text-[var(--text-light)]">
                Per booking
              </p>
            </div>

            {/* BOTTOM BOX */}
            <div className="p-6 md:p-10 bg-(--bg-light) flex flex-col gap-3 md:gap-4">
              <h4 className="text-base md:text-lg font-semibold">Includes:</h4>

              <ul className="mb-6 md:mb-8 flex flex-col gap-2 md:gap-3">
                {[
                  "Access to all lounges",
                  "Private pool usage",
                  "Complimentary Hi-Tea",
                  "Direct beachfront access",
                  "Pool-side amenities",
                  "Wi-Fi access",
                  "Parking included",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 md:gap-3 text-sm md:text-[16px] text-[var(--text-dark)]"
                  >
                    {/* Check Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 md:w-5 md:h-5 text-[var(--text-dark)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>

                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="beige" size="sm" radius="full">
                Book Now
              </Button>
            </div>
          </div>

          {/* RIGHT PACKAGE */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            {/* TOP BOX */}
            <div
              className="p-6 flex flex-col items-start text-left"
              style={{
                background: "linear-gradient(180deg, #0A3D62 0%, #AEC6CF 100%)",
              }}
            >
              {/* Icon */}
              <Image
                src="/icons/moon.png"
                alt="icon"
                width={40}
                height={40}
                className="mb-4"
              />

              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Day Package
              </h3>
              <p className="text-sm md:text-2 mb-3 text-[var(--text-light)]">
                10 AM - 6 PM
              </p>

              <p className="text-2xl md:text-5xl text-[var(--text-light)] font-bold mb-1">
                PKR 50,000
              </p>
              <p className="text-sm md:text-2 text-[var(--text-light)]">
                Per booking
              </p>
            </div>

            {/* BOTTOM BOX */}
            <div className="p-6 bg-[var(--bg-light)] flex flex-col gap-2 md:gap-4">
              <h4 className="text-base md:text-lg font-semibold">Includes:</h4>

              <ul className="flex flex-col gap-2 md:gap-3 mb-4">
                {[
                  "Access to all lounges",
                  "Private pool usage",
                  "Complimentary Hi-Tea",
                  "Direct beachfront access",
                  "Pool-side amenities",
                  "Wi-Fi access",
                  "Parking included",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 md:gap-3 text-sm md:text-[16px] text-[var(--text-dark)]"
                  >
                    {/* Check Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 md:w-5 md:h-5 text-[var(--text-dark)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>

                    {item}
                  </li>
                ))}
              </ul>

              <Button size="sm" radius="full">
                Book This Package
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Important Information"
        subtitle="Please review our booking policies before making a reservation"
        bgColor="bg-light"
      >
        <PackageBottomCard
          bgColor="#f5efe7"
          icon="/icons/sun.png"
          title="Day Package"
        >
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Minimum 3 days advance booking required
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Full property booking ensures complete privacy
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Maximum capacity: 50 guests for events
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Check-in/check-out times strictly followed
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Additional guests charged per person
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Outside catering allowed with prior approval
              </span>
            </li>
          </ul>
        </PackageBottomCard>

        <PackageBottomCard
          bgColor="#eff4f5"
          icon="/icons/sun.png"
          title="Day Package"
        >
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Minimum 3 days advance booking required
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Full property booking ensures complete privacy
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Maximum capacity: 50 guests for events
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Check-in/check-out times strictly followed
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Additional guests charged per person
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Outside catering allowed with prior approval
              </span>
            </li>
          </ul>
        </PackageBottomCard>

        <PackageBottomCard
          bgColor="#f5efe7"
          icon="/icons/sun.png"
          title="Day Package"
        >
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Minimum 3 days advance booking required
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Full property booking ensures complete privacy
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Maximum capacity: 50 guests for events
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Check-in/check-out times strictly followed
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Additional guests charged per person
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image
                src="/icons/li.png"
                alt="check"
                width={16}
                height={16}
                className="mt-1"
              />
              <span className="text-[14px] text-[var(--text-dark)]">
                Outside catering allowed with prior approval
              </span>
            </li>
          </ul>
        </PackageBottomCard>
      </Section>
    </>
  );
}

export default Packages;
