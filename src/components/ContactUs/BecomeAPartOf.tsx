import React from "react";
import Image from "next/image";
import TrainerPhoto from "@/assets/ContactUS/PhotoTrainer.jpg";

const BecomeAPartOf = () => {
  return (
    <>
      <div className="w-full h-[812px] flex flex-col items-center max-custom:h-[480.23px] max-mid:h-[244px]">
        {/* Text + Photo */}
        <div className="w-[1440px] h-[812px] pt-[92px] pb-[80px] flex flex-col justify-between items-center max-custom:h-[480.29px] max-custom:w-[764px] max-custom:pt-[91.13px] max-custom:pb-[43.3px] max-mid:w-[320px] max-mid:h-[244px] max-mid:p-0 ">
          {/* text */}
          <div className="w-[1245px] h-[160px] flex justify-start max-custom:w-[673.84px] max-custom:h-[86px] max-mid:w-[280px] max-mid:h-[60px]">
            <p className="h-full w-[747px] font-gilroyreal2 font-normal text-[64px] leading-[80px] text-[#3A4B5B] max-custom:w-[404.3px] max-custom:text-[34.64px] max-custom:leading-[35.3px] max-mid:w-full max-mid:text-[24px] max-mid:leading-[30px]">
              BECOME A PART OF ATHLOS COLLECTIVE
            </p>
          </div>

          {/* Photo */}
          <div
            className="w-[1245px] h-[434px] relative overflow-hidden max-custom:w-[672.76px] max-custom:h-[234.9px]
          max-mid:w-[280px] max-mid:h-[152px]"
          >
            <Image
              src={TrainerPhoto}
              alt="image"
              fill
              className=" w-[1245px] h-[434px] object-cover max-custom:w-[672.76px] max-custom:h-[234.9px]  max-mid:w-[280px] max-mid:h-[152px]"
            />
          </div>
        </div>

        {/* OnboardingText */}
        {/* <div className="w-[1440px] h-[571px] flex justify-center max-custom:w-[764px] max-custom:h-[308px] max-mid:w-[320px] max-mid:h-[244px]">
          <div
            className="w-[1245px] h-full flex flex-col justify-start max-custom:w-[674px] max-custom:h-[43px]
          max-mid:h-full max-mid:w-[280px] "
          >
            <p className="w-full h-[80px] font-gilroyreal2 font-normal text-[64px] text-[#3A4B5B] max-custom:text-[34.64px] max-custom:leading-[35.3px] max-mid:w-full max-mid:h-[60px] max-mid:text-[24px] max-mid:leading-[30px]">
              ONBOARDING PROCESS
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BecomeAPartOf;
