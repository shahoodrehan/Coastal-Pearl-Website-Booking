import { useState } from "react";
import Image from "next/image";

const tabs = [
  "All",
  "Interior",
  "Exterior",
  // "Pool",
  "Terrace",
  "Events",
  "Dining",
];

const galleryImages = [
  {
    src: "/images/about-s-2.jpg",
    category: "Interior",
    title: "Luxury Suite Interior",
    description: "Experience premium comfort with elegant interior décor.",
  },
  {
    src: "/images/about collage-3.jpg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/ab-1.jpeg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/ground-4.jpg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/ground-floor.jpg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/first-floor-expericne.jpg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/ground-3.jpg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },

  {
    src: "/images/interior-2.jpeg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/interior.jpg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/interior (2).jpg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/exterior.jpg",
    category: "Terrace",
    title: "Beachfront Exterior",
    description: "Enjoy stunning views with direct access to the beach.",
  },
  {
    src: "/images/ab-3.jpeg",
    category: "Exterior",
    title: "Bonfire Night",
    description: "Cozy bonfire setup for memorable outdoor evenings.",
  },
  {
    src: "/images/event-hero.jpeg",
    category: "Exterior",
    title: "Bonfire Night",
    description: "Cozy bonfire setup for memorable outdoor evenings.",
  },
  {
    src: "/images/ground-1.jpg",
    category: "Exterior",
    title: "Bonfire Night",
    description: "Cozy bonfire setup for memorable outdoor evenings.",
  },
  {
    src: "/images/interior-1.jpg",
    category: "Exterior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/home-bottom.jpg",
    category: "Exterior",
    title: "Bonfire Night",
    description: "Cozy bonfire setup for memorable outdoor evenings.",
  },
  {
    src: "/images/about-collage.jpg",
    category: "Exterior",
    title: "Bonfire Night",
    description: "Cozy bonfire setup for memorable outdoor evenings.",
  },
  {
    src: "/images/exterior-3.jpg",
    category: "Exterior",
    title: "Bonfire Night",
    description: "Cozy bonfire setup for memorable outdoor evenings.",
  },
  {
    src: "/images/beaxh-front.jpeg",
    category: "Pool",
    title: "Private Pool",
    description: "Relax in a serene private pool with luxury amenities.",
  },
  {
    src: "/images/top-terris.jpg",
    category: "Terrace",
    title: "Open Terrace View",
    description: "A peaceful terrace with breathtaking sunset views.",
  },
  {
    src: "/images/top-floor-terrace.jpg",
    category: "Terrace",
    title: "Open Terrace View",
    description: "A peaceful terrace with breathtaking sunset views.",
  },
  {
    src: "/images/ab-3.jpeg",
    category: "Terrace",
    title: "Open Terrace View",
    description: "A peaceful terrace with breathtaking sunset views.",
  },
  {
    src: "/images/event-hero.jpeg",
    category: "Events",
    title: "Event Venue",
    description: "A spacious area perfect for gatherings and celebrations.",
  },
  {
    src: "/images/event-1.jpeg",
    category: "Events",
    title: "Event Venue",
    description: "A spacious area perfect for gatherings and celebrations.",
  },
  {
    src: "/images/event-2.jpeg",
    category: "Events",
    title: "Event Venue",
    description: "A spacious area perfect for gatherings and celebrations.",
  },
  {
    src: "/images/event-3.jpeg",
    category: "Events",
    title: "Event Venue",
    description: "A spacious area perfect for gatherings and celebrations.",
  },
  {
    src: "/images/dinning-area.jpeg",
    category: "Dining",
    title: "Fine Dining",
    description: "Enjoy gourmet meals in an elegant dining space.",
  },
  {
    src: "/images/luxury-dinning-2.jpeg",
    category: "Dining",
    title: "Fine Dining",
    description: "Enjoy gourmet meals in an elegant dining space.",
  },
  {
    src: "/images/luxury-dinning.jpeg",
    category: "Dining",
    title: "Fine Dining",
    description: "Enjoy gourmet meals in an elegant dining space.",
  },
  {
    src: "/images/interior-1.jpg",
    category: "Dining",
    title: "Fine Dining",
    description: "Enjoy gourmet meals in an elegant dining space.",
  },
];

export default function GalleryPage() {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredImages =
    selectedTab === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedTab);

  return (
    <section className="w-full bg-[var(--bg-light)]">
      {/* Tabs */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div
          className="
      flex flex-nowrap gap-4 py-6 px-4 shadow-md
      justify-start
      lg:justify-center
      md:justify-center
      sm:justify-start
    "
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 flex-shrink-0
          ${
            selectedTab === tab
              ? "bg-[var(--bg-dark)] text-white"
              : "bg-[var(--bg-beige)] text-[var(--text-dark)] shadow-sm"
          }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Images Grid */}
      <div className="py-16 bg-[var(--bg-beige)]">
        {/* MOBILE + TABLET → SLIDER */}
        <div className="block lg:hidden w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-4 md:px-16">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                className="relative min-w-[260px] sm:min-w-[300px]
                     h-64 rounded-xl overflow-hidden shadow-md flex-shrink-0"
              >
                <Image
                  src={img.src}
                  alt={img.category}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP → GRID */}
        <div className="hidden lg:grid grid-cols-4 gap-6 px-16">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={img.src}
                alt={img.category}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
