"use client";
import { ChevronRight, X } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function WaitListForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_rh3y91h",
        "template_sbkt0ke",
        { name, email, phone },
        "LikExMP12YH3PohBI"
      );

      setName("");
      setEmail("");
      setPhone("");
      setShowModal(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mt-14 w-full "
      >
        <div className="flex justify-center text-center flex-col gap-5 w-[85%] lg:w-[27%]">
          <label htmlFor="name" className="bitter">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-4 rounded-xl text-black"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-5 my-5  text-center w-[85%] lg:w-[27%] justify-center">
          <label htmlFor="email" className="bitter">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-4 rounded-xl text-black"
            id="email"
            value={email}
            placeholder="rentville@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-5 my-5 w-[85%] lg:w-[27%] text-center justify-center">
          <label htmlFor="phone" className="bitter">
            Phone (Optional)
          </label>
          <input
            type="tel"
            className="w-full px-3 py-4 rounded-xl text-black"
            id="phone"
            value={phone}
            placeholder="08012345678"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {/* Button waitlist */}

        <button
          type="submit"
          className="text-lg border-[3px] my-10  px-7 gap-1 py-3 rounded-[2rem]  hover:border-white font-semibold items-center border-tertiary text-white flex"
        >
          Join Waitlist
          <ChevronRight className="w-4" />
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-black p-8 rounded-xl max-w-sm w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Success!</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <p>
              You&apos;ve been successfully added to the waitlist. We&apos;ll be
              in touch soon!
            </p>
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default WaitListForm;

// -notYZnFu9USvttKPvk6Y
