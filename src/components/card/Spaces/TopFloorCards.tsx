import Image from "next/image";

const TopFloorCards = () => {
  const facilities = [
    {
      image: "/icons/lounge (2).png",
      title: "Rooftop Terrace",
      description:"Expansive terrace with breathtaking 360° views",
    },
    {
      image: "/icons/vip.png",
      title: "Terrace Kitchenette",
      description: "Outdoor kitchen facilities for al fresco dining",
    },
    {
      image: "/icons/kitchen.png",
      title: "Event Space",
      description:
        "Capacity for celebrations and gatherings up to 50 guests",
    },
    {
      image: "/icons/vip.png",
      title: "Lounge Area",
      description: "Comfortable seating for sunset viewing and socializing",
    },
  ];

  return (
    <div className="w-full">
      {facilities.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-6 mb-6 bg-[var(--bg-beige)] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Circle Image */}
          <div className="w-12 h-12 bg-[#d1c1a7] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ">
            <Image
              src={item.image}
              alt={item.title}
              width={24}
              height={24}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--bg-dark)] !mb-2">
              {item.title}
            </h4>

            <p className="text-2 opacity-80 mt-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopFloorCards;
