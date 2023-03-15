import React, { useState } from "react";
import hero_mobile from "./assets/hero-mobile.jpg";
import hero_desktop from "./assets/hero-desktop.jpg";
import logo from "./assets/logo.svg";
import arrow from "./assets/icon-arrow.svg";
import error from "./assets/icon-error.svg";
import pattern from "./assets/bg-pattern-desktop.svg";

const App = () => {
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage] = useState(false);
  const handleSubmit = (e) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    e.preventDefault();
    if (!regex.test(email)) {
      setErrMessage(true);
    } else {
      setErrMessage(false);
    }
    errMessage || setEmail("");
  };
  return (
    <div
      className="bg-primary1/5 min-h-screen md:flex bg-cover"
      style={{ background: `url(${pattern})` }}
    >
      <div className="md:hidden p-6">
        <img className="h-6" src={logo} alt="" />
      </div>

      <div className="order-2">
        <img className="md:hidden w-full" src={hero_mobile} alt="" />
        <img className="hidden md:block h-screen" src={hero_desktop} alt="" />
      </div>

      <div className="px-6 flex flex-col py-12 gap-6 max-w-md mx-auto">
        <img
          className="w-fit h-7 self-start mb-16 hidden md:block"
          src={logo}
          alt=""
        />
        <h1 className="text-center md:text-start uppercase text-neutral tracking-[0.25em] text-4xl font-semibold md:text-4xl lg:text-5xl">
          <span className="font-light text-primary1">we're</span>
          <br />
          coming
          <br />
          soon
        </h1>
        <p className="text-center md:text-start font-semibold text-primary1">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>

        {/* email */}
        <form onSubmit={handleSubmit}>
          <div
            className={`relative border border-primary1 rounded-full flex items-center gap-4 ${
              errMessage && "border-2 border-primary2"
            }`}
          >
            <input
              required
              type="email"
              className="py-2 px-4 rounded-full bg-transparent text-primary1 placeholder:text-primary1 w-full outline-none"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errMessage && <img className="w-fit h-fit" src={error} alt="" />}
            <button
              className="py-3 px-6 rounded-full gradient2 shadow-xl shadow-primary1/50"
              aria-labelledby="submit-button"
            >
              <img src={arrow} alt="" />
            </button>
          </div>
          {errMessage && (
            <p className="text-primary2 text-sm mt-1 ml-4">
              Please provide a valid email
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
