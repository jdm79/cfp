import React from "react";

export default function Header() {
  return (
    <div className='sticky top-0 w-full left-0 flex bg-inherit border-b border-solid border-white items-center justify-between p-4'>
      <h1 className='text-xl sm:text-2xl select-none'>CityJSConf</h1>
      <i className='fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer'></i>
    </div>
  );
}
