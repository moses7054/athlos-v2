import Image from "next/image";

const Section3Mobile = () => {
  return (
    <div className="w-full flex flex-col h-auto bg-[#E3EEF6] relative pb-12 min-[643px]:hidden">
      <span className="flex absolute top-0 left-0  h-[297px] w-[60px] bg-[#EDE9E5]  border-[#C4B6A9] justify-center items-center xs:h-[362.54px] xs:w-[73.12px]">
        <h1 className="text-[37px] font-gilroyreal2  rotate-90 outline-heading-brown-big xs:text-[45.3px]">
          #athlosindia
        </h1>
      </span>
      <div className="flex flex-col items-start w-fit  pt-12 ml-auto mr-[18px]">
        <h1 className=" text-[20px] font-gilroyreal2 text-center outline-heading-blue xs:text-[24.2px] xs:leading-[24.72px]">
          fitness should be
        </h1>
        <h1 className="text-[#3A4B5B] text-[20px] font-gilroyreal2 leading-[1] text-center xs:text-[24.2px]">
          accessible to EVERYONE
        </h1>
        <Image
          src="/sample2.png"
          className="w-[190.2px] h-auto mt-6 ml-auto xs:w-[230px] xs:h-[310px] "
          alt=""
          width={190}
          height={257}
        />
      </div>
      <p className="font-inter font-[500] text-[14px]  leading-[24px] w-[90%] text-left mx-auto mt-8 text-[#3A4B5B] xs:text-[17px] xs:leading-[31px]">
        It&apos;s not about where you begin, but how you evolve. At Athlos, we
        believe in a personalized approach to fitness, where it&apos;s about
        moving beyond just the basics. Our focus is on your unique journey,
        ensuring you develop strength, mobility, and resilience in ways that
        resonate with your lifestyle and goals.
      </p>
    </div>
  );
};

export default Section3Mobile;
