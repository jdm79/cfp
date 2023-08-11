import { useAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal(props) {
  const { setOpenModal } = props;
  const [_document, set_document] = useState(null);
  const { logout } = useAuth();

  useEffect(() => {
    set_document(document);
  }, []);

  if (!_document) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-white text-slate-900 flex flex-col text-lg sm:text-xl'>
      <div className='flex items-center justify-between border-b border-solid border-slate-900 p-4'>
        <h1 className='font-extrabold text-2xl sm:text-5xl select-none'>
          Menu
        </h1>
        <i
          onClick={() => setOpenModal(false)}
          className='fa-solid fa-xmark duration-300 hover:rotate-90 cursor-pointer text-lg sm:text-3xl'
        ></i>
      </div>
      <div className='p-4 flex flex-col gap-3'>
        <h2
          className='select-none duration-300 hover:pl-2 cursor-pointer'
          onClick={() => {
            logout();
            setOpenModal(false);
          }}
        >
          Logout
        </h2>
      </div>
    </div>,
    _document.getElementById("portal")
  );
}
