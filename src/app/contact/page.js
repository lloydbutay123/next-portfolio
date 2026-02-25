"use client";
import { resetStatus, sendContactMessage } from "@/store/contactSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCheck, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "motion/react";

export default function ContactPage() {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactMessage({ name, subject, company, email, message }));
  };

  useEffect(() => {
    if (success) {
      (setName(""), setSubject(""));
      setCompany("");
      setEmail("");
      setMessage("");

      const timer = setTimeout(() => {
        dispatch(resetStatus());
      }, 3000);
      return () => clearTimeout();
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(resetStatus());
    }
  }, [error, dispatch]);

  return (
    <section className="min-h-dvh lg:h-dvh bg-white pt-[70px] lg:pt-[80px]">
      <div className="px-4 pt-12 pb-32 md:p-[42px] lg:py-24 h-full">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-20 h-full">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between h-full">
            {/* Top */}
            <div className="flex flex-col gap-2">
              <p className="text-4xl md:text-[78.4px] font-bold text-[#090909]">
                Let&apos;s collaborate
              </p>
              <p className="text-[#888888] text-xs font-ibmplexmono cursor-pointer">
                johnlloydbutay123@gmail.com
              </p>
            </div>

            {/* Bottom */}
            <div className="flex justify-between mt-16 lg:mt-0">
              <div className="flex flex-col gap-2">
                <p className="font-extrabold text-[#090909] text-xs">Find us</p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-[#888888] font-ibmplexmono text-sm"
                  >
                    FB
                  </Link>
                  <Link
                    href="#"
                    className="text-[#888888] font-ibmplexmono text-sm"
                  >
                    IG
                  </Link>
                  <Link
                    href="#"
                    className="text-[#888888] font-ibmplexmono text-sm"
                  >
                    TW
                  </Link>
                  <Link
                    href="#"
                    className="text-[#888888] font-ibmplexmono text-sm"
                  >
                    LN
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-extrabold text-[#090909] text-xs">
                  Manila, Philippines
                </p>
                <p className="font-ibmplexmono text-[#888888] text-sm">
                  09956397484
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between gap-10"
          >
            <p className="text-[#090909] text-2xl font-bold">Say hello</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Choose subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="uppercase font-ibmplexmono font-extrabold text-[#090909] text-xs">
                  Message
                </label>
                <textarea
                  type="text"
                  placeholder="Start typing here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="text-[#090909] text-sm placeholder:text-[#888888] border-b border-[#ddd] focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-end gap-6"
            >
              <motion.div
                layout
                initial={false}
                animate={{
                  width: loading || success ? 60 : 120,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="h-[56px] flex items-center justify-center rounded-full bg-[#090909] overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {!loading && !success && (
                    <motion.div
                      key="arrow"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}
                      transition={{ duration: 0.2 }}
                      className="text-white"
                    >
                      Submit
                    </motion.div>
                  )}

                  {loading && (
                    <motion.div
                      key="spinner"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1, rotate: 360 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        rotate: {
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        },
                      }}
                    >
                      <FaSpinner color="white" size={22} />
                    </motion.div>
                  )}

                  {success && (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.2 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                    >
                      <FaCheck color="#dfb44b" size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
