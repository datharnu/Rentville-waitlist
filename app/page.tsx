import Image from "next/image";
import Logo from "../public/RVMARKWC.svg";
import young from "../public/youngmale.jpg";
import couple from "../public/couple.jpg";
import handsome from "../public/study.jpg";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  TicketIcon,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import FaqComponent from "./components/FaqComponents";
import WaitListForm from "./components/FormComponent";
export default function Home() {
  return (
    <section
      className="bg-bgMain bg-cover min-h-screen bg-no-repeat"
      style={{
        backgroundImage: `url(data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3…arent%22%20opacity%3D%221%22%20%2F%3E%3C%2Fsvg%3E), linear-gradient(146deg, rgba(255, 239, 219, 0.30) 0%, rgba(166, 223, 255, 0.141) 100%), url("/backgroundImg.jpg")`,
        backgroundSize: "512px, cover, cover",
        backgroundPosition: "center, 0% 0%, center",
        backgroundRepeat: "repeat, repeat, repeat",
        backgroundColor: "#FCFCFC",
        backdropFilter: "blur(8px)", // Blur effect
        WebkitBackdropFilter: "blur(8px)", // For Safari
        position: "relative", // Ensure z-index works correctly
      }}
    >
      <div className="backdrop-blur-md fixed top-0 left-0 w-full h-screen -z-10"></div>
      <div className="background-with-noise h-[80vh] border-b-8 border-tertiary">
        <div className="flex flex-col h-full gap-5 lg:gap-10 items-center justify-center">
          {/* logo and title */}
          <Image
            src={Logo}
            alt="Logo"
            width={40}
            height={16}
            className="lg:w-[3.2rem] "
          />
          <div className=" text-center ">
            <h1 className="bitter text-3xl lg:text-[65px] text-white">
              RentVille
            </h1>
          </div>
          <hr className="w-16 mx-auto border-2 border-tertiary" />
          <div className="lg:px-[30rem]">
            <p className="font-thin text-center text-sm text-white mx-5">
              Tired of the hassle of finding a place near Lagos State
              University? RentVille makes house hunting stress-free. Join our
              waitlist now for a hassle-free experience in student housing.
            </p>
          </div>
          {/* Button waitlist */}

          <a href="#about">
            <button className="text-sm border-[3px]  px-7 gap-1 py-3 rounded-[2rem]  hover:border-white font-semibold items-center border-tertiary text-white flex">
              Join Waitlist
              <ChevronRight className="w-4" />
            </button>
          </a>
        </div>
      </div>
      {/* Image section with the dscription */}
      <article className=" border-tertiary border-b-8 lg:border-0" id="about">
        <div className=" lg:flex w-full lg:mt-32 mt-10 lg:w-[80%] mx-auto">
          <div className=" lg:w-1/2 ">
            <Image
              src={young}
              alt="image"
              width={600}
              height={800}
              className=" w-full h-full"
            />
          </div>
          <div className="bg-white p-12 px-20  place-content-center text-center space-y-5 lg:w-1/2 ">
            <h1 className="bitter text-3xl lg:text-[45px] leading-relaxed text-[#59606E]">
              Comprehensive Property Database
            </h1>
            <hr className="w-16 mx-auto border-2 border-tertiary" />
            <p className="  text-center text-[16px] text-text leading-8 lg:mx-5">
              Find the perfect home by searching based on location, price, and
              amenities. Our extensive database ensures you have plenty of
              options to choose from.
            </p>
          </div>
        </div>
        {/* second image */}
        <div className=" flex flex-col-reverse lg:flex-row w-full  lg:w-[80%] mx-auto">
          <div className="bg-white p-12 px-20  place-content-center text-center space-y-5 lg:w-1/2 ">
            <h1 className="bitter text-3xl lg:text-[45px] leading-relaxed text-[#59606E]">
              Verified Agents
            </h1>
            <hr className="w-16 mx-auto border-2 border-tertiary" />
            <p className="  text-center text-[16px] text-text leading-8 lg:mx-5">
              Say goodbye to rental scams. All our agents undergo thorough
              background checks, so you can rent with confidence.
            </p>
          </div>

          <div className=" lg:w-1/2 ">
            <Image
              src={couple}
              alt="image"
              width={600}
              height={800}
              className=" w-full h-full"
            />
          </div>
        </div>
        {/* third image */}
        <div className=" lg:flex w-full  lg:w-[80%] mx-auto">
          <div className=" lg:w-1/2 ">
            <Image
              src={handsome}
              alt="image"
              width={600}
              height={800}
              className=" w-full h-full"
            />
          </div>
          <div className="bg-white p-12 px-20  place-content-center text-center space-y-5 lg:w-1/2 ">
            <h1 className="bitter text-3xl lg:text-[45px] leading-relaxed text-[#59606E]">
              Secure Transactions
            </h1>
            <hr className="w-16 mx-auto border-2 border-tertiary" />
            <p className="  text-center text-[16px] text-text leading-8 lg:mx-5">
              With our integrated payment system, you can securely pay deposits
              and rent directly through the app. Your personal and financial
              information is protected with industry-standard encryption.
            </p>
          </div>
        </div>
      </article>
      {/* FAQ */}
      <FaqComponent />
      <article className="bg-[#23331DED] border-tertiary border-t-8 text-white py-16 lg:py-10">
        <div className="   place-content-center text-center space-y-5 mx-10 ">
          <h1 className="bitter text-3xl lg:text-[45px] leading-relaxed ">
            Get Started For Free!
          </h1>
          <hr className="w-16 mx-auto border-2 border-tertiary" />
          <p className="  text-center text-sm font-extralight leading-8">
            With RentVille, we help property owners showcase their amazing
            properties to numerous vetted
            <br />
            tenants while saving the tenants from numerous unexplainable fees.
          </p>
        </div>
        <WaitListForm />
      </article>
      <footer className="w-full bg-primary  py-24">
        <div className=" lg:flex-row lg:flex justify-between lg:w-[80%] lg:mx-auto mx-20  flex flex-col-reverse place-items-center ">
          <div className="text-[#FFFFFF66] lg:w-1/2 space-y-5 lg:space-y-0 text-center lg:text-left mt-5 font-light text-sm ">
            <h1>Contact Us</h1>
            <p className="mb-4">
              Have any questions or need more information? Feel free to reach
              out to us at{" "}
              <span className="text-tertiary font-thin">
                rentvilleinfo@gmail.com
              </span>{" "}
              call <span className="text-tertiary font-thin">09070004086</span>{" "}
              or follow us on social media for the latest updates.
            </p>
            <p>©All rights reserved. 2024 B-10 Technologies</p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=61561726746186"
              className=""
            >
              <Facebook className="text-white hover:text-tertiary" />
            </a>
            <a href="https://x.com/Rentville_?s=08">
              <Twitter className="text-white hover:text-tertiary" />
            </a>
            <a href="https://www.instagram.com/rentville_?igsh=aGU2Nmx0aHlmMnJ3">
              <Instagram className="text-white hover:text-tertiary" />
            </a>
            <a href="https://www.linkedin.com/in/rentville-ng-6a738b317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Linkedin className="text-white hover:text-tertiary" />
            </a>
          </div>
        </div>
      </footer>
      {/* Form */}
    </section>
  );
}
