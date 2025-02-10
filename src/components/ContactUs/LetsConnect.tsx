"use client";

import React, { useState } from "react";

const LetsConnect = () => {
  const [index, setIndex] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("Personal training"); // Default service
  const [submitMessage, setSubmitMessage] = useState("");

  const toggleIndex = (i: number) => {
    setIndex(() => {
      const newArray = [false, false, false, false, false, false, false];
      newArray[i] = !newArray[i];
      let selectedService = "";
      switch (i) {
        case 0:
          selectedService = "Personal training";
          break;
        case 1:
          selectedService = "Group Classes";
          break;
        case 2:
          selectedService = "Remote Coaching";
          break;
        case 3:
          selectedService = "Nutrition";
          break;
        case 4:
          selectedService = "Athlete Based";
          break;
        case 5:
          selectedService = "For her";
          break;
        case 6:
          selectedService = "Other Query";
          break;
        default:
          selectedService = "Personal training"; // Default if no match
      }
      setService(selectedService);
      return newArray;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitMessage("Submitting...");

    const formData = {
      name: name,
      phone: phone,
      email: email,
      service: service,
      message: message,
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Form submitted successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setIndex([true, false, false, false, false, false, false]); //reset service to default
        setService("Personal training");

        setTimeout(() => {
          setSubmitMessage(""); // Clear success message after a delay
        }, 3000); // Clear message after 3 seconds
      } else {
        setSubmitMessage("Error submitting form. Please try again.");
        setTimeout(() => {
          setSubmitMessage(""); // Clear error message after a delay
        }, 3000); // Clear message after 3 seconds
      }
    } catch (error) {
      console.error("Error!", error);
      setSubmitMessage("Error submitting form. Please try again.");
      setTimeout(() => {
        setSubmitMessage(""); // Clear error message after a delay
      }, 3000); // Clear message after 3 seconds
    }
  };

  return (
    <>
      <div className="w-full h-[831px] flex items-center py-[80px] justify-center max-custom:h-[450.18px] max-custom:py-[43.3px] max-mid:h-[805.29px] max-mid:py-[40px]">
        {/* Box */}
        <div className="w-[1245px] h-[671px] flex flex-col justify-between items-center max-custom:w-[673.84px] max-custom:h-[363.58px] max-mid:w-[280px] max-mid:h-[725.29px]">
          {/* letsConnect */}
          <div className="w-full h-[75px] flex justify-start max-custom:h-[41px] max-mid:h-[28px]">
            <p className="font-gilroyreal2 font-normal text-[74.95px] leading-[74.95px] text-[#3A4B5B] max-custom:text-[40.56px] max-custom:leading-[40.56px] max-mid:text-[24px]  ">
              let&apos;s connect
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-[1245px] h-[518px] flex flex-row justify-between max-custom:w-[673.84px] max-custom:h-[280.36px] max-mid:w-[280px] max-mid:h-[665.29px] max-mid:flex-col"
          >
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
                <div
                  className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px] "
                  onClick={() => toggleIndex(0)}
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="personal"
                    value={"personal"}
                    name="service"
                    checked={index[0]}
                    onChange={() => {}} // Necessary for controlled component
                  />
                  <span className="checker flex justify-center items-center hover:cursor-pointer max-mid:min-w-[15.36px] custom:min-w-[25.45px] custom:min-h-[25.45px]">
                    <span
                      className={`dot ${
                        index[0] ? null : "hidden"
                      } custom:min-w-[11.33px] custom:min-h-[11.33px]`}
                    />
                  </span>
                  <label htmlFor="personal">Personal training</label>
                </div>
                <div
                  onClick={() => toggleIndex(1)}
                  className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="groupClasses"
                    value={"groupClasses"}
                    name="service"
                    checked={index[1]}
                    onChange={() => {}} // Necessary for controlled component
                  />
                  <span className="checker flex justify-center items-center hover:cursor-pointer max-mid:min-w-[15.36px] custom:min-w-[25.45px] custom:min-h-[25.45px]">
                    <span
                      className={`dot ${
                        index[1] ? null : "hidden"
                      } custom:min-w-[11.33px] custom:min-h-[11.33px]`}
                    />
                  </span>
                  <label htmlFor="groupClasses">Group Classes</label>
                </div>
                <div
                  onClick={() => toggleIndex(2)}
                  className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="remoteCoaching"
                    value={"remoteCoaching"}
                    name="service"
                    checked={index[2]}
                    onChange={() => {}} // Necessary for controlled component
                  />
                  <span className="checker flex justify-center items-center hover:cursor-pointer max-mid:min-w-[15.36px] custom:min-w-[25.45px] custom:min-h-[25.45px]">
                    <span
                      className={`dot ${
                        index[2] ? null : "hidden"
                      } custom:min-w-[11.33px] custom:min-h-[11.33px]`}
                    />
                  </span>
                  <label htmlFor="remoteCoaching">Remote Coaching</label>
                </div>
                <div
                  onClick={() => toggleIndex(3)}
                  className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="nutrition"
                    value={"nutrition"}
                    name="service"
                    checked={index[3]}
                    onChange={() => {}} // Necessary for controlled component
                  />
                  <span className="checker flex justify-center items-center hover:cursor-pointer max-mid:min-w-[15.36px] custom:min-w-[25.45px] custom:min-h-[25.45px]">
                    <span
                      className={`dot ${
                        index[3] ? null : "hidden"
                      } custom:min-w-[11.33px] custom:min-h-[11.33px]`}
                    />
                  </span>
                  <label htmlFor="nutrition">Nutrition</label>
                </div>
                <div
                  onClick={() => toggleIndex(4)}
                  className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="athleteBased"
                    value={"athleteBased"}
                    name="service"
                    checked={index[4]}
                    onChange={() => {}} // Necessary for controlled component
                  />
                  <span className="checker flex justify-center items-center hover:cursor-pointer max-mid:min-w-[15.36px] custom:min-w-[25.45px] custom:min-h-[25.45px]">
                    <span
                      className={`dot ${
                        index[4] ? null : "hidden"
                      } custom:min-w-[11.33px] custom:min-h-[11.33px]`}
                    />
                  </span>
                  <label htmlFor="athleteBased">Athlete Based</label>
                </div>
                <div
                  onClick={() => toggleIndex(5)}
                  className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] max-mid:gap-[8px]"
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="forHer"
                    value={"forHer"}
                    name="service"
                    checked={index[5]}
                    onChange={() => {}} // Necessary for controlled component
                  />
                  <span className="checker flex justify-center items-center hover:cursor-pointer max-mid:min-w-[15.36px] custom:min-w-[25.45px] custom:min-h-[25.45px]">
                    <span
                      className={`dot ${
                        index[5] ? null : "hidden"
                      } custom:min-w-[11.33px] custom:min-h-[11.33px]`}
                    />
                  </span>
                  <label htmlFor="forHer">For her</label>
                </div>
                <div
                  onClick={() => toggleIndex(6)}
                  className="w-full flex justify-start gap-[28.8px] h-[41px] items-center max-custom:h-[23px] max-custom:gap-[15.3px] max-mid:h-[40px] max-mid:w-[115px] "
                >
                  <input
                    className="hidden"
                    type="radio"
                    id="otherQuery"
                    value={"otherQuery"}
                    name="service"
                    checked={index[6]}
                    onChange={() => {}} // Necessary for controlled component
                  />
                  <span className="checker flex justify-center items-center hover:cursor-pointer max-mid:min-w-[15.36px] custom:min-w-[25.45px] custom:min-h-[25.45px]">
                    <span
                      className={`dot ${
                        index[6] ? null : "hidden"
                      } custom:min-w-[11.33px] custom:min-h-[11.33px]`}
                    />
                  </span>
                  <label htmlFor="otherQuery">Other Query</label>
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
                <div
                  className="relative w-[588px] h-[49.34px] border-b-[1.4px] border-[#3A4B5B] text-start pt-[8px]
                max-custom:w-[318.62px] max-custom:h-[27.08px] max-custom:pt-[4.59px] max-mid:w-[280px] max-mid:h-[39.1px] max-mid:pt-[8.48px]"
                >
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full py-2 placeholder-gray-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="relative w-[588px] h-[49.34px] border-b-[1.4px] border-[#3A4B5B] text-start pt-[8px]
                max-custom:w-[318.62px] max-custom:h-[27.08px] max-custom:pt-[4.59px] max-mid:w-[280px] max-mid:h-[39.1px] max-mid:pt-[8.48px]"
                >
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full py-2 placeholder-gray-500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="relative w-[588px] h-[49.34px] border-b-[1.4px] border-[#3A4B5B] text-start pt-[8px]
                max-custom:w-[318.62px] max-custom:h-[27.08px] max-custom:pt-[4.59px] max-mid:w-[280px] max-mid:h-[39.1px] max-mid:pt-[8.48px]"
                >
                  <input
                    type="email"
                    id="email"
                    placeholder="E-mail address"
                    className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full py-2 placeholder-gray-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="relative w-[588px] h-[88.34px] border-b-[1.4px] border-[#3A4B5B] text-start pt-[8px]
                max-custom:w-[318.62px] max-custom:h-[47.08px] max-custom:pt-[4.59px] max-mid:w-[280px] max-mid:h-[70px] max-mid:pt-[8.48px]"
                >
                  <input
                    id="message"
                    placeholder="Message"
                    className="border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 w-full py-2 placeholder-gray-500 h-[88.34px] max-custom:h-[47.08px] max-mid:h-[70px] "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-[588px] h-[63px] border-[2.63px] border-[#3A4B5B] flex justify-center items-center text-[#3A4B5B]
               max-custom:w-[317.17px] max-custom:h-[34.1px] max-custom:border-[1.4px] max-mid:w-[280px] max-mid:h-[40px]
                 hover:bg-[#3A4B5B] hover:text-white"
              >
                <p className="font-gilroyreal2 font-normal text-[18.43px] leading-[21.75px] max-custom:text-[9.98px] max-custom:leading-[11.77px] max-mid:text-[12px]  hover:text-white ">
                  SEND MESSAGE
                </p>
              </button>
              {submitMessage && (
                <p className="mt-2 text-center">{submitMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LetsConnect;
