import Button from "@/components/ui/Button";
import Image from "next/image";

function EventPackagesCards() {
  const packages = [
    {
      title: "Morning Package",
      hours: "10:00 AM | 6:00 PM",
      price: "Includes",
      points: [
        "Full access to indoor & outdoor lounges",
        "Hi-tea with snacks & beverages",
        "Beachfront access",
        "Complimentary water (up to 10 guests)",
      ],
    },

    {
      title: "Evening Package",
      hours: "6:00 PM | 9:00 AM",
      price: "Includes",
      points: [
        "Sea-view bedrooms",
        "Tea & coffee setup",
        "Lounge & pool access",
        "Bonfire on request",
        "Late-night lounge access",
      ],
    },

    {
      title: "Luxury Package",
      hours: "Full day",
      price: "Includes",
      points: [
        "Entire property access",
        "200+ edited photos",
        "Video highlights",
        "Makeup room",
        "Refreshments",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {packages.map((pack, index) => (
        <div
          key={index}
          className="
            w-full p-8 rounded-2xl shadow-md 
            hover:shadow-xl hover:-translate-y-2 
            transition-all duration-300 bg-[#FFFFFF1A] hover:bg-[#ffffff33]

            flex flex-col
          "
        >
          {/* Title */}
          <h4 className=" text-left !text-(--text-light) font-['Playfair_Display'] font-semibold mb-2">
            {pack.title}
          </h4>

          {/* Hours */}
          <p className="text-2 text-left !text-[var(--text-beige)] mb-6">
            {pack.hours}
          </p>

          {/* Price */}
          <p className="text-4xl text-left font-normal text-[var(--text-light)] mb-6">
            {pack.price}
          </p>

          {/* Points List */}
          <div className="flex flex-col gap-3 mb-6">
            {pack.points.map((pt, i) => (
              <div key={i} className="flex items-center gap-2">
                <Image
                  src="/icons/dot.png"
                  alt="check"
                  width={10}
                  height={10}
                />
                <span className="text-base text-(--text-light) font-['Inter']">
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventPackagesCards;
