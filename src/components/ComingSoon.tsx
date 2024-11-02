import React from "react";
import Image from "next/image";
import BlurredImage from "@/assets/ComingSoon/Background.png";
import facebookIcon from "@/assets/ComingSoon/facebookIcon.svg";
import instagramIcon from "@/assets/ComingSoon/instagramIcon.svg";

const ComingSoon = () => {
  return (
    <>
      <div className="w-full  mx-auto h-[1019px] max-custom:h-[607px] flex flex-col justify-center items-center  max-mid:h-[454px]">
        <div className="w-full h-[919px] flex justify-center items-center max-w-[1440px] max-custom:h-[543px] max-mid:h-[402px]">
          <div
            className="w-[1243px] h-[728px] relative overflow-hidden flex justify-center items-center max-custom:w-[675px] max-custom:h-[395px]
          max-mid:w-[278px] max-mid:h-[274px]"
          >
            <Image
              src={BlurredImage}
              alt="image"
              className="absolute w-[1243px] h-[728px] -z-10 max-custom:w-[675px] max-custom:h-[395px] max-mid:w-[278px] max-mid:h-[274px]"
              layout="fill"
              objectFit="cover"
            />
            <p
              className="font-gilroyreal2 font-normal text-[55px] leading-[99.85px] text-white max-custom:text-[30.1px] max-custom:leading-[54px]
            max-mid:text-[24px] max-mid:leading-[27px] max-mid:text-center"
            >
              fitness studio coming soon
            </p>
          </div>
        </div>
        <BottomComponent />
      </div>
    </>
  );
};

export default ComingSoon;

export const BottomComponent = () => {
  return (
    <>
      <div className="w-full h-[100px] bg-[#F8F8F8] flex justify-center items-center max-custom:h-[64px]">
        <div className="w-[576px] h-[33px] flex text-[#6C757D]  justify-center items-center gap-[18px] max-custom:w-[400px] max-custom:h-[21.09px]">
          <p className="font-gilroyreal2 font-normal text-[18px] leading-[32px] max-custom:text-[11.5px] max-custom:leading-[20.07px] max-mid:text-[8px]">
            xyxz 125, 7512 XX yyxzyyy,0889090806,info@athlosindia.com
          </p>
          <div className="w-[50px] h-full py-[6.5px] flex justify-between max-custom:w-[31.95px] max-custom:py-[4.15px]">
            <Image src={facebookIcon} alt="facebook icon" />
            <Image src={instagramIcon} alt="instagem icon" />
          </div>
        </div>
      </div>
    </>
  );
};
