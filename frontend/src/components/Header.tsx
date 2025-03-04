import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoSettingsSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import ThemeToggler from "./ThemeToggler";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { GoSponsorTiers } from "react-icons/go";
import { FaUserAstronaut } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <button
          onClick={() => setIsModalOpen((t) => !t)}
          className="mx-2 px-4 rounded-3xl bg-gunmetal flex items-center text-lg dark:bg-ocean text-white "
        >
          Login
          {isModalOpen ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowUp />
          )}
        </button>
      </div>
      {/* only visible in smaller screens */}
      <div>
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
          <li className="cursor-pointer px-3 py-2 rounded-lg mx-2  ">
            Services
          </li>
          <li
            onClick={() => setIsModalOpen((t) => !t)}
            className="cursor-pointer px-3 py-2 flex items-center rounded-lg mx-2  "
          >
            Login
            {!isModalOpen ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </li>
        </motion.ul>
        {isModalOpen && <LoginComponent />}
      </div>
    </div>
  );
};

const LoginComponent = () => {
  return (
    <ul className="md:absolute block text-black md:right-2 top-52 md:top-20 bg-antiflash rounded-2xl w-fit h-fit">
      <li className="px-8 py-3 mx-3 my-1 flex gap-2 items-center hover:bg-[#cccccc] rounded-2xl">
        <span className="text-3xl">
          <IoSettingsSharp />
        </span>
        <div className="flex flex-col">
          <span className="text-lg font-medium">Admin Portal</span>
          <span className="text-sm text-[#2a1a1a]">
            Sub text this is sub text this is
          </span>
        </div>
      </li>
      <li className="px-8 py-3 mx-3 my-1 flex gap-2 items-center hover:bg-[#cccccc] rounded-2xl">
        <span className="text-3xl">
          <GoSponsorTiers />
        </span>
        <div className="flex flex-col">
          <span className="text-lg font-medium">Sponsonship</span>
          <span className="text-sm text-[#2a1a1a]">
            Sub text this Sub text this is sub text this isis
          </span>
        </div>
      </li>
      <li className="px-8 py-3 mx-3 my-1 flex gap-2 items-center hover:bg-[#cccccc] rounded-2xl">
        <span className="text-3xl">
          <FaUserAstronaut />
        </span>
        <div className="flex flex-col">
          <span className="text-lg font-medium"> Attendee</span>
          <span className="text-sm text-[#2a1a1a]">
            SubSu bSubSub text this is
          </span>
        </div>
      </li>
    </ul>
  );
};

export default Header;
