import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change navbar after 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Resort Spaces", href: "/ResortSpaces" },
    { name: "Packages", href: "/Packages" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <header
      className={`
    fixed top-0 left-0 w-full flex justify-center z-50 transition-all duration-300
    
    ${
      scrolled
        ? "bg-white shadow-md backdrop-blur-md"
        : "bg-white/10 backdrop-blur-md shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
    }
  `}
    >
      <nav className="w-full lg:w-[92%] mx-auto px-4 lg:px-0 relative">
        <div className="flex items-center justify-between h-[80px]">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/Link.png"
                alt="Logo"
                width={129}
                height={48}
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-300
    ${scrolled ? "text-[#0A3D62]" : "text-white"}
  `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="primary" radius="full">
              Book Now
            </Button>
          </div>

          {/* mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={scrolled ? "#0a3d62" : "currentColor"}
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={scrolled ? "#0a3d62" : "currentColor"}
                  strokeWidth="2"
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

        <div
          id="mobile-menu"
          className={`
    lg:hidden absolute left-0 right-0 top-full bg-white shadow-md rounded-b-lg px-6 
    overflow-hidden transition-all duration-300 ease-in-out
    ${
      isOpen
        ? "max-h-[520px] opacity-100 pointer-events-auto py-4"
        : "max-h-0 opacity-0 pointer-events-none"
    }
  `}
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 font-medium text-lg hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-4">
            <Button variant="primary" fullWidth radius="full">
              Book Now
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
