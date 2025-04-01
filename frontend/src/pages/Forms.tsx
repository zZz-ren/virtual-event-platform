import { ReactNode } from "react";
import ThemeToggler from "../components/ThemeToggler";

const Forms = ({children}:{children:ReactNode}) => {
  return (
    <div className="min-h-screen md:h-screen px-5 pt-24 dark:bg-[#494559] dark:text-white bg-antiflash pb-10 md:px-36 md:pt-12 flex justify-center items-center">
      <ThemeToggler />
      <div className="grid grid-cols-12 dark:bg-gunmetal bg-[#cccccc] h-full w-full rounded-xl shadow-2xl">
        <div className="col-span-12 md:col-span-6 p-4">
          <img
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero_image"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="col-span-12 md:col-span-6 py-12 px-16">
         {children}
        </div>
      </div>
    </div>
  );
};

export default Forms;
