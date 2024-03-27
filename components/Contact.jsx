"use client";

import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Get in touch.";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pt-12" id="contact">
      {/* FORM CONTAINER */}
      <form
        onSubmit={sendEmail}
        ref={form}
        className="bg-white rounded-t-xl flex flex-col gap-8 py-12 px-4 lg:px-24"
      >
        <div className="self-center">
          <h2 className="h2 self-center">
            <span className="font-light">Contact </span>
            Me
          </h2>
        </div>

        <input
          className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          name="user_subject"
          placeholder="Your subject"
        />
        <span>Hello,</span>
        <textarea
          rows={6}
          className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          name="user_message"
          placeholder="Write your message here..."
        />
        <span>My mail address is:</span>
        <input
          name="user_email"
          type="text"
          className="bg-transparent border-b-2 border-b-black outline-none"
          placeholder="Your email address"
        />
        <span>My name is:</span>
        <input
          name="user_email"
          type="text"
          className="bg-transparent border-b-2 border-b-black outline-none"
          placeholder="Your name"
        />
        <button className="bg-[#F6B093] hover:opacity-90 rounded font-semibold p-4">
          Send
        </button>
        {success && (
          <span className="text-green-600 font-semibold">
            Your message has been sent successfully!
          </span>
        )}
        {error && (
          <span className="text-red-600 font-semibold">
            Something went wrong!
          </span>
        )}
      </form>
    </div>
  );
};

export default Contact;
