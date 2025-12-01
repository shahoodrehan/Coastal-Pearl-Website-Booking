import React from "react";
import Hero from "@/components/home/Hero";
import Section from "@/components/home/Section";
import OccasionCards from "@/components/card/Events/OccasionCards";
import EventsCards from "@/components/card/Spaces/Eventscards";
import ThemeCards from "@/components/card/Events/ThemeCard";
import EventPackagesCards from "@/components/card/Events/EventPackageCards";
import Button from "@/components/ui/Button";


function Events() {
  return (
    <>
      <Hero
        title="Events & Photoshoots"
        subtitle="Host your special moments in paradise"
        backgroundImage="/images/born-fire.jpg"
      />
      <Section
        title="Perfect For Every Occasion"
        subtitle="From intimate gatherings to grand celebrations"
        bgColor="bg-light"
      >
        <OccasionCards />
      </Section>

      <Section
      title="Event Spaces"
      subtitle="Versatile venues to accommodate your vision"
      bgColor="bg-beige"
      >
        <EventsCards/>
      </Section>

      <Section
      title="Decoration Themes"
      subtitle="Beautiful setups crafted to perfection"
      bgColor="bg-light"
      >
        <ThemeCards/>
      </Section>

      <Section
      title="Photoshoot Packages"
      titleColor="var(--text-light)"
      subtitle="Professional photography packages with stunning coastal backdrops"
      subtitleColor="var(--text-light)"
      bgColor="bg-dark"
      >
        <EventPackagesCards/>

      </Section>

      <Section
      title="Request an Event Quote"
      subtitle="Let us help you plan the perfect event. Get a customized quote tailored to your needs."
      >
        <Button
        size="lg"
        radius="full"
        arrow
        >
          Get a Quote
        </Button>
      </Section>
    </>
  );
}

export default Events;
