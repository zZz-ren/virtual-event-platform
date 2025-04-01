import { useCycle, motion } from "framer-motion";
import { BsArrowLeft, BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { CgAppleWatch, CgCarousel } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { FaHamburger, FaUserSecret } from "react-icons/fa";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import { MdEventSeat } from "react-icons/md";
import { SiEventstore } from "react-icons/si";

const Sidebar = () => {
  const [isSideOpen, setIsSideOpen] = useCycle(false, true);
  const variants = {
    active: {
      transition: {
        type: "spring",
      },
      width: "250px",
    },
    inactive: {

      width: "60px",
    },
  };
  return (
    <>
      {
        <motion.div
          variants={variants}
          animate={isSideOpen ? "active" : "inactive"}
          className="fixed z-50 border border-transparent dark:border-r-antiflash/30 border-r-gunmetal h-screen bg-antiflash text-gunmetal  dark:bg-gunmetal dark:text-white"
        >
          <button
            className="absolute cursor-pointer -right-4 top-1/2 -translate-y-1/2 text-4xl rounded-full dark:text-white text-gunmetal dark:bg-gunmetal"
            onClick={() => setIsSideOpen()}
          >
            {isSideOpen ? <BsArrowLeftCircleFill /> : <BsArrowRightCircleFill />}
          </button>
          <ul>
            <li className="px-4 py-2 my-3 flex gap-3 items-center cursor-pointer justify-center mb-10 mt-5"> <span className="text-3xl"><FaUserSecret/> </span> {isSideOpen && "Event Platform"}</li>
            <li className="px-4 py-2 my-3 flex gap-3 items-center cursor-pointer justify-center"> <span className="text-3xl"><SiEventstore/> </span> {isSideOpen &&" Events"}</li>
            <li className="px-4 py-2 my-3 flex gap-3 items-center cursor-pointer justify-center bg-ocean/25 border-4 border-transparent border-r-ocean"> <span className="text-3xl"><CgAppleWatch/> </span> {isSideOpen &&" Events"}</li>
            <li className="px-4 py-2 my-3 flex gap-3 items-center cursor-pointer justify-center"> <span className="text-3xl"><CgCarousel/> </span> {isSideOpen &&" Events"}</li>
            <li className="px-4 py-2 my-3 flex gap-3 items-center cursor-pointer justify-center"> <span className="text-3xl"><MdEventSeat/> </span> {isSideOpen &&" Events"}</li>
            <li className="px-4 py-2 my-3 flex gap-3 items-center cursor-pointer justify-center"> <span className="text-3xl"><HiMiniArrowRightStartOnRectangle/> </span> {isSideOpen &&" Events"}</li>
          </ul>
        </motion.div>
      }
    </>
  );
};

export default Sidebar;
