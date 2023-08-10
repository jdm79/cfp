import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal(props) {
  const { setOpenModal } = props;
  const [_document, set_document] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);

  if (!_document) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-white text-slate-900 flex flex-col '>
      <div className='flex items-center justify-between border-b border-solid border-slate-900 p-4'>
        <h1>Menu</h1>
        <i
          onClick={() => setOpenModal(false)}
          className='fa-solid fa-xmark'
        ></i>
      </div>
      <div className='p-4 flex flex-col gap-3 '>
        <h2>Logout</h2>
      </div>
    </div>,
    _document.getElementById("portal")
  );
}
