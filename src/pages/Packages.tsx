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

      <section className="w-full bg-(--bg-beige) py-20">
        <div className="w-[90%] mx-auto grid lg:grid-cols-2 gap-6">
          {/* LEFT PACKAGE */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            {/* TOP BOX */}
            <div
              className="p-10 flex flex-col items-left text-left"
              style={{
                background: "linear-gradient(180deg, #D1C1A7 0%, #AEC6CF 100%)",
              }}
            >
              {/* Icon */}
              <Image
                src="/icons/sun.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-6"
              />

              <h3 className="text-xl font-semibold text-white mb-3">
                Day Package
              </h3>
              <p className="text-2 !text-(--text-light) mb-6">10 AM - 6 PM</p>

              <p className="text-5xl text-(--text-light) font-bold ">
                PKR 50,000
              </p>
              <p className="text-2 !text-(--text-light)">Per booking</p>
            </div>

            {/* BOTTOM BOX */}
            <div className="p-10 bg-(--bg-light) flex flex-col gap-4">
              <h4 className="text-lg font-semibold">Includes:</h4>

              <ul className="mb-8 flex flex-col gap-3">
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
                    className="flex items-center gap-3 text-[16px] text-[var(--text-dark)]"
                  >
                    {/* Check Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--text-dark)]"
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
          <div className="rounded-2xl overflow-hidden border-[5px] border-[#D1C1A7] shadow-2xl bor">
            {/* TOP BOX */}
            <div
              className="p-10 flex flex-col items-left text-left"
              style={{
                background: "linear-gradient(180deg, #0A3D62 0%, #AEC6CF 100%)",
              }}
            >
              {/* Icon */}
              <Image
                src="/icons/moon.png"
                alt="icon"
                width={60}
                height={60}
                className="mb-6"
              />

              <h3 className="text-xl font-semibold text-white mb-3">
                Day Package
              </h3>
              <p className="text-2 !text-(--text-light) mb-6">10 AM - 6 PM</p>

              <p className="text-5xl text-(--text-light) font-bold ">
                PKR 50,000
              </p>
              <p className="text-2 !text-(--text-light)">Per booking</p>
            </div>

            {/* BOTTOM BOX */}
            <div className="p-10 bg-(--bg-light) text-white flex flex-col gap-4">
              <h4 className="text-lg font-semibold">Includes:</h4>

              <ul className="mb-8 flex flex-col gap-3">
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
                    className="flex items-center gap-3 text-[16px] text-[var(--text-dark)]"
                  >
                    {/* Check Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--text-dark)]"
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
