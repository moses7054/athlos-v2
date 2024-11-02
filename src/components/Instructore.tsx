import React from "react";
import Interactive from "./InstructorsInteractive";
import RoundPic from "@/assets/Instructors/makeItPersonalRoundStamp.svg";
import Image from "next/image";

//
const Instructore = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#E3EEF6] relative">
        <div
          className="w-full  h-[823px] flex mx-auto relative overflow-hidden max-custom:h-[437px] justify-center
        max-mid:h-[823px] max-mid:flex-col max-mid:items-center"
        >
          <div
            className=" w-[198px] h-full bg-[#3A4B5B] flex justify-center items-center max-custom:w-[105.13px]
          max-mid:w-full max-mid:h-[76.87px] mid:absolute mid:left-0 mid:z-10"
          >
            {/* Text for Instructor */}
            <div className="w-[100px] h-[538.75px] font-gilroyreal2 font-normal  text-[31.06px] leading-[38.08px] max-custom:w-[53px] max-custom:h-[286px] max-mid:w-[209.15px] max-mid:h-[39px] mid:text-[42.48px] mid:leading-[53.1px] custom:text-[80px] custom:leading-[100px]  ">
              <span
                className="outline-heading custom:outline-heading-instructor mid:rotate-90 mid:z-20 mid:absolute mid:-left-[96px] mid:bottom-[187px]
              custom:bottom-[360px] custom:-left-[170px] "
              >
                INSTRUCTORS
              </span>
            </div>
          </div>

          {/* Pictures */}
          <div
            className="w-[1241px] h-full bg-[#E3EEF6] flex justify-center items-center max-custom:w-[658.95px] relative
          max-mid:w-[320px] max-mid:h-[746px]"
          >
            <Interactive />
            <Image
              src={RoundPic}
              alt="img"
              className="w-[175px] h-[178px] absolute right-0 bottom-0 max-custom:w-[92px] max-custom:h-[94px]
              max-mid:w-[82px] max-mid:h-[84px] animate-spin-4s "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructore;
