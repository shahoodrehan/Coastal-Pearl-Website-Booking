import Image from "next/image";
// import Link from "next/link";

import Hero from "@/components/home/Hero";
import ContactCards from "@/components/card/ContactCard/ContactCards";
import Section from "@/components/home/Section";
import FAQCards from "@/components/card/ContactCard/FAQCards";

function Contact() {
  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="We're here to help make your coastal escape unforgettable"
        backgroundImage="/images/about-hero.jpg"
      />
      <section className="w-full bg-(--bg-light) py-12 md:py-20">
        <ContactCards />
      </section>

      <section className="w-full bg-(--bg-beige) py-12 md:py-20">
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left — Google Map */}
          <div className="w-full lg:w-1/2 h-80 lg:h-[500px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23870.52695925964!2d66.8278635449572!3d24.857882056897832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb313afcab194fb%3A0xc5915c9f128e6145!2sHawke&#39;s%20Bay%20Beach!5e1!3m2!1sen!2s!4v1764594703817!5m2!1sen!2s"
              width="100%"
              height="100%"
              // style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Right — Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white shadow-md flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">Contact & Social</h3>
              <p className="text-gray-700">
                Get in touch with us for bookings, inquiries, or special
                requests. We are happy to assist you!
              </p>

              <div className="flex items-center gap-4 mt-4">
                {["facebook", "insta", "twiter"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-[#235172] flex items-center justify-center hover:bg-[var(--bg-beige2)] transition-colors duration-300"
                  >
                    <Image
                      src={`/icons/${icon}.png`}
                      alt={icon}
                      width={icon === "facebook" ? 18 : 18}
                      height={icon === "facebook" ? 18 : 18}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Box: Booking Information */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0A3D62] to-[#AEC6CF] shadow-md flex flex-col gap-4">
              <h3 className="text-(--text-light)">Booking Information</h3>
              <ul className="text-(--text-light) flex flex-col gap-3 mt-2">
                <li className="flex items-start gap-2">
                  <Image
                    src="/icons/dot.png"
                    alt="dot"
                    width={6}
                    height={6}
                    className="mt-2"
                  />
                  <span>Minimum 3 days advance booking required</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/icons/dot.png"
                    alt="dot"
                    width={6}
                    height={6}
                    className="mt-2"
                  />
                  <span>50% advance payment to confirm reservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/icons/dot.png"
                    alt="dot"
                    width={6}
                    height={6}
                    className="mt-2"
                  />
                  <span>Full property or individual spaces available</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/icons/dot.png"
                    alt="dot"
                    width={6}
                    height={6}
                    className="mt-2"
                  />
                  <span>Custom packages available on request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions"
      >
        <FAQCards />
      </Section>
    </>
  );
}

export default Contact;
