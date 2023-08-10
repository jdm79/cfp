import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  function submitHandler() {
    if (!email || !password) {
      setErrorMessage("Please enter username and password");
      return;
    }
  }

  return (
    <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
      <h1 className='font-extrabold text-2xl select-none sm:text-4xl uppercase'>
        {isLoggingIn ? "Login" : "Register"}
      </h1>
      {errorMessage && (
        <div className='w-full text-center border border-solid max-w-[40ch] border-rose-400 text-rose-400 py-2'>
          {errorMessage}
        </div>
      )}
      <input
        type='text'
        placeholder='Email address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 w-full p-2 max-w-[40ch]'
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 w-full p-2 max-w-[40ch]'
      />
      <button
        onClick={submitHandler}
        className='w-full duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900 max-w-[40ch] border border-white border-solid py-2'
      >
        <h2 className='relative z-20 uppercase'>Submit</h2>
      </button>
      <h2
        className='duration-300 hover:scale-110 cursor-pointer select-none'
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
  );
}
