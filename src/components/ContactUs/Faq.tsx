import Image from "next/image";
import React from "react";
import TrainerImage from "@/assets/ContactUS/ImageFaq.jpg";

const Faq = () => {
  return (
    <>
      <div className="w-full h-[950px] flex justify-center items-start max-custom:h-[630.4px] max-mid:h-[1200.24px]">
        <div className="w-[1245px] h-[857px] flex justify-between  max-custom:w-[673.84px] max-custom:h-[463.54px] max-mid:h-[1096px] max-mid:max-w-[280px] max-mid:flex-col">
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
          <div className="w-[736px] h-auto  flex flex-col justify-between max-custom:w-[398.35px] max-mid:max-w-[280px] max-mid:gap-[28px] max-mid:mt-[30px]">
            <div className="w-full h-auto flex flex-col justify-between ">
              <p className="font-gilroyreal2 h-auto w-auto font-normal text-[#3A4B5B] text-[31.77px] max-custom:text-[17.2px] max-custom:leading-[18.4px] max-mid:text-[20px] max-mid:leading-[20px] ">
                Q1.WHAT DO OUR CLIENTS HAVE TO SAY ABOUT OUR GYM?
              </p>
              <p className="font-inter h-auto w-auto font-medium text-[17.87px] leading-[31.77px] text-[#3A4B5B] max-custom:text-[9.67px] max-custom:leading-[17.2px] max-mid:text-[10px] max-mid:leading-[18px]">
                Our clients love the supportive environment and the motivation
                they get from our team. Many say joining our gym was a turning
                point in their fitness journey!
              </p>
            </div>
            <div className="w-full h-auto flex flex-col justify-between ">
              <p className="font-gilroyreal2 font-normal text-[#3A4B5B] text-[31.77px]  max-custom:text-[17.2px] max-custom:leading-[18.4px] max-mid:text-[20px] max-mid:leading-[20px]">
                Q2.HOW EXPERIENCED ARE THE TRAINERS AT OUR GYM?
              </p>
              <p className="font-inter font-medium text-[17.87px] leading-[31.77px] text-[#3A4B5B] max-custom:text-[9.67px] max-custom:leading-[17.2px] max-mid:text-[10px] max-mid:leading-[18px]">
                Our trainers are highly certified and experienced in various
                fitness disciplines. They’re dedicated to helping members
                achieve their personal fitness goals safely and effectively.
              </p>
            </div>
            <div className="w-full h-auto flex flex-col justify-between ">
              <p className="font-gilroyreal2 font-normal text-[#3A4B5B] text-[31.77px]  max-custom:text-[17.2px] max-custom:leading-[18.4px] max-mid:text-[20px] max-mid:leading-[20px]">
                Q3.WHAT MAKES OUR GYM DIFFERENT FROM OTHERS?
              </p>
              <p className="font-inter font-medium text-[17.87px] leading-[31.77px] text-[#3A4B5B] max-custom:text-[9.67px] max-custom:leading-[17.2px] max-mid:text-[10px] max-mid:leading-[18px]">
                We focus on personalized training and have state-of-the-art
                equipment to cater to all fitness levels. Our supportive
                community and dedicated staff make our gym feel like a second
                home.
              </p>
            </div>
            <div className="w-full h-auto flex flex-col justify-between ">
              <p className="font-gilroyreal2 font-normal text-[#3A4B5B] text-[31.77px]  max-custom:text-[17.2px] max-custom:leading-[18.4px] max-mid:text-[20px] max-mid:leading-[20px]">
                Q4.HOW DOES OUR GYM SUPPORT MEMBERS IN REACHING THEIR FITNESS
                GOALS?
              </p>
              <p className="font-inter font-medium text-[17.87px] leading-[31.77px] text-[#3A4B5B] max-custom:text-[9.67px] max-custom:leading-[17.2px] max-mid:text-[10px] max-mid:leading-[18px]">
                We provide tailored workout plans, progress tracking, and
                regular assessments. Our trainers work closely with each member,
                ensuring consistent support and guidance on their fitness
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
