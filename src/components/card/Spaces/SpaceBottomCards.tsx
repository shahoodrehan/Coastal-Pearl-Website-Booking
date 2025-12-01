import React from "react";

const SpaceBottomCards = () => {
  const stats = [
    {
      number: "50+",
      title: "Total Capacity",
      description: "Guests for events",
    },
    {
      number: "6",
      title: "Bedroom Suites",
      description: "Luxury accommodations",
    },
    {
      number: "3",
      title: "Event Spaces",
      description: "Versatile venues",
    },
  ];

  return (
    <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="p-8 bg-[#235172] rounded-2xl flex flex-col  min-h-[180px]"
        >
          <span
            className=" text-(--text-beige) font-bold text-[48px] sm:text-[50px]"
            
          >
            {item.number}
          </span>
          <h4 className="!text-(--text-light) font-semibold text-lg">{item.title}</h4>
          <p className="text-2 !text-[var(--text-light)]">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SpaceBottomCards;
