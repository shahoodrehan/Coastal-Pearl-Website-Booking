import Image from "next/image";

const GroundFloorCards = () => {
  const facilities = [
    {
      image: "/icons/lounge (2).png",
      title: "Luxury Lounge",
      description:
        "Spacious seating area with modern furnishings and ocean views",
    },
    {
      image: "/icons/vip.png",
      title: "Private Pool",
      description: "Exclusive infinity pool with direct beach access",
    },
    {
      image: "/icons/kitchen.png",
      title: "Gourmet Kitchen",
      description: "Fully equipped modern kitchen with premium appliances",
    },
    {
      image: "/icons/vip.png",
      title: "VIP Bathrooms",
      description: "Luxurious facilities with premium fixtures",
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
          <div className="w-12 h-12 bg-[var(--bg-dark)] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ">
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

export default GroundFloorCards;
