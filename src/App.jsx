import React, { useState } from "react";
import hero from "./assets/illustration-dashboard.png";
import logo from "./assets/logo.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const App = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const socialLinks = [<FaFacebook />, <FaTwitter />, <FaInstagram />];
  const validate = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
      return "Email is required!";
    }
    if (!regex.test(email)) {
      return "Please provide a valid email address";
    }
    return null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(email));
    !error && setEmail("");
  };
  return (
    <div className="flex min-h-screen items-center flex-col px-6 py-12 space-y-6">
      <a href="">
        <img className="h-6" src={logo} alt="" />
      </a>
      <h1 className="text-3xl lg:text-4xl xl:text-5xl text-neutral-2">
        we are launching <span className="font-bold">soon!</span>
      </h1>
      <p>Subscribe and get notified</p>
      <form
        className="flex flex-col md:flex-row gap-2 w-full max-w-sm md:max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <input
            className="py-2 px-4 outline-primary rounded-full border w-full"
            type="text"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={`text-xs italic text-red-600 ml-4 mt-1`}>{error}</p>
        </div>
        <button className="bg-primary text-white py-2 px-8 rounded-full font-semibold hover:bg-primary/80 transition-colors duration-150 shadow-md hover:shadow-primary/40 whitespace-nowrap h-fit">
          Notify Me
        </button>
      </form>
      <img className="max-w-xl" src={hero} alt="" />
      {/* social links */}
      <div className="flex gap-4">
        {socialLinks.map((value, i) => (
          <a
            className="h-8 w-8 border rounded-full flex items-center justify-center text-lg hover:text-white hover:bg-primary"
            key={i}
            href=""
          >
            {value}
          </a>
        ))}
      </div>
      <p className="text-sm text-neutral-1">
        &copy;Copyright Ping. All right reserved.
      </p>
    </div>
  );
};

export default App;
