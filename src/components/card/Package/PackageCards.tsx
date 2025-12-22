import React from "react";
import Image from "next/image";
import { useState } from "react";

function PackageCards() {
  const [activeTab, setActiveTab] = useState<"weekdays" | "weekends">(
    "weekdays"
  );
  return (
    <>
      <section className="w-full bg-[var(--bg-beige)] py-12 md:py-20">
        <div className="w-[92%] max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-semibold text-[var(--text-dark)]">
              The Coastal Pearl – Rate List
            </h2>
            <p className="text-sm md:text-base text-[var(--text-muted)] mt-2">
              Designed for families, events & luxury staycations
            </p>
          </div>

          {/* TABS */}
          <div className="flex justify-center gap-4 mb-10">
            {["weekdays", "weekends"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 rounded-full text-sm md:text-base transition-all
                    ${
                      activeTab === tab
                        ? "bg-[var(--bg-dark)] text-white"
                        : "bg-white text-[var(--text-dark)] shadow"
                    }`}
              >
                {tab === "weekdays" ? "Weekdays" : "Weekends"}
              </button>
            ))}
          </div>

          {/* CARDS GRID */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* DAY SLOT */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              {/* TOP */}
              <div
                className="p-6 md:p-10"
                style={{
                  background:
                    "linear-gradient(180deg, #D1C1A7 0%, #AEC6CF 100%)",
                }}
              >
                <Image src="/icons/sun.png" alt="Day" width={50} height={50} />
                <h3 className="text-xl md:text-2xl font-semibold text-white mt-4">
                  Day Slot
                </h3>
                <p className="text-white/90 mt-1">09 AM – 5 PM</p>
                {/* PRICING TYPE */}
                <h3 className="text-lg md:text-xl font-medium text-white mt-4">
                  {activeTab === "weekdays" ? "Weekdays" : "Weekends"}
                </h3>
              </div>

              {/* BODY */}
              <div className="p-6 md:p-10 bg-[var(--bg-light)] space-y-5 text-sm md:text-base">
                <PriceRow title="1 Room" price="25,000 PKR" />

                <PriceRow
                  title="1st Floor (2 Sea-Facing Bedrooms)"
                  desc="Theater Lounge, Kitchen & Balcony"
                  price={
                    activeTab === "weekdays" ? "75,000 PKR" : "100,000 PKR"
                  }
                />

                <PriceRow
                  title="Ground Floor"
                  desc="2 Luxury Bedrooms, Pool, Beach Access, VIP Lounge"
                  price={
                    activeTab === "weekdays" ? "100,000 PKR" : "125,000 PKR"
                  }
                />

                <PriceRow
                  title="Entire Resort"
                  desc="Ground + First + Top Floor"
                  price={
                    activeTab === "weekdays" ? "150,000 PKR" : "175,000 PKR"
                  }
                />
                <p className="text-xs text-[var(--text-muted)]">
                  Event décor charges apply separately
                </p>
              </div>
            </div>

            {/* EVENING SLOT */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              {/* TOP */}
              <div
                className="p-6 md:p-10"
                style={{
                  background:
                    "linear-gradient(180deg, #0A3D62 0%, #AEC6CF 100%)",
                }}
              >
                <Image
                  src="/icons/moon.png"
                  alt="Night"
                  width={50}
                  height={50}
                />
                <h3 className="text-xl md:text-2xl font-semibold text-white mt-4">
                  Evening Slot
                </h3>
                <p className="text-white/90 mt-1">07 PM – 09 AM</p>
                <h3 className="text-lg md:text-xl font-medium text-white mt-4">
                  {activeTab === "weekdays" ? "Weekdays" : "Weekends"}
                </h3>
              </div>

              {/* BODY */}
              <div className="p-6 md:p-10 bg-[var(--bg-light)] space-y-5 text-sm md:text-base">
                <PriceRow title="1 Room" price="25,000 PKR" />

                <PriceRow
                  title="1st Floor (2 Sea-Facing Bedrooms)"
                  desc="Theater Lounge, Kitchen & Balcony"
                  price={
                    activeTab === "weekdays" ? "75,000 PKR" : "100,000 PKR"
                  }
                />

                <PriceRow
                  title="Ground Floor (Complete)"
                  desc="2 Luxury Bedrooms, Pool, Beach Access, VIP Lounge"
                  price={
                    activeTab === "weekdays" ? "100,000 PKR" : "125,000 PKR"
                  }
                />

                <PriceRow
                  title="Entire Resort"
                  desc="Ground + First + Top Floor"
                  price={
                    activeTab === "weekdays" ? "150,000 PKR" : "175,000 PKR"
                  }
                />

                <p className="text-xs text-[var(--text-muted)]">
                  Event décor charges apply separately
                </p>
              </div>
            </div>
          </div>

          {/* EVENTS & EXTRAS */}
          <div className="mt-14 bg-white rounded-3xl p-6 md:p-10 shadow-xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Events, Photoshoots & Activities
            </h3>

            <ul className="space-y-2 text-sm md:text-base">
              <li>• Terrace Events: 50+ Guests</li>
              <li>• 1st Floor Events: 50–75 Guests</li>
              <li>• Ground Floor Events: 150+ Guests</li>
              <li className="font-semibold">
                • Photoshoots: 25,000 PKR / Hour (Min 2 hrs)
              </li>
              <li>
                • Jet Ski, Water Sports, Horse Ride, Camel Ride (Charged
                Separately)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default PackageCards;

/* Reusable Price Row */
function PriceRow({
  title,
  desc,
  price,
}: {
  title: string;
  desc?: string;
  price: string;
}) {
  return (
    <div className="flex justify-between gap-4 border-b pb-3">
      <div>
        <p className="font-medium">{title}</p>
        {desc && <p className="text-xs text-[var(--text-muted)]">{desc}</p>}
      </div>
      <p className="font-semibold whitespace-nowrap">{price}</p>
    </div>
  );
}
