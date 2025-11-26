import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resort Spaces", href: "/resort-spaces" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full flex justify-center">
      <nav className="w-[92%] mx-auto">
        <div className="flex items-center justify-between h-[80px] px-[32px] mx-[35px]">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={129}
                height={48}
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm ">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="primary">Boon Now</Button>
          </div>

          {/* moile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* mobile drop down */}
        {isOpen && (
          <div className="md:hidden px-[32px] mx-[35px] pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className=""
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            
            <Button variant="primary" fullWidth>
              Book Now
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
