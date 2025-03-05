import { useState } from "react";
import { PiEyeSlashBold } from "react-icons/pi";
import { RiEyeCloseLine } from "react-icons/ri";

const SponsorForm = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="form">
      <h2 className="my-3 text-2xl md:text-5xl">Create an Account</h2>
      <h4 className="my-3 text-sm md:text-base">
        Already have an account?{"   "}
        <span className="underline cursor-pointer text-ocean ">
          Sign up now
        </span>
      </h4>
      <form action="">
        <div className="grid grid-cols-12">
          <input
            type="text"
            className="mb-5 border col-span-12 md:col-span-6 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
            placeholder="First Name"
          />
          <input
            type="text"
            className="mb-5 border col-span-12 md:col-span-6 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
            placeholder="Last Name"
          />
          <input
            type="email"
            className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
            placeholder="Email"
          />
          <input
            type={`${showPass ? "text" : "password"}`}
            className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
            placeholder="Password"
          />
          <input
            type={`${showPass ? "text" : "password"}`}
            className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
            placeholder="Confirm Password"
          />
          <select
            name=""
            id=""
            className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl"
          >
            <option
              className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl bg-[#cccccc] checked:bg-ocean  dark:bg-gunmetal"
              value=""
            >
              Sponsor
            </option>
            <option
              className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl bg-[#cccccc] checked:bg-ocean  dark:bg-gunmetal"
              value=""
            >
              Attendee
            </option>
            <option
              className="mb-5 border col-span-12 dark:border-[#494559] border-gunmetal px-1 md:px-4 py-3 rounded-xl bg-[#cccccc] checked:bg-ocean  dark:bg-gunmetal"
              value=""
            >
              Event Admin
            </option>
          </select>
          <button className="mb-5 cursor-pointer col-span-12 bg-ocean px-1 md:px-4 py-3 rounded-xl">
            Sign Up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default SponsorForm;
