"use client";

import React, { useEffect, useState } from "react";
import img1 from "@/assets/Instructors/DesktopInstructor.png";
import img2 from "@/assets/Instructors/full2.jpeg";
import img3 from "@/assets/Instructors/full3.jpeg";
import Image from "next/image";

const Interactive = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1);
  const [isPhoneScreen, setIsPhoneScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneScreen(window.innerWidth < 764);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexed = [
    { img: img1, num: 1 },
    { img: img2, num: 2 },
    { img: img3, num: 3 },
    { img: img3, num: 4 },
  ];

  const handleClick = (index: number) => {
    setExpandedIndex((prevIndex) =>
      prevIndex === index ? (index === 4 ? 1 : index + 1) : index
    );
  };

  return (
    <div
      className="w-[1032px] h-[507px] flex justify-between max-custom:w-[547.98px] max-custom:h-[269.21px]
            max-mid:flex-col max-mid:h-[569.94px] max-mid:w-[280px] max-mid:items-center"
    >
      {indexed.map((item) => (
        <div
          key={item.num}
          onClick={() => handleClick(item.num)}
          className={`
            relative overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-lg mid:hover:-translate-y-2 max-mid:hover:-translate-y-[2px]
            hover:shadow-black/20 max-mid:object-top
            ${
              isPhoneScreen
                ? `w-[326.27px] ${
                    expandedIndex === item.num ? "h-[275.08px]" : "h-[85.83px] "
                  }`
                : `mid:h-[270.27px] custom:h-[509px] ${
                    expandedIndex === item.num
                      ? "custom:w-[498px] mid:w-[264.43px]"
                      : "custom:w-[155.42px] mid:w-[82.53px]"
                  }`
            }
          `}
        >
          <Image
            src={item.img}
            alt={`image ${item.num}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Interactive;
