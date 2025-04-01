import { BiSearch } from "react-icons/bi";
import Sidebar from "../components/Dashboard/Sidebar";
import { LuSettings2 } from "react-icons/lu";
import EventPage from "../pages/EventPage";
import {motion} from 'framer-motion'

const General = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[calc(100%-60px)] ml-[60px] min-h-fit  dark:bg-gunmetal bg-antiflash dark:text-white">
        <TopBar />
        <EventPage />
      </div>
    </div>
  );
};

export default General;

const TopBar = () => {
  return (
    <div className="flex items-center border  py-5 px-3 md:px-8 border-transparent border-b-white/15 pb-2 justify-between fixed  dark:bg-gunmetal bg-antiflash dark:text-white w-[calc(100%-60px)] h-[80px]">
      <h2 className="text-3xl hidden md:block">Events </h2>
      <span className="relative flex items-center">
        <motion.input
          animate
          type="search"
          className="border dark:border-[#726c88] border-gunmetal px-1 md:px-6 py-3 w-[60vw] md:w-[20vw] rounded-full text-start"
          whileFocus={{ width: "60vw" }}
          whileHover={{ width: "60vw" }}
          placeholder="search events"
          name=""
          id=""
        />
        <BiSearch className="absolute end-5 text-3xl cursor-pointer p-1 rounded-full bg-gunmetal dark:bg-antiflash text-white dark:text-gunmetal" />
      </span>
      <div className="">
        <LuSettings2 className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};
