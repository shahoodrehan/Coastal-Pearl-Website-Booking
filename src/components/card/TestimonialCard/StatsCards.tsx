
function StatsCards() {

  const statsData = [
  {
    count: "500+",
    stats: "Happy Guests",
  },
  {
    count: "4.9",
    stats: "Average Rating",
  },
  {
    count: "200+",
    stats: "Events Hosted",
  },
  {
    count: "98%",
    stats: "Return Rate",
  },
];


  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {statsData.map((item, index) => (
        <div
          key={index}
          className="
            w-full sm:w-[48%] lg:w-[23%]
            p-6
            flex flex-col items-center text-center
            rounded-2xl shadow-md bg-(--bg-beige)
            hover:shadow-xl transition-all duration-300
          "
        >
          <p className="text-[40px] font-bold leading-none">
            {item.count}
          </p>
          <p className="text-[16px] text-(--text-dark) opacity-80 mt-2">
            {item.stats}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;