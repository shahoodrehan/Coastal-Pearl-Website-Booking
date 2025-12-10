import Image from "next/image";

const FirstFloorCards = () => {
  const facilities = [
    {
      image: "/icons/lounge (2).png",
      title: "Sea-Facing Bedrooms",
      description: "Multiple luxury bedrooms with panoramic ocean views",
    },
    {
      image: "/icons/vip.png",
      title: "Theatre Lounge",
      description:
        "Entertainment space with state-of-the-art audio-visual system",
    },
    {
      image: "/icons/kitchen.png",
      title: "Mini Kitchen",
      description: "Convenient kitchenette for refreshments and light meals",
    },
    {
      image: "/icons/vip.png",
      title: "Reading Nook",
      description: "Cozy spaces perfect for relaxation and quiet moments",
    },
  ];

  return (
    <div className="w-full">
      {facilities.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-6 mb-6 bg-[var(--bg-light)] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Circle Image */}
          <div className="w-12 h-12 bg-[#aec6cf] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ">
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

export default FirstFloorCards;
