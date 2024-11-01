import Image from "next/image";
import React from "react";
import TrainerImage from "@/assets/ContactUS/ImageFaq.jpg";

const Faq = () => {
  return (
    <>
      <div className="w-full h-[950px] flex justify-center items-start max-custom:h-[630.4px] max-mid:h-[1196.24px]">
        <div className="w-[1245px] h-[857px] flex justify-between  max-custom:w-[673.84px] max-custom:h-[463.54px] max-mid:h-[1096px] max-mid:w-[280px] max-mid:flex-col">
          {/* First Column Faq */}
          <div className="w-[427.13px] h-full flex flex-col justify-between max-custom:w-[231.18px] max-mid:h-[436.24px] max-mid:w-[280px]">
            {/* Faq text */}
            <div className="w-full h-[80px] flex justify-start max-custom:h-[43px] max-mid:h-[30px]">
              <p className="font-gilroyreal2 font-normal text-[64px] leading-[80px] text-[#3A4B5B] max-custom:text-[36.64px] max-custom:leading-[43.3px] max-mid:text-[30px]">
                FAQ
              </p>
            </div>

            {/* Image */}
            <div className="w-[427.13px] h-[577px] relative overflow-hidden max-custom:w-[231.18px] max-custom:h-[312.3px] max-mid:w-[280px] max-mid:h-[378.24px]">
              <Image
                src={TrainerImage}
                alt="image"
                fill
                className="object-cover w-[427.13px] h-[577px] max-custom:w-[231.18px] max-custom:h-[312.3px] max-mid:w-[280px] max-mid:h-[378.24px]"
              />
            </div>
          </div>

          {/* Questions */}
          <div className="w-[736px] h-[541.7px] mt-[104px] flex flex-col justify-between max-custom:w-[398.35px] max-custom:h-[291.58px] max-custom:mt-[55.99px] max-mid:w-[281px] max-mid:h-[624px]">
            <div className="w-full h-[114.42px] flex flex-col justify-between max-custom:h-[61.53px] max-mid:h-[135px]">
              <p className="font-gilroyreal2 font-normal text-[#3A4B5B] text-[31.77px] max-custom:text-[17.2px] max-custom:leading-[18.4px] max-mid:text-[20px] max-mid:leading-[21.4px]">
                Q1 WHAT OUR CLIENTS HAVE TO SAY ABOUT US?
              </p>
              <p className="font-inter font-medium text-[17.87px] leading-[31.77px] text-[#3A4B5B] max-custom:text-[9.67px] max-custom:leading-[17.2px] max-mid:text-[14px] max-mid:leading-[24px]">
                Neem je je al tijden voor om nou écht eens iets aan sport te
                gaan doen? Dan is fitlab: dé studio om de beste
              </p>
            </div>
            <div className="w-full h-[114.42px] flex flex-col justify-between max-custom:h-[61.53px] max-mid:h-[135px]">
              <p className="font-gilroyreal2 font-normal text-[#3A4B5B] text-[31.77px]  max-custom:text-[17.2px] max-custom:leading-[18.4px] max-mid:text-[20px] max-mid:leading-[21.4px]">
                Q1 WHAT OUR CLIENTS HAVE TO SAY ABOUT US?
              </p>
              <p className="font-inter font-medium text-[17.87px] leading-[31.77px] text-[#3A4B5B] max-custom:text-[9.67px] max-custom:leading-[17.2px] max-mid:text-[14px] max-mid:leading-[24px]">
                Neem je je al tijden voor om nou écht eens iets aan sport te
                gaan doen? Dan is fitlab: dé studio om de beste
              </p>
            </div>
            <div className="w-full h-[114.42px] flex flex-col justify-between max-custom:h-[61.53px] max-mid:h-[135px]">
              <p className="font-gilroyreal2 font-normal text-[#3A4B5B] text-[31.77px]  max-custom:text-[17.2px] max-custom:leading-[18.4px] max-mid:text-[20px] max-mid:leading-[21.4px]">
                Q1 WHAT OUR CLIENTS HAVE TO SAY ABOUT US?
              </p>
              <p className="font-inter font-medium text-[17.87px] leading-[31.77px] text-[#3A4B5B] max-custom:text-[9.67px] max-custom:leading-[17.2px] max-mid:text-[14px] max-mid:leading-[24px]">
                Neem je je al tijden voor om nou écht eens iets aan sport te
                gaan doen? Dan is fitlab: dé studio om de beste
              </p>
            </div>
            <div className="w-full h-[114.42px] flex flex-col justify-between max-custom:h-[61.53px] max-mid:h-[135px]">
              <p className="font-gilroyreal2 font-normal text-[#3A4B5B] text-[31.77px]  max-custom:text-[17.2px] max-custom:leading-[18.4px] max-mid:text-[20px] max-mid:leading-[21.4px]">
                Q1 WHAT OUR CLIENTS HAVE TO SAY ABOUT US?
              </p>
              <p className="font-inter font-medium text-[17.87px] leading-[31.77px] text-[#3A4B5B] max-custom:text-[9.67px] max-custom:leading-[17.2px] max-mid:text-[14px] max-mid:leading-[24px]">
                Neem je je al tijden voor om nou écht eens iets aan sport te
                gaan doen? Dan is fitlab: dé studio om de beste
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
