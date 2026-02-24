"use client";

import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "./Modal";

export default function ModalButton({ isOpen, onToggle }) {
  return (
    <>
      <button
        className={`group h-[72px] w-[72px] bg-[#888888] rounded-full transition-all duration-300 ease-in-out ${isOpen ? "p-[12px] " : "p-[8px] "}`}
        onClick={onToggle}
      >
        <div
          className={`flex justify-center items-center rounded-full w-full h-full transition-colors duration-300 ease-in-out ${isOpen ? "bg-[#dfb44b]" : "bg-white"} `}
        >
          {isOpen ? (
            <IoCloseOutline className="text-[#333] w-[24px] h-[24px] transition-transform duration-300 ease-in-out transform rotate-180" />
          ) : (
            <HiOutlineMenuAlt4 className="text-[#333] w-[24px] h-[24px] transition-transform duration-300 ease-in-out transform rotate-0" />
          )}
        </div>
      </button>
    </>
  );
}
