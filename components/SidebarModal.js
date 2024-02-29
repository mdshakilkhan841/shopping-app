"use client";
import React, { Children, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function SidebarModal({
  buttonText,
  buttonClass,
  modalTitle,
  position,
  children,
  footer,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className={buttonClass}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonText}
      </button>
      {showModal ? (
        <>
          <div
            className={`flex ${position} overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <div className="relative w-96">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full h-screen bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center align-middle justify-between px-3 h-12 border-b border-solid border-blueGray-200">
                  <h6 className="text-xl font-semibold">{modalTitle}</h6>
                  <IoCloseSharp
                    className="text-3xl cursor-pointer"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                {/*body*/}
                <div className="relative p-3 flex-auto overflow-y-auto bg-gray-200">
                  {children}
                </div>
                {/*footer*/}
                {footer && (
                  <div className="flex items-center p-3 border-t border-solid border-blueGray-200">
                    <button
                      className="w-full uppercase bg-blue-500 border-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 border rounded shadow"
                      type="button"
                    >
                      Register
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
