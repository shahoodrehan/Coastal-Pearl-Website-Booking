"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Resort Spaces", href: "/ResortSpaces" },
    { name: "Packages", href: "/Packages" },
    { name: "Contact", href: "/Contact" },
  ];

  const experienceLinks = [
    { name: "Gallery", href: "/Gallery" },
    { name: "Events & Photoshoots", href: "/Events" },
    { name: "Activities", href: "/Activities" },
    { name: "Dinning", href: "/Dinning" },
    { name: "Testimonials", href: "/Testimonial" },
  ];

  return (
    // <footer className="w-full bg-[var(--bg-dark)] text-[var(--text-light)] py-16 px-8">
    //   <div className="w-[92%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-18 ">

    //     <div>

    //       <Image
    //         src="/images/logo.png"
    //         alt="logo"
    //         width={173}
    //         height={64}
    //         className="object-contain mb-4"
    //       />

    //       <p className="footer-para text-[16px]">
    //         Your beachside escape at Hawksbay, Karachi. Where every stay feels
    //         like a memory in the making.
    //       </p>

    //       <div className="flex items-center gap-4 mt-4">
    //         <div className="w-10 h-10 h-10 rounded-full bg-[#235172] flex items-center justify-center hover:bg-[var(--bg-beige2)] transition-colors duration-300">
    //           <Image
    //             src="/icons/facebook.png"
    //             alt="fb"
    //             width={12}
    //             height={12}
    //           />
    //         </div>

    //         <div className="w-10 h-10 rounded-full bg-[#235172] flex items-center justify-center hover:bg-[var(--bg-beige2)] transition-colors duration-300">
    //           <Image
    //             src="/icons/insta.png"
    //             alt="insta"
    //             width={18}
    //             height={18}
    //           />
    //         </div>

    //         <div className="w-10 h-10 rounded-full bg-[#235172] flex items-center justify-center hover:bg-[var(--bg-beige2)] transition-colors duration-300">
    //           <Image
    //             src="/icons/twiter.png"
    //             alt="twitter"
    //             width={18}
    //             height={18}
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <div>
    //       <h3 className=" md:text-[16px] ">Explore</h3>

    //       <ul className="space-y-3 ">
    //         <li className="foooter-link-style">Home</li>
    //         <li className="foooter-link-style">About Us</li>
    //         <li className="foooter-link-style">Resort Spaces</li>
    //         <li className="foooter-link-style">Packages</li>
    //         <li className="foooter-link-style">Contact</li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h3 className="text-[18px] md:text-[16px] font-semibold text-[var(--text-beige)] mb-4">
    //         Experience
    //       </h3>

    //       <ul className="space-y-3">
    //         <li className="foooter-link-style">Gallery</li>
    //         <li className="foooter-link-style">Events & Photoshoots</li>
    //         <li className="foooter-link-style">Activities</li>
    //         <li className="foooter-link-style">Dining</li>
    //         <li className="foooter-link-style">Testimonials</li>
    //       </ul>
    //     </div>

    //     <div>
    //       <h3 className="text-[18px] md:text-[16px] font-semibold text-[var(--text-beige)] mb-4">
    //         Contact
    //       </h3>

    //       <ul className="space-y-4">

    //         <li className="flex items-start gap-3">
    //           <Image
    //             src="/icons/location.png"
    //             alt="location"
    //             width={20}
    //             height={20}
    //             className="mt-1 mr-3"
    //           />
    //           <span className="foooter-link-style">
    //             Hawksbay Beach, Karachi, Pakistan
    //           </span>
    //         </li>

    //         <li className="flex items-center gap-3">
    //           <Image
    //             src="/icons/phone.png"
    //             alt="phone"
    //             width={20}
    //             height={20}
    //             className="mb-2 mr-2"
    //           />
    //           <span className="foooter-link-style">+92 300 1234567</span>
    //         </li>

    //         <li className="flex items-center gap-3">
    //           <Image
    //             src="/icons/mail.png"
    //             alt="mail"
    //             width={20}
    //             height={20}
    //             className="mb-2 mr-2"
    //           />
    //           <span className="foooter-link-style">info@coastalpearl.com</span>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
    //     <p>© 2025 The Coastal Pearl Resort. All rights reserved.</p>
    //   </div>
    // </footer>

    <footer className="w-full bg-[var(--bg-dark)] text-[var(--text-light)] py-16 px-8">
      <div className="w-[92%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={173}
            height={64}
            className="object-contain mb-4"
          />

          <p className="footer-para text-[16px]">
            Your beachside escape at Hawksbay, Karachi. Where every stay feels
            like a memory in the making.
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
                  width={icon === "facebook" ? 12 : 18}
                  height={icon === "facebook" ? 12 : 18}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-[16px] mb-4 !text-[var(--text-beige)]">
            Explore
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="foooter-link-style">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-[18px] md:text-[16px] font-semibold !text-[var(--text-beige)] mb-4">
            Experience
          </h3>
          <ul className="space-y-3">
            {experienceLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="foooter-link-style">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-[18px] md:text-[16px] font-semibold !text-[var(--text-beige)] mb-4">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Image
                src="/icons/location.png"
                alt="location"
                width={20}
                height={20}
                className="mt-1 mr-3"
              />
              <span className="foooter-link-style">
                Hawksbay Beach, Karachi, Pakistan
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Image
                src="/icons/phone.png"
                alt="phone"
                width={20}
                height={20}
                className="mb-2 mr-2"
              />
              <span className="foooter-link-style">+92 300 1234567</span>
            </li>

            <li className="flex items-center gap-3">
              <Image
                src="/icons/mail.png"
                alt="mail"
                width={20}
                height={20}
                className="mb-2 mr-2"
              />
              <span className="foooter-link-style">info@coastalpearl.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
        <p>© 2025 The Coastal Pearl Resort. All rights reserved.</p>
      </div>
    </footer>
  );
}
