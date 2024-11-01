import React from "react";

const VisionStatement = () => {
  return (
    <>
      <div className="w-full h-auto bg-[#EDE9E5]">
        <div className="w-full max-w-[1440px] mx-auto h-[420px] bg-[#EDE9E5] flex-col max-custom:h-[223.3px] max-mid:h-[480px]">
          {/* First Statement */}
          <div className="w-full h-[61px] border-b-[3px] border-[#D0C5BA] flex justify-center max-custom:h-[32.43px] max-custom:border-0 max-mid:w-full max-mid:h-[96px] max-mid:items-center max-mid:border-b-[3px] ">
            <div className="w-[1131px] h-full font-gilroyreal2 font-normal text-[20px] leading-[21.4px] flex justify-start items-center max-custom:w-[601.31px] max-custom:text-[10.63px] max-custom:leading-[11.38px] max-mid:w-[238px] max-mid:h-[34px] max-mid:text-[16px] max-mid:leading-[17.12px] ">
              <p className="text-[#81796E]">
                VISION STATEMENT FROM THE FOUNDERS
              </p>
            </div>
          </div>

          {/* Second Statement */}
          <div
            className=" w-full h-[359px] flex justify-center items-center max-custom:h-[190.87px]
          max-mid:h-[384px]"
          >
            <div
              className=" font-gilroyreal2 text-[20px]  leading-[21.4px] text-[#81796E] flex flex-col justify-center 
          w-[1131px] h-full  gap-[55px] max-custom:w-[601.31px] max-custom:h-[112.24px] max-custom:gap-[29.24px]
          max-mid:w-[280px] max-mid:h-[271px] max-mid:gap-[40px]"
            >
              <p className="w-full h-auto text-start text-[32px] leading-[34.24px] max-custom:text-[17.01px] max-custom:leading-[18.2px] max-mid:text-[20px] max-mid:leading-[21.4px]">
                The website’s sleek design and intuitive navigation make booking
                classes and managing my schedule so easy. The modern,
                professional feel really reflects the Athlos brand, and I love
                how everything is right at my fingertips!
              </p>
              <p className="w-full h-auto text-start text-[20px] leading-[21.4px] max-custom:text-[10.63px] max-custom:leding-[11.38px] max-mid:text-[20px] max-mid:leading-[21.4px]">
                -Prithu
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionStatement;
