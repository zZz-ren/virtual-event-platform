import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="h-screen px-10 pt-24 pb-10 md:px-36 md:pt-28 flex justify-center items-center">
      <div className="grid grid-cols-12 w-full h-full">
        <div className="col-span-12 md:col-span-6 dark:text-white">
          <h2 className="text-xs md:text-xl p-3 md:px-6 text-ocean bg-ocean/10 rounded-3xl w-fit h-10  font-bold">
            Carfted with Love, Served with Passion 🔥❤️‍🔥
          </h2>
          <span className="text-3xl md:text-8xl capitalize">
            designed to promote and compère{" "}
            <span className=" text-bg-gradient-to-t from-mint to-transparent">
              virtual events
            </span>
          </span>
          <h2 className="text-xs md:text-base dark:text-white/75">
            a virtual event website that designed to promote and host virtual
            events such as conferences, summits, workshops, or webinars. It
            serves as a hub where attendees can register, access event
            information, interact with other attendees and speakers, and
            participate in the event itself.
          </h2>
          <div className="md:flex gap-2">
            <span className="flex rounded-full px-3 py-1 text-sm md:text-base md:px-5 md:py-2 w-fit mt-2 bg-ocean">
              Try now
            </span>
            <span className="flex rounded-full px-3 py-1 text-sm md:text-base md:px-5 md:py-2 w-fit mt-2 border dark:border-white border-gunmetal">
              Learn More <BsArrowUpRight />
            </span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 dark:text-white">
          <img
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero_image"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
