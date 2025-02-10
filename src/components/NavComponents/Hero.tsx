import RoundRotateImage from "@/assets/NavAssets/CircleRotate.svg";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Hero = () => {
  return (
    <div
      className={`flex flex-col w-full h-[1024px] max-[1080px]:h-[543.2px]  bg-cover bg-hero_bg  herobgpos`}
    >
      <div className="absolute flex w-full h-[1024px] bg-[#00000040] max-[1080px]:h-[543.2px]"></div>
      {/* Nav */}
      <div className="flex w-full absolute top-0 left-0 justify-between px-[94px] py-[40px] max-[1080px]:px-[52px] max-[600px]:px-[12px]">
        <div className="w-[218.48px] h-[63px] flex justify-between items-center max-custom:w-[116.11px] max-custom:h-[33.42px] max-mid:w-[97px] max-mid:h-[27.92px]">
          {/* symbol */}
          <Link
            className="w-[70.64px] h-full max-custom:w-[37.48px] max-custom:h-[33.43px]
            max-mid:w-[31.31px] max-mid:h-[27.92px] "
            href={"/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="35"
              // height="32"
              fill="none"
              viewBox="0 0 35 32"
              className="w-[77px] h-[69px]  max-custom:w-[37.48px] max-custom:h-[33.43px]  max-mid:w-[31.31px] max-mid:h-[27.92px]"
            >
              <g filter="url(#filter0_d_116_17)">
                <path
                  fill="#E3EEF6"
                  d="M32.975 17.216l-1.936 3.399-7.502-12.869s-.402-.716-.563-.809c-.301-.173-.727-.243-.727-.243H12.89s-.349.098-.564.243c-.226.151-.485.486-.485.486L7.404 15.11s-.24.45-.24.81c0 .485.483 1.295.483 1.295l3.871 6.798s.528.798.969 1.052c.355.205 1.21.162 1.21.162h6.695s.759.076 1.21-.647c.435-.697.16-1.295.16-1.295l-.967-1.862s-.241-.404-.645-.566c-.379-.152-.888-.162-.888-.162h-2.904s-.68-.03-1.128-.324c-.367-.24-.808-.648-.808-.648l-1.613-2.751s-.097-.533-.08-.971c.016-.412.08-.89.08-.89l1.453-2.51s.342-.566.645-.809c.403-.324.726-.405 1.21-.486.165-.027 2.743-.04 2.904 0l.002.001c.453.113.618.154 1.127.404.633.311 1.048 1.133 1.048 1.133l6.05 10.522s.993 2.655-.564 4.775c-1.13 1.537-3.146 1.78-3.146 1.78h-12.02s-1.069.046-1.693-.323c-.55-.326-1.05-1.053-1.05-1.053L2.404 17.458s-.419-.844-.403-1.537c.016-.667.403-1.457.403-1.457l6.05-10.44S9.05 2.97 9.502 2.646C10.043 2.26 11.196 2 11.196 2l12.987.08s1.13.163 1.613.567c.323.27.565.648.565.648l6.05 10.521s.83 1.504.887 2.024c.08.728-.323 1.376-.323 1.376z"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d_116_17"
                  width="33.847"
                  height="30.463"
                  x="0.731"
                  y="0.731"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="0.635"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0.5 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_116_17"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_116_17"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </Link>

          {/* text */}
          <div className="w-[135px] h-[29px] max-custom:w-[74px] max-custom:h-[19px] max-mid:w-[62px] max-mid:h-[18px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="61"
              // height="14"
              className="w-[135px] h-[29px] max-custom:w-[74px] max-custom:h-[19px] max-mid:w-[62px] max-mid:h-[18px] "
              fill="none"
              viewBox="0 0 61 14"
            >
              <g fill="#E3EEF6" filter="url(#filter0_d_116_18)">
                <path d="M4.195 11.908h-1.95l4.29-10.011h2.08l4.42 10.01h-2.21l-1.04-2.73h-3.38l.65-1.69h2.08l-1.69-3.64-3.25 8.06zM17.846 11.908h-1.95V3.52h-2.86V1.897h7.67V3.52h-2.86v8.388zM23.696 11.908h-1.95V1.897h1.95v4.03h4.81v-4.03h1.95v10.01h-1.95v-4.29h-4.81v4.29zM32.537 11.908V1.897h1.95v8.32h3.9v1.69h-5.85zM58.669 2.287v1.69s-1.083-.46-1.82-.52c-.304-.025-1.04 0-1.04 0h-1.17s-.598.062-.78.13c-.278.104-.425.135-.65.39-.278.314-.405.607-.39 1.04.01.321.162.553.39.78.226.227.65.26.65.26h2.86s1.078.286 1.56.78c.349.358.474.51.65.91.13.296.052 2.035 0 2.21-.117.39-.497.85-1.04 1.3-.721.598-2.08.65-2.08.65s-1.322.075-2.08 0c-.932-.09-2.34-.39-2.34-.39v-1.69s1.408.429 2.34.52c.758.075 1.82 0 1.95 0 .071 0 .313-.036.52-.13.249-.112.331-.161.52-.39.204-.247.35-.547.39-.78.035-.2 0-.52 0-.52s-.067-.326-.26-.52l-.017-.017c-.188-.187-.373-.373-.633-.373h-2.86s-1.083-.22-1.56-.65c-.39-.35-.65-1.17-.65-1.17s-.124-.55-.13-.91c-.008-.41.078-.88.13-1.04.09-.282.492-.879 1.04-1.3.636-.49 1.95-.65 1.95-.65h2.34s.885-.002 1.43.13c.312.076.78.26.78.26z"></path>
                <path
                  fillRule="evenodd"
                  d="M44.76 12.036c3.437 0 5.07-1.428 5.07-5.07 0-3.379-1.43-5.199-5.07-5.07-3.251-.13-4.941 1.431-4.941 5.07 0 2.862 1.56 5.07 4.94 5.07zm-.04-1.558c2.144 0 3.162-.989 3.162-3.508 0-2.337-.892-3.596-3.161-3.508-2.026-.09-3.08.99-3.08 3.508 0 1.98.973 3.508 3.08 3.508z"
                  clipRule="evenodd"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d_116_18"
                  width="59.431"
                  height="12.824"
                  x="0.907"
                  y="0.55"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="0.669"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix values="0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0.5 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_116_18"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_116_18"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <span className="flex font-gilroyreal2 gap-8  text-white text-[22.5px] max-[1080px]:text-[11.8px] max-[1080px]:gap-4 max-[500px]:hidden">
          <Link href={"/"} className="hover:text-slate-300">
            About
          </Link>
          <Link href={"/"} className="hover:text-slate-300">
            Testimonials
          </Link>
          <Link href={"/contactus"} className="hover:text-slate-300">
            ContactUs
          </Link>
          <Link href={"/"} className="hover:text-slate-300">
            Trainings
          </Link>
        </span>
        <MobileMenu />
      </div>
      <h1 className="text-white font-gilroyreal2 text-[125px] leading-[90%] p-[94px] pb-0 mt-[100px] z-50  max-[1080px]:p-0 max-[1080px]:text-[66.304px] max-[1080px]:mt-28 max-[1080px]:ml-[49px] max-[600px]:text-[38.62px] max-[600px]:ml-[12px] max-[600px]:w-[255px]">
        discover <span className="outline-heading">the</span> <br></br>
        athelete <br></br>
        <span className="outline-heading ">within</span>
      </h1>
      {/* desktop - tablet */}
      <span className="flex flex-col w-full items-end  text-[18px] max-[1080px]:mr-0 max-[600px]:items-start max-[600px]:ml-[12px] max-[600px]:hidden">
        <p className="text-white w-[500px] z-50 max-[1080px]:text-[9.55px] max-[1080px]:w-[248px] max-[1080px]:mr-12 max-[600px]:text-[12px] max-[600px]:w-[202px] max-[600px]:mt-[28px]">
          Progress is personal. Join the journey into new realms of movement.
        </p>

        <div className="mr-80 mt-8 relative max-[1080px]:mr-[212px] max-[600px]:ml-auto max-[600px]:w-fit max-[600px]:mr-12">
          <Image
            content=""
            src={RoundRotateImage}
            className="w-[175px] spin max-[1080px]:w-[92.8px]"
            alt=""
          />
          <div className="absolute left-[5px] right-0 top-[2px] bottom-0 flex justify-center items-center jiggle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              fill="none"
              viewBox="0 0 43 42"
              className="max-[1080px]:w-[25px]"
            >
              <path
                fill="#D1D2D4"
                d="M42.81 3.4A2.637 2.637 0 0040.218.72L16.487.341a2.637 2.637 0 10-.084 5.273l21.093.337-.337 21.093a2.637 2.637 0 105.273.084l.379-23.729zM4.295 41.78L42.009 5.25l-3.67-3.788L.626 37.992l3.669 3.788z"
              ></path>
            </svg>
          </div>
        </div>
      </span>
      {/* mobile */}
      <span className="flex-col w-full px-4 hidden max-[600px]:flex">
        <p className="text-white w-[500px] max-w-[200px] z-50 max-[1080px]:text-[9.55px] max-[1080px]:w-[248px] max-[1080px]:mr-12 max-[600px]:text-[12px] max-[600px]:w-[202px] max-[600px]:mt-[28px]">
          Progress is personal. Join the journey into new realms of movement.
        </p>

        <div className="relative mt-[32px] ml-auto">
          <Image
            content=""
            src={RoundRotateImage}
            className="w-[175px] spin max-[1080px]:w-[92.8px]"
            alt=""
          />
          <div className="jiggle absolute left-[5px] right-0 top-[2px] bottom-0 flex justify-center items-center jiggle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              fill="none"
              viewBox="0 0 43 42"
              className="max-[1080px]:w-[25px]"
            >
              <path
                fill="#D1D2D4"
                d="M42.81 3.4A2.637 2.637 0 0040.218.72L16.487.341a2.637 2.637 0 10-.084 5.273l21.093.337-.337 21.093a2.637 2.637 0 105.273.084l.379-23.729zM4.295 41.78L42.009 5.25l-3.67-3.788L.626 37.992l3.669 3.788z"
              ></path>
            </svg>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Hero;
