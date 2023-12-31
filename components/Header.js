import React, { useState, useEffect } from "react";
import Modal from "./Modal";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className='sticky top-0 w-full left-0 flex bg-inherit border-b border-solid border-white items-center justify-between p-4'>
        <h1 className='text-xl sm:text-2xl select-none'>CityJSConf</h1>
        <i
          onClick={() => setOpenModal(true)}
          className='fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer'
        ></i>
      </div>
    </>
  );
}
