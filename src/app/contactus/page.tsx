import BecomeAPartOf from "@/components/ContactUs/BecomeAPartOf";
import LetsConnect from "@/components/ContactUs/LetsConnect";
import Nav from "@/components/ContactUs/Nav";
import Faq from "@/components/ContactUs/Faq";
import React from "react";

const page = () => {
  return (
    <>
      <Nav />
      <BecomeAPartOf />
      <LetsConnect />
      <Faq />
    </>
  );
};

export default page;
