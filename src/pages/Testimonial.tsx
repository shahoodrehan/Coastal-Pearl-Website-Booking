import React from "react";
import Image from "next/image";

import Hero from "@/components/home/Hero";
import StatsCards from "@/components/card/TestimonialCard/StatsCards";
import Section from "@/components/home/Section";
import CommentCards from "@/components/card/TestimonialCard/CommentCards";
import Button from "@/components/ui/Button";

function Testimonial() {
  return (
    <>
      <Hero
        title="Guest Experiences"
        subtitle="Hear what our guests have to say about their stay at The Coastal Pearl"
        backgroundImage="/images/about-hero.jpg"
      />

      <section className="w-full bg-(--bg-light) py-12 md:py-20 px-4 md:px-8">
        <StatsCards />
      </section>

      <Section
        title="What Our Guests Say"
        subtitle="Real experiences from real guests"
        bgColor="bg-beige"
      >
        <CommentCards />
      </Section>

      <section className="w-full bg-(--bg-dark) py-12 md:py-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
          {/* Testimonial Icon */}
          <Image
            src="/icons/testimonial.png"
            alt="testimonial icon"
            width={64}
            height={64}
            className="mb-8"
          />

          {/* Stars */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Image
                key={s}
                src="/icons/rating.png"
                alt="star"
                width={20}
                height={20}
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-[24px] text-(--text-light) mb-8">
            "The Coastal Pearl is not just a resort; it's an experience. From
            the moment you arrive, you're transported to a world of luxury and
            tranquility. The combination of modern amenities and natural beauty
            is simply unmatched in Karachi."
          </p>

          {/* Reviewer Name */}
          <p className="text-[20px] text-(--text-beige)">
            — Featured Guest Review
          </p>
        </div>
      </section>

      <Section
        title="Create Your Own Story"
        subtitle="Join hundreds of satisfied guests who have experienced the magic of The Coastal Pearl"
      >
        <Button variant="primary" size="lg" radius="full" width="full">
          Book your Stay
        </Button>
      </Section>
    </>
  );
}

export default Testimonial;
