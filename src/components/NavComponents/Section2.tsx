"use client";

import useScrollScale from "@/hooks/useScrollScroll";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const textStrip =
  "repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.repeat.consistency.growth.impact.";

const Section2 = () => {
  const observedRef = useRef(null);
  const [scaleuse, setScale] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Set scale based on screen width
    const updateScale = () => {
      if (window.innerWidth < 746) {
        setScale(1.3); // Set to 1.3 for small screens
      } else {
        setScale(1.5); // Set to 1.5 for larger screens
      }
      setIsSmallScreen(window.innerWidth < 764);
    };

    // Initial check
    updateScale();

    // Update scale on window resize
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const scale = useScrollScale({
    initialScale: 1,
    finalScale: scaleuse,
    ref: observedRef,
  });
  return (
    <div className="bg-white w-full flex h-[650px] justify-center relative max-[1080px]:h-[450px] max-[500px]:h-[220px] ">
      <Image
        ref={observedRef}
        style={{
          transform: `scale(${scale}) ${
            isSmallScreen ? "translateY(-20%)" : "translateY(0)"
          }`,
          transition: "transform 0.3s ease-out",
        }}
        className={cn(
          `w-[771px] h-[433.69px] border-white border-[12px] absolute -top-24 max-[1080px]:-top-0 max-[1080px]:w-[512px] max-[1080px]:h-[300px] max-[500px]:w-[250px] max-[500px]:h-[140px]  max-[500px]:border-[4px] transition-transform duration-500 ease-out `,
          "origin-center", // Set transform origin
          "will-change-transform"
        )}
        src="/sample1.png"
        alt=""
        id="scrollimage"
        width={771} // Set based on CSS width
        height={434}
        priority
      />
      <div className="mt-auto overflow-hidden flex mb-10 max-[1080px]:mb-1 max-[500px]:mb-4 ">
        <h1 className="text-outlie-stripe font-normal text-[100px] font-gilroyreal2 min-w-fit scroll outline-heading-blue max-[1080px]:text-[64.2px]  max-[500px]:text-[44.5px]  ">
          {textStrip}
          {textStrip}
        </h1>
      </div>
    </div>
  );
};

export default Section2;
