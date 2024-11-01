import React from "react";

const LetsConnect = () => {
  return (
    <>
      <div className="w-full h-[831px] flex items-center py-[80px] justify-center max-custom:h-[450.18px] max-custom:py-[43.3px] max-mid:h-[805.29px] max-mid:py-[40px]">
        {/* Box */}
        <div className="w-[1245px] h-[671px] flex flex-col justify-between items-center max-custom:w-[673.84px] max-custom:h-[363.58px] max-mid:w-[280px] max-mid:h-[725.29px]">
          {/* letsConnect */}
          <div className="w-full h-[75px] flex justify-start max-custom:h-[41px] max-mid:h-[28px]">
            <p className="font-gilroyreal2 font-normal text-[74.95px] leading-[74.95px] text-[#3A4B5B] max-custom:text-[40.56px] max-custom:leading-[40.56px] max-mid:text-[24px]  ">
              let's connect
            </p>
          </div>

          {/* Form */}
          <div className="w-[1245px] h-[518px] flex flex-row justify-between max-custom:w-[673.84px] max-custom:h-[280.36px] max-mid:w-[280px] max-mid:h-[665.29px] max-mid:flex-col">
            {/* Which Services */}

            {/* First Column */}
            <div className="h-full w-[518px] flex flex-col max-custom:w-[223.53px] max-md:w-[280px] max-mid:h-[248px]">
              {/* Heading */}
              <div className="w-full h-[71px] max-custom:h-[39px] max-mid:h-[48px]">
                <p className="font-gilroyreal1 font-normal text-[35px] leading-[35px] text-[#3A4B5B] max-custom:text-[19.13px] max-custom:leading-[19.13px] max-mid:text-[18px] max-mid:leading-[24px]">
                  which services do <br className="block max-mid:hidden" /> you
                  want to opt:
                </p>
              </div>

              {/* radio buttons */}
              <div className="w-full h-[413px] flex flex-col font-gilroyreal1 font-normal text-[22.62px] leading-[40.72px] text-[#3A4B5B] mt-[33.62px] justify-between max-custom:h-[229.3px] max-custom:text-[12.24px] max-custom:leading-[22.04px] max-custom:mt-[17.62px] max-mid:h-[176px] max-mid:text-[16.27px] max-mid:leading-[15px] max-mid:mt-[24px] max-mid:flex-wrap">
                <div className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]">
                  <input
                    type="radio"
                    id="personal"
                    value={"personal"}
                    name="personal"
                  />
                  <label htmlFor="personal">Personal training</label>
                </div>
                <div className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]">
                  <input
                    type="radio"
                    id="personal"
                    value={"personal"}
                    name="personal"
                  />
                  <label htmlFor="personal">Group Classes</label>
                </div>
                <div className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]">
                  <input
                    type="radio"
                    id="personal"
                    value={"personal"}
                    name="personal"
                  />
                  <label htmlFor="personal">Remote Coaching</label>
                </div>
                <div className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]">
                  <input
                    type="radio"
                    id="personal"
                    value={"personal"}
                    name="personal"
                  />
                  <label htmlFor="personal">Nutrition</label>
                </div>
                <div className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]">
                  <input
                    type="radio"
                    id="personal"
                    value={"personal"}
                    name="personal"
                  />
                  <label htmlFor="personal">Athlete Based</label>
                </div>
                <div className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]">
                  <input
                    type="radio"
                    id="personal"
                    value={"personal"}
                    name="personal"
                  />
                  <label htmlFor="personal">For her</label>
                </div>
                <div className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]">
                  <input
                    type="radio"
                    id="personal"
                    value={"personal"}
                    name="personal"
                  />
                  <label htmlFor="personal">Other Query</label>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="h-full w-[588px] flex flex-col items-center max-custom:w-[341.52px] max-mid:w-[280px] max-mid:h-[393.29px]">
              {/* Heading */}
              <div className="w-full h-[71px] max-custom:h-[39px] max-mid:h-[24px]">
                <p className="font-gilroyreal1 w-[70%] font-normal text-[35px] leading-[35px] text-[#3A4B5B] max-custom:text-[19.13px] max-custom:leading-[19.13px] max-custom:pl-[11px] max-mid:text-[18p] max-mid:leading-[24px] max-mid:pl-0">
                  How can we <br className="block max-mid:hidden" /> contact
                  you?
                </p>
              </div>

              {/*Details  */}
              <div
                className="w-full h-[341.8px] pt-[33.62px] pb-[21.21px] flex flex-col items-center justify-between text-[#3A4B5B] font-gilroyreal1 font-normal text-[22.62px] leading-[27.14px] max-custom:h-[184.42px] max-custom:pt-[17.62px] max-custom:pb-[11.48px] max-custom:text-[12.24px] max-custom:leading-[14.62px]
              max-mid:h-[329.29px] max-mid:pt-[24px] max-mid:pb-[30px] max-mid:text-[16px] max-mid:leading-[19.2px]"
              >
                {/* <div
                  className="w-[588px] h-[49.34px] border-b-[1.4px] border-[#3A4B5B] text-start pt-[8px]
                max-custom:w-[318.62px] max-custom:h-[27.08px] max-custom:pt-[4.59px] max-mid:w-[280px] max-mid:h-[39.1px] max-mid:pt-[8.48px]"
                >
                  Name
                </div> */}
                <div
                  className="relative w-[588px] h-[49.34px] border-b-[1.4px] border-[#3A4B5B] text-start pt-[8px]
                max-custom:w-[318.62px] max-custom:h-[27.08px] max-custom:pt-[4.59px] max-mid:w-[280px] max-mid:h-[39.1px] max-mid:pt-[8.48px]"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full py-2 placeholder-gray-500"
                  />
                </div>
                <div
                  className="relative w-[588px] h-[49.34px] border-b-[1.4px] border-[#3A4B5B] text-start pt-[8px]
                max-custom:w-[318.62px] max-custom:h-[27.08px] max-custom:pt-[4.59px] max-mid:w-[280px] max-mid:h-[39.1px] max-mid:pt-[8.48px]"
                >
                  <input
                    type="text"
                    placeholder="Phone"
                    className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full py-2 placeholder-gray-500"
                  />
                </div>
                <div
                  className="relative w-[588px] h-[49.34px] border-b-[1.4px] border-[#3A4B5B] text-start pt-[8px]
                max-custom:w-[318.62px] max-custom:h-[27.08px] max-custom:pt-[4.59px] max-mid:w-[280px] max-mid:h-[39.1px] max-mid:pt-[8.48px]"
                >
                  <input
                    type="text"
                    placeholder="E-mail address"
                    className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full py-2 placeholder-gray-500"
                  />
                </div>
                <div
                  className="relative w-[588px] h-[88.34px] border-b-[1.4px] border-[#3A4B5B] text-start pt-[8px]
                max-custom:w-[318.62px] max-custom:h-[47.08px] max-custom:pt-[4.59px] max-mid:w-[280px] max-mid:h-[70px] max-mid:pt-[8.48px]"
                >
                  <input
                    type="text"
                    placeholder="Message"
                    className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full py-2 placeholder-gray-500 h-[88.34px] max-custom:h-[47.08px] max-mid:h-[70px] "
                  />
                </div>
              </div>

              {/* Button */}
              <button
                className="w-[588px] h-[63px] border-[2.63px] border-[#3A4B5B] flex justify-center items-center text-[#3A4B5B] 
               max-custom:w-[317.17px] max-custom:h-[34.1px] max-custom:border-[1.4px] max-mid:w-[280px] max-mid:h-[40px]
                 hover:bg-[#3A4B5B] hover:text-white"
              >
                <p className="font-gilroyreal2 font-normal text-[18.43px] leading-[21.75px] max-custom:text-[9.98px] max-custom:leading-[11.77px] max-mid:text-[12px]  hover:text-white ">
                  SEND MESSAGE
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsConnect;
