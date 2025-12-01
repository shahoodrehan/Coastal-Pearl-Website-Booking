import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section"
import Button from "@/components/ui/Button";
import ChooseHome from "@/components/card/homeCard/ChooseHome";
import GalleryCard from "@/components/card/homeCard/GalleryCard";
import SpacesCards from "@/components/card/homeCard/SpacesCards";
import GuestCards from "@/components/card/homeCard/GuestCards";
import BottomSection from "@/components/home/BottomSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const cardsData = [
  {
    imageSrc: "/images/card1.jpg",
    title: "Card Title 1",
    description:
      "This is the description for card 1. Explain the content briefly.",
    link: "/learn-more-1",
  },
  {
    imageSrc: "/images/card2.jpg",
    title: "Card Title 2",
    description:
      "This is the description for card 2. Add more details if needed.",
    link: "/learn-more-2",
  },
  {
    imageSrc: "/images/card3.jpg",
    title: "Card Title 3",
    description: "Description for card 3 goes here. Keep it short and clear.",
    link: "/learn-more-3",
  },
];

export default function Home() {
  const homeGallery = ["/images/g-1.jpg", "/images/g-2.jpg", "/images/g-3.jpg"];
  return (
    <>
      <Hero
        title="Your Beachside Escape at Hawksbay, Karachi"
        subtitle="Where every stay feels like a memory in the making"
        backgroundImage="/images/home-hero.jpg"
        height="100vh"
        buttons={[
          <Button variant="primary" size="lg" radius="full" width="responsive" arrow>
            Book Now
          </Button>,
          <Button
            variant="transparent"
            size="lg"
            radius="full"
            width="responsive"
          >
            View Packages
          </Button>,
        ]}
      />
      <Section
        title="Welcome to The Coastal Pearl"
        subtitle="Nestled along the pristine shores of Hawksbay, The Coastal Pearl Resort offers an unparalleled luxury experience where modern elegance meets natural beauty. Our exclusive beachfront property is designed to provide you with the ultimate escape from the everyday."
        bgColor="bg-light"
      ></Section>

      <Section
        title="Why Choose Us"
        subtitle="Experience luxury redefined"
        bgColor="bg-beige"
      >
        <ChooseHome />
      </Section>

      <Section
        title="A Glimpse of Paradise"
        subtitle="Discover the beauty of The Coastal Pearl"
        bgColor="bg-light"
      >
        <div className="flex flex-col items-center gap-14">
          <GalleryCard images={homeGallery} />
          <Button
            variant="primary"
            size="lg"
            radius="full"
            width="responsive"
            arrow
          >
            View Full Gallery
          </Button>
        </div>
      </Section>

      <Section
        title="Our Spaces"
        subtitle="Thoughtfully designed for your comfort"
        bgColor="bg-beige"
      >
        <SpacesCards />
      </Section>

      <Section
        title="Guest Experience"
        subtitle="What our guests say about us"
        bgColor="bg-light"
      >
        <GuestCards />
      </Section>


      <BottomSection
      title="Ready to Experience Paradise?"
      titleColor="var(--text-light)"
      subtitleColor="var(--text-light)"
      subtitle="Book your stay at The Coastal Pearl and create memories that last a lifetime"
      backgroundImage="/images/home-bottom.jpg"
      >
        <Button
        variant="secondary"
        size="lg"
        radius="full"
        arrow
        >
          Book Your Stay
        </Button>
      </BottomSection>
    </>
  );
}
