import Spline from "@splinetool/react-spline";
import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function ContactSection() {

//   const scrollRef = useRef();
//   const mainRef = useRef();

//   gsap.registerPlugin(ScrollTrigger);

//   useGSAP(() => {
//     gsap.from(scrollRef.current, {
//       y: 0,
//     });

//     gsap.to(scrollRef.current, {
//       y: -3000,
//       opacity: 1,
//       delay: 3,
//       scrollTrigger: {
//         trigger: mainRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: 1,
//         pin: true,
//         markers: true,
//       },
//     });
//   });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully. Thanks for reaching out!");
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div>
      <div className="flex">
        <div  className="w-1/2 h-screen">
          <Spline scene="https://prod.spline.design/TmbloYanDME-iPn9/scene.splinecode" />
        </div>
        <div className="w-1/2 h-screen justify-center align-middle content-center bg-sky-200">
          <div className="contact-form">
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto mt-8 space-y-6 rounded-3xl bg-gray-900/70 p-8 backdrop-filter backdrop-blur-lg"
            >
              <div>
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full mt-2 text-white border-none shadow-none focus:border-futuristic-blue focus:ring-futuristic-blue disabled:opacity-50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full mt-2 text-white border-none shadow-none focus:border-futuristic-blue focus:ring-futuristic-blue disabled:opacity-50 h-8"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="block w-full mt-2 text-white border-none shadow-none focus:border-futuristic-blue focus:ring-futuristic-blue disabled:opacity-50 h-8"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full mt-2 text-white border-none shadow-none focus:border-futuristic-blue focus:ring-futuristic-blue disabled:opacity-50"
                  required
                />
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="bg-futuristic-blue hover:bg-futuristic-blue/90 text-white font-bold py-3 px-4 rounded-3xl"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;