const Section4 = () => {
  return (
    <div className="w-full flex flex-col pl-[90px] pb-[195px] max-[1080px]:pl-[45px] max-[1080px]:pb-[77.5px]">
      <h1 className="font-gilroyreal2 font-medium mt-[195px] text-[46px] max-[1080px]:mt-[77px] max-[1080px]:text-[24.9px] text-[#3A4B5B]">
        Service
      </h1>
      <div className="flex gap-6 mt-[60px] overflow-x-auto ">
        {[
          {
            title: "Personal Training",
            desc: "Neem je je al tijden voor om nou écht eens iets aan sport te gaan doen? Dan is dé studio om de beste ",
          },
          {
            title: "Group Classes",
            desc: "Neem je je al tijden voor om nou écht eens iets aan sport te gaan doen? Dan is dé studio om de beste ",
          },
          {
            title: "Remote Classes",
            desc: "Neem je je al tijden voor om nou écht eens iets aan sport te gaan doen? Dan is dé studio om de beste ",
          },
          {
            title: "Personal Training",
            desc: "Neem je je al tijden voor om nou écht eens iets aan sport te gaan doen? Dan is dé studio om de beste ",
          },
          {
            title: "Remote Classes",
            desc: "Neem je je al tijden voor om nou écht eens iets aan sport te gaan doen? Dan is dé studio om de beste ",
          },
        ].map((ele, idx) => {
          return (
            <div
              key={"dexc" + idx}
              style={{
                background: `url(${"/carouselcard.png"})`,
                backgroundSize: "cover",
              }}
              className="flex flex-col min-w-[448px] min-h-[537px] p-[30px] max-[1080px]:min-w-[242px] max-[1080px]:min-h-[290px]"
            >
              <h1 className="text-3xl text-white font-gilroyreal2 mt-auto uppercase max-[1080px]:text-[19.5px]">
                {ele.title}
              </h1>
              <p className="text-base mt-4 text-white max-w-[355px] max-[1080px]:w-[247px] max-[1080px]:text-[8.6px]">
                {ele.desc}
              </p>
              <button className="w-[259px] h-[48px] bg-white text-[#3A4B5B] mt-7 uppercase font-gilroyreal2 max-[1080px]:w-[140.3px] max-[1080px]:h-[26.3px] max-[1080px]:text-[7.5px]">
                Learn More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
