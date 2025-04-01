import { BiCalendar, BiEdit } from "react-icons/bi";
import { BsSave } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { GoSponsorTiers } from "react-icons/go";
import { SiDatefns } from "react-icons/si";

const EventPage = () => {
  return (
    <div className="min-h-screen  pt-[95px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-3xl px-5 py-4">
          The Greatest Grand Event -
          <span className="text-sm md:text-base">Kirmada</span>
        </h2>
        {
          <span className=" px-5 underline flex text-sm md:text-base text-ocean cursor-pointer">
            {true ? (
              <>
                <BiEdit className="text-3xl" /> Edit Event
              </>
            ) : (
              <>
                <GoSponsorTiers className="text-3xl" /> Sponsor Us
              </>
            )}
          </span>
        }
      </div>
      <img
        src="https://plus.unsplash.com/premium_photo-1728014305859-56de13d1b008?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full object-cover md:h-[500px] h-[240px]"
        alt=""
      />
      <div className="grid grid-cols-12 p-10">
        <div className="col-span-12 md:col-span-8">
          <h3 className="text-xl md:text-2xl font-semibold ">
            Event Description
          </h3>
          <p className="text-md text-gray-800 dark:text-gray-300 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            bibendum, est a pellentesque ultricies, mauris metus fermentum nisi,
            a feugiat enim nunc vel sapien. Proin non libero vel ipsum efficitur
            placerat. Nullam sed neque vitae felis viverra suscipit. Donec vel
            orci in nunc semper fermentum. Donec vel orci in nunc semper
            fermentum. Donec vel orci in nunc semper fermentum.
          </p>
          <div className="my-4">
            <h3 className="text-xl md:text-2xl font-semibold ">
              Event Details
            </h3>
            <ul className="flex flex-col md:flex-row gap-2 mt-2">
              <li className="flex gap-3 shadow-xl dark:bg-[#332f40] p-3 rounded-xl">
                <SiDatefns /> Date: September 12, 2023
              </li>
              <li className="flex gap-3 shadow-xl dark:bg-[#332f40] p-3 rounded-xl">
                <SiDatefns /> Time: 10:00 AM - 5:00 PM
              </li>
              <li className="flex gap-3 shadow-xl dark:bg-[#332f40] p-3 rounded-xl">
                <SiDatefns /> Location: Kirmada, India
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="w-full bg-[#332f40] shadow-xl shadow-antiflash px-5 py-3 h-fit rounded-xl">
            <h3 className="text-white text-xl font-semibold">
              Sponsored By
              <ul className="flex flex-col md:flex-row gap-2 mt-2">
                <li className="flex gap-3 shadow-xl dark:bg-gunmetal p-3 rounded-xl">
                  <img
                    className=""
                    src="http://karmakarta.thenetnexus.com/icons/Karma-white-2.png"
                    alt="sponsor logo"
                  />
                </li>
                <li className="flex gap-3 shadow-xl dark:bg-gunmetal p-3 rounded-xl">
                  <img
                    className=""
                    src="http://karmakarta.thenetnexus.com/icons/Karma-white-2.png"
                    alt="sponsor logo"
                  />
                </li>
                <li className="flex gap-3 shadow-xl dark:bg-gunmetal p-3 rounded-xl">
                  <img
                    className=""
                    src="http://karmakarta.thenetnexus.com/icons/Karma-white-2.png"
                    alt="sponsor logo"
                  />
                </li>
              </ul>
            </h3>
            <ul className="flex flex-col mt-4">
              <li className="flex gap-3 p-3 rounded-xl">
                <BsSave className="text-2xl" /> Cricket
              </li>
              <li className="flex gap-3 p-3 rounded-xl">
                <BiCalendar className="text-2xl" /> March 27 l 7:30 PM
              </li>
              <li className="flex gap-3 p-3 rounded-xl">
                <CiLocationArrow1 className="text-2xl" /> Rajiv Gandhi
                International Cricket Stadium, Hyderabad
              </li>
            </ul>

            <div className="w-full flex justify-between items-center mt-5 border border-transparent border-t-white/25 py-2">
              <h4 className="text-base flex flex-col md:text-xl">
                Starts From
                <span className="text-neutral-300">₹750</span>
              </h4>
              <button className="rounded-lg bg-ocean text-sm md:text-base md:px-5 md:py-3 px-3 py-1">
                Book tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
