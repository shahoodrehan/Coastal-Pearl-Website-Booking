import Image from "next/image";

const testimonials = [
  {
    review:
      "An unforgettable experience! The Coastal Pearl exceeded all my expectations. The luxury, the views, the service - everything was perfect. This is without a doubt the best beachside resort in Karachi.",
    name: "Javed Shaikh",
    role: "Celebrity Actor",
    date: "October 2024",
  },
  {
    review:
      "The Coastal Pearl is a hidden gem! The aesthetic is absolutely stunning - perfect for photoshoots and events. The attention to detail in every corner is remarkable.",
    name: "Nadia Hussain",
    role: "Fashion Icon & Model",
    date: "September 2024",
  },
  {
    review:
      "Hosted my family event here and it was magical! The rooftop terrace with ocean views created the perfect ambiance. The staff went above and beyond to make everything special.",
    name: "Ahsan Khan",
    role: "Actor & Host",
    date: "August 2024",
  },
  {
    review:
      "I've organized multiple events at The Coastal Pearl and each time has been flawless. The versatile spaces, professional staff, and breathtaking location make it ideal for celebrations.",
    name: "Sarah Ahmed",
    role: "Wedding Planner",
    date: "July 2024",
  },
  {
    review:
      "Perfect venue for our company retreat! The combination of luxury amenities and serene beach setting provided the ideal environment for team building.",
    name: "Ahmed Hassan",
    role: "Corporate Executive",
    date: "June 2024",
  },
  {
    review:
      "As a photographer, I can confidently say The Coastal Pearl offers the most stunning backdrops in Karachi. Every angle is picture perfect!",
    name: "Fatima Khan",
    role: "Photographer",
    date: "May 2024",
  },
  {
    review:
      "This resort rivals international beachfront properties! The design is modern yet warm, the food is excellent, and the water activities are thrilling.",
    name: "Bilal Siddiqui",
    role: "Travel Blogger",
    date: "April 2024",
  },
  {
    review:
      "Organized a corporate gala here - the venue exceeded expectations! The rooftop terrace at sunset was breathtaking.",
    name: "Ayesha Malik",
    role: "Event Organizer",
    date: "March 2024",
  },
  {
    review:
      "Celebrated my 40th birthday here with family and friends. The private pool and beachfront access made it unforgettable.",
    name: "Omar Farooq",
    role: "Business Owner",
    date: "February 2024",
  },
];

function CommentCards() {
  return (
    <div className="flex flex-wrap gap-8 justify-start">
      {testimonials.map((card, idx) => (
        <div
          key={idx}
          className="
        w-full 
        sm:w-[48%] 
        lg:w-[31%]
        bg-white p-6 rounded-xl shadow-md
        flex flex-col gap-4
      "
        >
          {/* Testimonial Icon */}
          <Image
            src="/icons/testimonial.png"
            alt="testimonial icon"
            width={40}
            height={40}
          />

          {/* Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Image
                key={s}
                src="/icons/rating.png"
                alt="star"
                width={18}
                height={18}
              />
            ))}
          </div>

          {/* Review */}
          <p className="text-2 text-left">{card.review}</p>
          <div className="flex-row items-end">
            {/* Underline */}
            <div className="w-full h-[1px] bg-(--bg-beige) my-3"></div>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/user-placeholder.jpg"
                alt={card.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-base text-(--text-dark) opacity-80 text-left">
                  {card.name}
                </p>
                <p className="text-sm text-(--text-dark) opacity-60 text-left">
                  {card.role}
                </p>
                <p className="text-[12px] text-(--text-beige) text-left">
                  {card.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CommentCards;
