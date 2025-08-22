"use client";

import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Modal from "./Modal";

export default function ModalButton() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <button className={`z-10 h-[72px] w-[72px] bg-[#888888] rounded-full ${ isModalOpen ? 'p-[12px] ' : 'p-[8px] ' }`} onClick={() => setIsModalOpen(prev => !prev) }>
                <div className={`flex justify-center items-center rounded-full w-full h-full ${ isModalOpen ? 'bg-[#dfb44b]' : 'bg-white' } `}>
                    {
                        isModalOpen? (
                            <IoClose className="w-[24px] h-[24px]" />
                        ) : (
                            <HiMenuAlt4 className="w-[24px] h-[24px]" color="#090909" />
                        )
                    }
                </div>
            </button>  
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}