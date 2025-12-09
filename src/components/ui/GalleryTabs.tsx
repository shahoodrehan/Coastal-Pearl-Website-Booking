import { useState } from "react";
import Image from "next/image";

const tabs = [
  "All",
  "Interior",
  "Exterior",
  "Pool",
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
    src: "/images/space-2.jpg",
    category: "Interior",
    title: "Modern Lounge Area",
    description: "Spacious lounge designed for relaxation and gatherings.",
  },
  {
    src: "/images/space-1.jpg",
    category: "Exterior",
    title: "Beachfront Exterior",
    description: "Enjoy stunning views with direct access to the beach.",
  },
  {
    src: "/images/born-fire.jpg",
    category: "Exterior",
    title: "Bonfire Night",
    description: "Cozy bonfire setup for memorable outdoor evenings.",
  },
  {
    src: "/images/space-3.jpg",
    category: "Pool",
    title: "Private Pool",
    description: "Relax in a serene private pool with luxury amenities.",
  },
  {
    src: "/images/terrace-1.jpg",
    category: "Terrace",
    title: "Open Terrace View",
    description: "A peaceful terrace with breathtaking sunset views.",
  },
  {
    src: "/images/events-1.jpg",
    category: "Events",
    title: "Event Venue",
    description: "A spacious area perfect for gatherings and celebrations.",
  },
  {
    src: "/images/dining-1.jpg",
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
      <div className="flex flex-wrap justify-center gap-4 py-16 mb-8 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full transition-all duration-300 
              ${
                selectedTab === tab
                  ? "bg-[var(--bg-dark)] text-white"
                  : "bg-(--bg-beige) text-[var(--text-dark)] shadow-sm"
              }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-16 md:px-16 bg-(--bg-beige)">
        {filteredImages.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={img.src}
              alt={img.category}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
