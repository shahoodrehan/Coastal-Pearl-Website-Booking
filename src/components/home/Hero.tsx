import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  height?: string;
  buttons?: ReactNode[]; 
}

function Hero({
  title,
  subtitle,
  backgroundImage,
  height = "70vh",
  buttons,
}: HeroProps) {
  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{
        height: height,
        backgroundImage: `
      linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%),
      url(${backgroundImage})
    `,
      }}
    >
      <div className="w-[70%] mx-auto  flex-row justify-center items-center">
        <h1>{title}</h1>
        <p className="hero-text">{subtitle}</p>

        {buttons && (
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            {buttons.map((btn, index) => (
              <span key={index}>{btn}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
