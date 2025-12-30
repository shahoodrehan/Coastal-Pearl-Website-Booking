import Image from "next/image";

const MissionVisionSection = () => {
  const cards = [
    {
      icon: "/icons/mission.png",
      title: "Our Mission",
      description:
        "We aim to offer every visitor a seamless blend of hospitality, nature, and personalized comfort, making Hawksbay a destination worth returning to again and again.",
    },
    {
      icon: "/icons/eye.png",
      title: "Our Vision",
      description:
        "To redefine beachside living in Pakistan by creating a space that feels exclusive yet comforting, where luxury meets authenticity and guests feel truly at home by the sea.",
    },
    {
      icon: "/icons/heart.png",
      title: "Our Philosophy",
      description:
        "We believe luxury isn’t about price, it’s about peace of mind. Here, it’s the soft sound of the waves, the glow of warm lights at night, the scent of salt in the air.",
    },
    {
      icon: "/icons/value.png",
      title: "Core Values",
      description:
        "Hospitality with Heart: Warm, respectful, and genuine service. Detail in Design: Every space crafted with intent and balance.",
    },
  ];

  return (
    <section className="w-[100%] mx-auto py-0 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-[var(--bg-beige)] md:p-10 p-6 rounded-2xl flex flex-col items-left text-center gap-5
                   shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* Circle Icon */}
            <div
              className="w-[40px] md:w-[80px] h-[40px] md:h-[80px] rounded-full bg-[var(--bg-light)] flex items-center justify-center
                        shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="object-contain w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
              />
            </div>

            {/* Title */}
            <h3 className="text-left">{item.title}</h3>

            {/* Description */}
            <p className="text-2 !text-left opacity-80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSection;
