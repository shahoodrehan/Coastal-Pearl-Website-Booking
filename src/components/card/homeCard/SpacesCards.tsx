import Image from "next/image";
import Link from "next/link";

const floors = [
  {
    src: "/images/space-1.jpg",
    title: "Ground Floor",
    description: "Spacious lounge, private pool, VIP facilities",
    link: "/ground-floor",
  },
  {
    src: "/images/space-2.jpg",
    title: "First Floor",
    description: "Sea-facing bedrooms, theatre lounge, mini kitchen",
    link: "/first-floor",
  },
  {
    src: "/images/space-3.jpg",
    title: "Top Floor Terrace",
    description: "Rooftop terrace with kitchenette, event capacity",
    link: "/top-floor",
  },
];

function SpacesCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 w-full">
      {floors.map((item, index) => (
        <div
          key={index}
          className="w-full h-[480px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
        >
          {/* Image Section - Increased Height */}
          <div className="h-[55%] w-full relative">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="h-[45%] p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-left">{item.title}</h4>
              <p className="text-2 text-left opacity-90">{item.description}</p>
            </div>

            <Link
          href={item.link}
          className="text-2 flex items-center gap-2 mt-3"
        >
          Learn More

          {/* REPLACE ARROW WITH THIS SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-[2px]"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SpacesCards;
