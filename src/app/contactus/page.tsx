import BecomeAPartOf from "@/components/ContactUs/BecomeAPartOf";
import LetsConnect from "@/components/ContactUs/LetsConnect";
import Nav from "@/components/ContactUs/Nav";
import Faq from "@/components/ContactUs/Faq";
import React from "react";
import { BottomComponent } from "@/components/ComingSoon";

const page = () => {
  return (
    <>
      <Nav />
      <BecomeAPartOf />
      <LetsConnect />
      <Faq />
      <BottomComponent />
    </>
  );
};

export default page;
