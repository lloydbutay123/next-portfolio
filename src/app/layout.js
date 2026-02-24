"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import PageLoader from "@/components/common/PageLoader";
import { useState } from "react";
import Cursor from "@/components/common/Cursor";
import { Provider } from "react-redux";
import { store } from "@/store";
import ModalButton from "@/components/common/ModalButton";
import Modal from "@/components/common/Modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <PageLoader setIsLoading={setIsLoading} />
          {!isLoading && (
            <>
              <Cursor />
              <Header onOpenModal={() => setIsModalOpen(true)} />
              {children}

              <div className="fixed z-[100000] w-full flex justify-center bottom-[4%] lg:hidden">
                <ModalButton
                  isOpen={isModalOpen}
                  onToggle={() => setIsModalOpen((prev) => !prev)}
                />
              </div>
            </>
          )}

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </body>
      </html>
    </Provider>
  );
}
