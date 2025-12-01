import Image from "next/image";

const guestData = [
  {
    comment: '"An unforgettable experience. The perfect blend of luxury and nature."',
    name: "Javed Shaikh",
    designation: "Celebrity",
  },
  {
    comment: '"The Coastal Pearl is a hidden gem. Absolutely stunning!"',
    name: "Nadia Hussain",
    designation: "Fashion Icon",
  },
  {
    comment: '"The best beachside resort in Karachi. Highly recommended!"',
    name: "Ahsan Khan",
    designation: "The Actor",
  },
];

export default function GuestCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 w-full">
      {guestData.map((guest, index) => (
        <div
          key={index}
          className="bg-[var(--bg-beige)] p-8 rounded-2xl flex flex-col items-start 
             shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Image
                key={idx}
                src="/icons/rating.png" // path to your star image
                alt="star"
                width={16}
                height={16}
              />
            ))}
          </div>

          {/* Comment */}
          <p className="text-2 text-left mb-8 opacity-80">
            {guest.comment}
          </p>

          {/* Guest Name */}
          <p className="text-2 text-left">
            {guest.name}
          </p>

          {/* Guest Designation */}
          <p className="text-[#063D62A6] text-[14px]">{guest.designation}</p>
        </div>
      ))}
    </div>
  );
}
