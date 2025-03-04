import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header min-h-16 fixed w-screen py-2 grid grid-cols-12 bg-transparent">
      <div className="justify-between flex col-span-12 items-center px-3 py-1 md:col-span-4">
        <img
          src="http://karmakarta.thenetnexus.com/icons/Karma-white-2.png"
          className="h-14  cursor-pointer"
          alt="logo"
        />

        {/* only visible in smaller screens */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="md:hidden text-2xl md:text-3xl dark:text-white"
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </motion.button>
      </div>

      {/* only visible in large screens */}
      <ul className="col-span-4 hidden md:flex px-5 justify-center bg-gunmetal dark:bg-ocean text-white rounded-3xl items-center">
        <li className="mx-auto cursor-pointer bg-gunmetal dark:bg-ocean text-white">
          Products
        </li>
        <li className="mx-auto cursor-pointer">About</li>
        <li className="mx-auto cursor-pointer">Features</li>
        <li className="mx-auto cursor-pointer">Testimonial</li>
      </ul>

      <div className="col-span-4 hidden md:flex justify-end">
        {/* toggle Theme */}
        <ThemeToggler />
        <button className="mx-2 px-6 rounded-3xl bg-gunmetal dark:bg-ocean text-white ">
          Try now
        </button>
      </div>

      {/* only visible in smaller screens */}
      <motion.ul
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.2 }}
        className=" md:hidden h-[50vh] py-1 w-screen dark:bg-gunmetal/95 dark:text-white"
      >
        <li className="cursor-pointer px-3 py-2 rounded-lg mx-2 bg-ocean dark:bg-antiflash dark:text-gunmetal ">
          Home
        </li>
        <li className="cursor-pointer px-3 py-2 rounded-lg mx-2  ">About</li>
        <li className="cursor-pointer px-3 py-2 rounded-lg mx-2  ">Services</li>
      </motion.ul>
    </div>
  );
};

export default Header;
