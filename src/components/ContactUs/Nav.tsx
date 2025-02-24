import Link from "next/link";
import React from "react";
import MobileMenu from "../NavComponents/MobileMenu";

const Nav = () => {
  return (
    <>
      <div className="w-full h-[143px] max-custom:h-[75.87px] max-mid:h-[123.92px]">
        {/* inner bar */}
        <div className="w-full h-full flex justify-between px-[94px] py-[40px] max-custom:px-[49.87px] max-custom:py-[21.22px] max-mid:py-[48px] max-mid:px-[20px] max-mid:justify-start">
          {/* logo */}
          <div className="w-[218.48px] h-[63px] flex justify-between items-center max-custom:w-[116.11px] max-custom:h-[33.42px] max-mid:w-[97px] max-mid:h-[27.92px]">
            {/* symbol */}
            <div
              className="w-[70.64px] h-full max-custom:w-[37.48px] max-custom:h-[33.43px]
            max-mid:w-[31.31px] max-mid:h-[27.92px] "
            >
              <svg
                // width={77}
                // height={69}
                viewBox="0 0 77 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[77px] h-[69px] max-custom:w-[37.48px] max-custom:h-[33.43px]  max-mid:w-[31.31px] max-mid:h-[27.92px]"
              >
                <g filter="url(#filter0_d_48_252)">
                  <path
                    d="M72.8843 37.3282L68.5165 44.9973L51.5913 15.9644C51.5913 15.9644 50.6828 14.3482 50.3189 14.1384C49.6409 13.7478 48.6795 13.5906 48.6795 13.5906H27.5685C27.5685 13.5906 26.7827 13.8118 26.296 14.1384C25.7875 14.4796 25.2026 15.234 25.2026 15.234L15.193 32.5807C15.193 32.5807 14.6485 33.5937 14.6485 34.4067C14.6485 35.5023 15.7405 37.3283 15.7405 37.3283L24.4746 52.6664C24.4746 52.6664 25.6647 54.4658 26.66 55.0402C27.4608 55.5024 29.3898 55.4053 29.3898 55.4053H44.4937C44.4937 55.4053 46.2062 55.5761 47.225 53.9446C48.2061 52.3735 47.5875 51.023 47.5875 51.023L45.4036 46.8233C45.4036 46.8233 44.8591 45.9103 43.9492 45.5451C43.0938 45.2018 41.9458 45.1799 41.9458 45.1799H35.3941C35.3941 45.1799 33.8589 45.1129 32.8477 44.4495C32.0213 43.9074 31.0263 42.9887 31.0263 42.9887L27.3865 36.7804C27.3865 36.7804 27.1678 35.5792 27.2059 34.5893C27.2417 33.6602 27.3865 32.5807 27.3865 32.5807L30.6638 26.9202C30.6638 26.9202 31.4372 25.642 32.1197 25.0942C33.0297 24.3639 33.7576 24.1813 34.8481 23.9986C35.2215 23.9361 41.0373 23.908 41.4013 23.9986L41.4072 24.0001C42.4281 24.2545 42.8007 24.3473 43.9492 24.9117C45.3764 25.613 46.3136 27.468 46.3136 27.468L59.9644 51.2056C59.9644 51.2056 62.202 57.1974 58.6905 61.9789C56.1426 65.4482 51.5913 65.996 51.5913 65.996H24.4746C24.4746 65.996 22.0623 66.0988 20.6542 65.2656C19.4146 64.5321 18.2869 62.8918 18.2869 62.8918L3.90956 37.876C3.90956 37.876 2.964 35.9718 3.00106 34.4067C3.03667 32.9029 3.90956 31.1199 3.90956 31.1199L17.5589 7.56493C17.5589 7.56493 18.9045 5.19117 19.9248 4.46078C21.146 3.58666 23.7466 3 23.7466 3L53.0473 3.18257C53.0473 3.18257 55.5951 3.54777 56.6871 4.46075C57.4151 5.06941 57.961 5.92153 57.961 5.92153L71.6104 29.6592C71.6104 29.6592 73.4824 33.0509 73.6123 34.2241C73.7943 35.8675 72.8843 37.3282 72.8843 37.3282Z"
                    fill="#3A4B5B"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_48_252"
                    x={0.136364}
                    y={0.136364}
                    width={76.3635}
                    height={68.7273}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation={1.43182} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_48_252"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_48_252"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* text */}
            <div className="w-[135px] h-[29px] max-custom:w-[74px] max-custom:h-[19px] max-mid:w-[62px] max-mid:h-[18px]">
              <svg
                // width={135}
                // height={29}
                viewBox="0 0 135 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[135px] h-[29px] max-custom:w-[74px] max-custom:h-[19px] max-mid:w-[62px] max-mid:h-[18px] "
              >
                <g filter="url(#filter0_d_48_253)">
                  <path
                    d="M8.19616 25.6585H3.79639L13.4759 3.073H18.169L28.1418 25.6585H23.1554L20.8088 19.4988H13.1826L14.6492 15.6857H19.3423L15.5291 7.47278L8.19616 25.6585Z"
                    fill="#3A4B5B"
                  />
                  <path
                    d="M38.9946 25.6585H34.5948V6.73503H28.1418V3.073H45.4476V6.73503H38.9946V25.6585Z"
                    fill="#3A4B5B"
                  />
                  <path
                    d="M52.1939 25.6585H47.7941V3.073H52.1939V12.1659H63.0467V3.073H67.4464V25.6585H63.0467V15.979H52.1939V25.6585Z"
                    fill="#3A4B5B"
                  />
                  <path
                    d="M72.1395 25.6585V3.073H76.5393V21.8454H85.3389V25.6585H72.1395Z"
                    fill="#3A4B5B"
                  />
                  <path
                    d="M131.097 3.95296V7.76609C131.097 7.76609 128.652 6.72761 126.99 6.59282C126.305 6.53728 124.644 6.59282 124.644 6.59282H122.004C122.004 6.59282 120.656 6.73248 120.244 6.88614C119.618 7.11943 119.286 7.19009 118.777 7.76609C118.152 8.47416 117.864 9.13452 117.897 10.1126C117.922 10.8367 118.265 11.3603 118.777 11.8726C119.289 12.3848 120.244 12.4592 120.244 12.4592H126.697C126.697 12.4592 129.129 13.1034 130.217 14.2191C131.004 15.027 131.286 15.3705 131.683 16.2723C131.976 16.9383 131.802 20.8637 131.683 21.2587C131.419 22.1387 130.562 23.1764 129.337 24.1919C127.71 25.5398 124.644 25.6585 124.644 25.6585C124.644 25.6585 121.66 25.8267 119.95 25.6585C117.848 25.4517 114.671 24.7786 114.671 24.7786V20.9654C114.671 20.9654 117.848 21.9319 119.95 22.1387C121.66 22.3069 124.057 22.1387 124.35 22.1387C124.511 22.1387 125.057 22.057 125.523 21.8454C126.085 21.5905 126.271 21.4801 126.697 20.9654C127.158 20.4072 127.486 19.7293 127.577 19.2055C127.655 18.7541 127.577 18.0322 127.577 18.0322C127.577 18.0322 127.426 17.2951 126.99 16.859L126.951 16.8203C126.529 16.3969 126.111 15.979 125.523 15.979H119.07C119.07 15.979 116.628 15.4815 115.551 14.5124C114.674 13.7237 114.084 11.8726 114.084 11.8726C114.084 11.8726 113.805 10.6292 113.791 9.81932C113.775 8.89595 113.969 7.83208 114.084 7.47278C114.289 6.83551 115.196 5.48985 116.431 4.53959C117.866 3.43495 120.83 3.073 120.83 3.073H126.11C126.11 3.073 128.107 3.06835 129.337 3.36632C130.041 3.53694 131.097 3.95296 131.097 3.95296Z"
                    fill="#3A4B5B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M99.7149 25.9479C107.472 25.9479 111.154 22.7251 111.154 14.5085C111.154 6.88593 107.928 2.77947 99.7149 3.0691C92.382 2.77578 88.5688 6.29929 88.5688 14.5085C88.5688 20.9652 92.0887 25.9479 99.7149 25.9479ZM99.6281 22.4316C104.463 22.4316 106.759 20.2021 106.759 14.5178C106.759 9.24454 104.748 6.4037 99.6281 6.60407C95.0569 6.40115 92.6799 8.83871 92.6799 14.5178C92.6799 18.9846 94.874 22.4316 99.6281 22.4316Z"
                    fill="#3A4B5B"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_48_253"
                    x={0.778047}
                    y={0.033906}
                    width={134.084}
                    height={28.9324}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation={1.50917} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0 0.916667 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_48_253"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_48_253"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* links */}
          <div className="w-[512.29px] h-full flex items-center justify-around  font-gilroyreal2 font-normal text-[22.39px] text-[#3A4B5B] max-custom:w-[272.56px] max-custom:text-[11.88px] max-mid:hidden">
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Testimonials</Link>
            <Link href={"/"}>Contact Us</Link>
            <Link href={"/"}>Trainings</Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default Nav;
