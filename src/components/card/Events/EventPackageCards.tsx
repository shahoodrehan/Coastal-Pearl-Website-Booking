import Button from "@/components/ui/Button";
import Image from "next/image";

function EventPackagesCards() {
  const packages = [
    {
      title: "Basic Package",
      hours: "2 hours",
      price: "PKR 25,000",
      points: ["Single location", "50 edited photos", "Digital delivery"],
      button: "Book Now",
    },

    {
      title: "Premium Package",
      hours: "4 hours",
      price: "PKR 45,000",
      points: [
        "Multiple locations",
        "100 edited photos",
        "Drone shots",
        "Same-day preview",
      ],
      button: "Book Now",
    },

    {
      title: "Luxury Package",
      hours: "Full day",
      price: "PKR 75,000",
      points: [
        "Entire property access",
        "200+ edited photos",
        "Video highlights",
        "Makeup room",
        "Refreshments",
      ],
      button: "Book Now",
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
          <p className="text-2 text-left !text-[var(--text-beige)] mb-6">{pack.hours}</p>

          {/* Price */}
          <p className="text-4xl text-left font-normal text-[var(--text-light)] mb-6">
            {pack.price}
          </p>

          {/* Points List */}
          <div className="flex flex-col gap-3 mb-6">
            {pack.points.map((pt, i) => (
              <div key={i} className="flex items-center gap-2">
                <Image
                  src="/icons/brown-camera.png"
                  alt="check"
                  width={18}
                  height={18}
                />
                <span className="text-base text-(--text-light) font-['Inter']">{pt}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <Button
          variant="beige"
          size="sm"
          radius="full"
          >
            Book Now
          </Button>
        </div>
      ))}
    </div>
  );
}

export default EventPackagesCards;
