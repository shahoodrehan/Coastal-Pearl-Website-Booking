import Image from "next/image";

import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section";
import Button from "@/components/ui/Button";
import GalleryTabs from "@/components/ui/GalleryTabs";
import { useRouter } from "next/router";

function Gallery() {
  const router = useRouter();
  return (
    <>
      <Hero
        title="Guest Experiences"
        subtitle="Hear what our guests have to say about their stay at The Coastal Pearl"
        backgroundImage="/images/about-hero.jpg"
      />

      <GalleryTabs />

      <Section
        title="Experience It Yourself"
        subtitle="Pictures can only capture so much. Come experience the magic of The Coastal Pearl in person."
      >
        <Button
          onClick={() => router.push("/BookingForm")}
          variant="primary"
          size="lg"
          radius="full"
        >
          Book your Visit
        </Button>
      </Section>
    </>
  );
}

export default Gallery;
