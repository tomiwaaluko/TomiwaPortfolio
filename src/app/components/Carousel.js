"use client";

import { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

export default function Carousel() {
  const glideRef = useRef(null);

  useEffect(() => {
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: "carousel",
        startAt: 0,
        perView: 3, // Adjust the number of visible slides
        gap: 20,
        autoplay: 3000, // Auto-play every 3 seconds
        hoverpause: true,
        breakpoints: {
          1024: { perView: 2 },
          768: { perView: 1 },
        },
      });

      glide.mount();
    }
  }, []);

  return (
    <div className="glide" ref={glideRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">Slide 1</li>
          <li className="glide__slide">Slide 2</li>
          <li className="glide__slide">Slide 3</li>
          <li className="glide__slide">Slide 4</li>
          <li className="glide__slide">Slide 5</li>
        </ul>
      </div>

      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          ◀
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          ▶
        </button>
      </div>
    </div>
  );
}
