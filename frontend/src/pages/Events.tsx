let x = [1, 2, 3, 4];

const Events = () => {
  return (
    <div className="min-h-screen px-5 pt-[95px]">
      <div className="grid grid-cols-12 gap-5">
        {x.map(() => (
          <EventBlocks />
        ))}
      </div>
    </div>
  );
};
export default Events;

const EventBlocks = () => {
  return (
    <div className="col-span-12 cursor-pointer md:col-span-4 rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-1280182898074017901/original/07e75203-eb04-4d64-b02d-ec1c9d7ad903.jpeg?im_w=720&im_format=avif"
        className="w-full"
        alt=""
      />
      <div className="py-4 px-3 text-2xl">
        The card is here
        <div className=" text-sm dark:text-gray-300">
          Some text some text some text some textSome text some text some text
          some text
        </div>
      </div>
    </div>
  );
};
