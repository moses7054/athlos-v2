import Image from "next/image";

const Section3 = () => {
  return (
    <div className="w-full flex  h-[643px] bg-[#E3EEF6] max-[1080px]:h-[341.1px] max-[643px]:hidden">
      <span className="flex h-full bg-[#EDE9E5] w-[185px] border-r-[3px] border-[#C4B6A9] relative justify-center items-center max-[1080px]:w-[98px]">
        <h1 className="text-[88.2px] font-gilroyreal2 outline-heading-brown rotate-90 max-[1080px]:text-[46.8px]">
          #athlosindia
        </h1>
      </span>
      <div className="flex flex-col w-full">
        <div className="pt-[98px] max-[1080px]:pt-[51px]">
          <span>
            <h1 className="outline-heading-blue text-[64px] px-[76px] font-gilroyreal2 max-[1080px]:text-[33.9px]">
              fitness should be
            </h1>
            <h1 className="text-[#3A4B5B] text-[64px] px-[76px] font-gilroyreal2 leading-[50%] max-[1080px]:text-[33.9px]">
              accessible to EVERYONE
            </h1>
          </span>
        </div>
        <div className="mt-[42px] ml-auto flex w-fit relative max-[1080px]:text-[21.3px] max-[1080px]:mt-[21px]">
          <Image
            src="/sample2.png"
            className="w-[323px] absolute left-[-60%] max-[1080px]:w-[171.3px] max-[1080px]:h-[231.4px] max-[1080px]:left-[-60%]"
            alt=""
            width={323} // Default width
            height={231}
          />
          <p className="font-inter w-[440px] ml-[79px] font-[500] mt-16 leading-[32px] max-[1080px]:text-[9.5px] max-[1080px]:ml-[20.9px] max-[1080px]:w-[233.4px]  max-[1080px]:mr-10 max-[1080px]:leading-[16.978px]">
            It&apos;s not about where you begin, but how you evolve At Athlos,
            we believe in a personalized approach to fitness, where it&apos;s
            about moving beyond just the basics. Our focus is on your unique
            journey, ensuring you develop strength, mobility, and resilience in
            ways that resonate with your lifestyle and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
