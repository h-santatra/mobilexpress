export default function Herosection() {
  return (
    <div>
      <div className="min-h-[500px] p-8 flex items-center herosection">
        <div className="flex flex-col uppercase font-semibold space-y-8 ">
          <div className="space-y-4 text-white text-pretty  mr-32">
            <h1 className="text-6xl ">
              Experience the Future of Mobile Shopping
            </h1>
            <h2 className=" hidden md:block text-2xl text-pretty">
              Discover the latest smartphones, unbeatable deals, and
              lightning-fast delivery—all in one place.
            </h2>
          </div>
          <a href="">
            <button className="cursor-pointer btn btn-warning btn-lg text-black px-8 py-4 rounded-2xl uppercase ">
              Shop Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
