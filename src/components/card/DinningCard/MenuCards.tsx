import Image from "next/image";

export default function MenuCards() {
  // ---------- ARRAY INSIDE COMPONENT ----------
  const menuData = [
    {
      title: "Continental Cuisine",
      dishes: [
        "Grilled specialties",
        "Pasta dishes",
        "Fresh salads",
        "Gourmet sandwiches",
      ],
    },
    {
      title: "Pakistani Delights",
      dishes: [
        "Traditional curries",
        "Tikka & kababs",
        "Biryani varieties",
        "Fresh naan",
      ],
    },
    {
      title: "BBQ Selection",
      dishes: [
        "Beef steaks",
        "Chicken tikka",
        "Seafood grills",
        "Vegetable skewers",
      ],
    },
    {
      title: "Beverages",
      dishes: [
        "Fresh juices",
        "Specialty coffees",
        "Soft drinks",
        "Traditional chai",
      ],
    },
  ];
  // --------------------------------------------

  return (
  
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {menuData.map((item, idx) => (
          <div
            key={idx}
            className="
              w-full p-6 bg-(--bg-beige) rounded-2xl shadow-md 
              hover:shadow-xl hover:-translate-y-1 
              transition-all duration-300
            "
          >
            {/* Heading */}
            <h4 className="text-xl font-semibold mb-3">{item.title}</h4>

            {/* Underline */}
            <div className="w-full h-[1px] bg-(--bg-beige2) mb-5 opacity-50"></div>

            {/* Dishes */}
            <ul className="grid grid-cols-1 gap-3">
              {item.dishes.map((dish, i) => (
                <li key={i} className="flex items-center gap-2" >
                  <Image
                    src="/icons/dot.png"
                    alt="dot"
                    width={6}
                    height={6}
                  />
                  <span className="text-base opacity-80">{dish}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
  
  );
}
