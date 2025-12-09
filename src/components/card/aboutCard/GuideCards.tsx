import Image from "next/image";

const MissionVisionSection = () => {
  const cards = [
    {
      icon: "/icons/mission.png",
      title: "Our Mission",
      description:
        "To provide an unparalleled luxury beachfront experience that combines exceptional hospitality with the natural beauty of Hawksbay, creating unforgettable memories for every guest.",
    },
    {
      icon: "/icons/eye.png",
      title: "Our Vision",
      description:
        "To be recognized as Pakistan's premier coastal resort destination, setting new standards in luxury hospitality and environmental sustainability.",
    },
    {
      icon: "/icons/heart.png",
      title: "Our Philosophy",
      description:
        "We believe in creating experiences, not just stays. Every detail is crafted with care, from our architectural design to our personalized service.",
    },
    {
      icon: "/icons/value.png",
      title: "Core Values",
      description:
        "Excellence, authenticity, sustainability, and genuine hospitality form the foundation of everything we do at The Coastal Pearl.",
    },
  ];

  return (
    <section className="w-[94%] mx-auto py-0 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-[var(--bg-beige)] md:p-10 p-6 rounded-2xl flex flex-col items-left text-center gap-5  shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Circle Icon */}
            <div className="w-[40px] md:w-[80px] h-[40px] md:h-[80px] rounded-full bg-[var(--bg-light)] flex items-center justify-center shadow-md hover:shadow-lg">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
              />
            </div>

            {/* Title */}
            <h3 className=" text-left">{item.title}</h3>

            {/* Description */}
            <p className="text-2 !text-left  opacity-80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSection;
