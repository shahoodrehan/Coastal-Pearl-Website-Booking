import Image from "next/image";
import Link from "next/link";

const eventscards = [
  {
    src: "/images/space-3.jpg",
    title: "Rooftop Terrace",
    guest: "50 guests",
    point1: "360° ocean views",
    point2: "Sunset backdrop",
    point3: "Open-air setting",
  },
  {
    src: "/images/space-2.jpg",
    title: "Beach Front",
    guest: "100+ guests",
    point1: "Direct beach access",
    point2: "Bonfire setup",
    point3: "Natural ambiance",
  },
  {
    src: "/images/space-1.jpg",
    title: "Poolside Area",
    guest: "40 guests",
    point1: "Infinity pool backdrop",
    point2: "Luxury setting",
    point3: "Day/night events",
  },
];

function EventsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {eventscards.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-[480px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
        >
          <div className="absolute top-4 right-4 inline-flex bg-(--bg-light) py-2 px-6 rounded-full items-center text-(--text-dark) z-10">
            <Image src="/icons/vip-2.png" alt="icon" width={16} height={16} />
            <span className="text-sm ml-2">{item.guest}</span>
          </div>
          {/* Image Section */}
          <div className="h-[55%] w-full relative">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col justify-between">
            <h4 className="text-left mb-4">{item.title}</h4>

            <div className="gap-4">
              {[item.point1, item.point2, item.point3].map((point, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <Image
                    src="/icons/location.png" // change icon here if needed
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventsCards;
