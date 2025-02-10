"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactUs, setIsContactUs] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  useEffect(() => {
    setIsContactUs(pathname === "/contactus");
  }, [pathname]);

  return (
    <div
      className={` z-50 bar:hidden absolute  ${
        isContactUs ? "top-[35.5px] -translate-x-2" : "top-[27px]"
      } right-0`}
    >
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative z-50 p-4 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="flex flex-col justify-between w-6 h-5 ">
          <span
            className={`block h-0.5 w-full ${
              isContactUs ? "bg-[#3A4B5B]" : "bg-white"
            }  transform transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full ${
              isContactUs ? "bg-[#3A4B5B]" : "bg-white"
            }  transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full  ${
              isContactUs ? "bg-[#3A4B5B]" : "bg-white"
            }  transform transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Menu Content */}
      <nav
        className={`absolute top-full right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out origin-top-right z-50 ${
          isContactUs ? "text-[#3A4B5B]" : "text-black"
        }
          md:w-64 w-screen
          ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
      >
        <div className="pt-[50px] pb-[44px] font-gilroyreal2 text-center ">
          <ul>
            <li>
              <Link
                href="/"
                className=" block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors "
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors"
                onClick={toggleMenu}
              >
                Testimonials{" "}
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors"
                onClick={toggleMenu}
              >
                ContactUs
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block px-4 py-3 text-sm hover:text-[#E43D12] transition-colors"
                onClick={toggleMenu}
              >
                Trainings
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
