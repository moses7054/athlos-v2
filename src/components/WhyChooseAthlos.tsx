import React from "react";
import Image from "next/image";
import Pic1 from "@/assets/WhyChooseAthlos/Picture1and6.png";
import Pic2 from "@/assets/WhyChooseAthlos/Picture2.png";
import Pic3 from "@/assets/WhyChooseAthlos/Picture3.png";
import Pic4 from "@/assets/WhyChooseAthlos/Picture4.png";
import Pic5 from "@/assets/WhyChooseAthlos/Picture5.png";
import Pic6 from "@/assets/WhyChooseAthlos/Picture1and6.png";

const WhyChooseAthlos = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#D0C5BA]">
        {" "}
        <div className="w-full max-w-[1440px] h-[733px] bg-[#D0C5BA] mx-auto flex flex-col items-center max-custom:h-[388px] max-mid:h-[1045.11px]">
          {/* why choose athlos text */}
          <div
            className="w-[239px] h-[193px] pt-[65px] font-gilroyblack flex flex-col justify-between items-center mb-[64px]
          max-custom:w-[127px] max-custom:h-[68px] max-custom:p-0 max-custom:m-0 max-custom:mt-[34.49px] max-custom:mb-[33.38px] max-mid:w-[150px] max-mid:h-[79px] max-mid:mt-[46.9px] max-mid:mb-[40px]"
          >
            <p
              className="font-gilroyblack   text-white
            text-[28px] leading-[35px] max-custom:text-[14.86px] max-custom:leading-[18.53px]
            max-mid:text-[16px] max-mid:leading-[20px]"
            >
              why choose
            </p>
            <p
              className="font-gilroyblack   text-white
             text-[64px] leading-[80px] max-custom:text-[33.36px] max-custom:leading-[42.25px]
             max-mid:text-[40px] max-mid:leading-[50px] "
            >
              ATHLOS
            </p>
          </div>

          {/* shapes  */}
          <div className="flex w-full h-[279px] justify-center gap-[176px] max-custom:w-[148.13px] max-custom:gap-[93.93px] max-mid:flex-col max-mid:justify-start max-mid:gap-[40.4px] max-mid:w-[181.35px] max-mid:h-[894.9px]">
            {/* triangle */}
            <div className="w-[246px] h-[279px] flex flex-col justify-between items-center text-white max-custom:h-[148px] max-custom:w-[130px] max-mid:w-[181.35px] max-mid:h-[205.56px]">
              {/* <Triangle /> */}
              <div className="w-[88px] h-[75px] max-custom:w-[53px] max-custom:h-[53px] max-mid:w-[73.72px] max-mid:h-[73.72px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[88px] h-[75px] max-custom:w-[53px] max-custom:h-[53px] max-mid:w-[73.72px] max-mid:h-[73.72px]"
                  fill="none"
                  viewBox="0 0 88 75"
                >
                  <path fill="#fff" d="M44 0l43.301 75H.7L44 0z"></path>
                </svg>
              </div>
              <div className="w-[256px] h-[30px] font-gilroyreal2 font-normal text-[28px] max-custom:w-[135.84px] max-custom:h-[16px] max-custom:text-[14.86px] max-mid:w-[188.72px] max-mid:h-auto max-mid:text-[20.64px]">
                HOLISTIC GROWTH
              </div>
              <div className="w-full h-[140px] font-inter font-medium text-[18px] leading-[32px] text-center max-custom:h-[74px] max-custom:text-[9.55px] max-custom:leading-[23.59px] max-mid:h-auto max-mid:text-[13.27px] max-mid:leading-[23.59px]">
                fostering a deeper connection between your body and mind.
              </div>
            </div>

            {/* Square */}
            <div className="w-[246px] h-[279px] flex flex-col justify-between items-center text-white max-custom:h-[148px] max-custom:w-[130px] max-mid:w-[181.35px] max-mid:h-[205.56px]">
              <div className="w-[80px] h-[80px] max-custom:w-[42.45px] max-custom:h-[42.45px] max-mid:w-[65px] max-mid:h-[65px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="80"
                  // height="80"
                  fill="none"
                  viewBox="0 0 80 80"
                  className="w-[80px] h-[80px] max-custom:w-[42.45px] max-custom:h-[42.45px] max-mid:w-[65px] max-mid:h-[65px]"
                >
                  <path fill="#fff" d="M0 0H80V80H0z"></path>
                </svg>
              </div>
              <div className="w-[256px] h-[30px] font-gilroyreal2 font-normal text-[28px] max-custom:w-[135.84px] max-custom:h-[16px] max-custom:text-[14.86px] max-mid:w-[188.72px] max-mid:h-auto max-mid:text-[20.64px]">
                HOLISTIC GROWTH
              </div>
              <div className="w-full h-[140px] font-inter font-medium text-[18px] leading-[32px] text-center max-custom:h-[74px] max-custom:text-[9.55px] max-custom:leading-[23.59px] max-mid:h-auto max-mid:text-[13.27px] max-mid:leading-[23.59px]">
                it&apos;s about enabling you to move with freedom and ease.
              </div>
            </div>

            {/* diamond */}
            <div className="w-[246px] h-[279px] flex flex-col justify-between items-center text-white max-custom:h-[148px] max-custom:w-[130px] max-mid:w-[181.35px] max-mid:h-[205.56px]">
              <div className="w-[70px] h-[80px] max-custom:w-[42.45px] max-custom:h-[42.45px] max-mid:w-[73.72px] max-mid:h-[73.72px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width="70"
                  // height="80"
                  fill="none"
                  viewBox="0 0 70 80"
                  className="w-[70px] h-[80px] max-custom:w-[42.45px] max-custom:h-[42.45px] max-mid:w-[73.72px] max-mid:h-[73.72px]"
                >
                  <path
                    fill="#fff"
                    d="M35 0l34.641 20v40L35 80 .359 60V20L35 0z"
                  ></path>
                </svg>
              </div>
              <div className="w-[256px] h-[30px] font-gilroyreal2 font-normal text-[28px] max-custom:w-[135.84px] max-custom:h-[16px] max-custom:text-[14.86px] max-mid:w-[188.72px] max-mid:auto max-mid:text-[20.64px]">
                HOLISTIC GROWTH
              </div>
              <div className="w-full h-[140px] font-inter font-medium text-[18px] leading-[32px] text-center max-custom:h-[74px] max-custom:text-[9.55px] max-custom:leading-[23.59px] max-mid:h-auto max-mid:text-[13.27px] ">
                Using data-driven insights and real-time feedback, we help you
                reach peak performance.
              </div>
            </div>
          </div>

          <div className="flex translate-y-[50%] max-custom:translate-y-[30%] max-mid:w-full max-mid:h-[150px] max-mid:overflow-hidden max-mid:translate-y-0">
            <Image
              src={Pic1}
              alt="img"
              className="w-[204px] h-[252px] max-custom:w-[108.45px] max-custom:h-[133.9px] max-mid:h-[150px] max-mid:w-[121.66px]"
            />
            <Image
              src={Pic2}
              alt="img"
              className="w-[204px] h-[252px] max-custom:w-[108.45px] max-custom:h-[133.9px] max-mid:h-[150px] max-mid:w-[121.66px]"
            />
            <Image
              src={Pic3}
              alt="img"
              className="w-[204px] h-[252px] max-custom:w-[108.45px] max-custom:h-[133.9px] max-mid:h-[150px] max-mid:w-[121.66px]"
            />
            <Image
              src={Pic4}
              alt="img"
              className="w-[204px] h-[252px] max-custom:w-[108.45px] max-custom:h-[133.9px] max-mid:h-[150px] max-mid:w-[121.66px]"
            />
            <Image
              src={Pic5}
              alt="img"
              className="w-[204px] h-[252px] max-custom:w-[108.45px] max-custom:h-[133.9px] max-mid:h-[150px] max-mid:w-[121.66px]"
            />
            <Image
              src={Pic6}
              alt="img"
              className="w-[204px] h-[252px] max-custom:w-[108.45px] max-custom:h-[133.9px] max-mid:h-[150px] max-mid:w-[121.66px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseAthlos;
