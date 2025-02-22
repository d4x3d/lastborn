import { useEffect, useRef } from 'react';

interface LogoCarouselProps {
  logos: string[];
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    let scrollPosition = 0;
    const scrollSpeed = 1; // Pixels per frame

    const animate = () => {
      if (!scrollContainer) return;

      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  // Duplicate logos array to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex space-x-12 overflow-x-hidden py-8"
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex-shrink-0 h-20 w-64 flex items-center justify-center"
          >
            <img
              src={`/images/${logo}`}
              alt="Company logo"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900/95 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900/95 to-transparent" />
    </div>
  );
}