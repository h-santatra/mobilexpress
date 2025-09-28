import { CircleArrowRight } from "lucide-react";

export default function Herosection() {
  return (
    <div className="">
      <div className="min-h-[350px] md:min-h-[500px] flex items-center herosection">
        <div className="flex flex-col uppercase font-semibold space-y-8 pl-2 md:px-4 md:pr-8">
          <div className="space-y-4 text-white text-pretty lg:mr-32">
            <h1 className="text-5xl md:text-6xl ">
              Experience the Future of Mobile Shopping
            </h1>
            <h2 className=" hidden md:block text-2xl text-pretty">
              Discover the latest smartphones, unbeatable deals, and
              lightning-fast delivery—all in one place.
            </h2>
          </div>
          <a href="">
            <button className="cursor-pointer btn btn-warning btn-md md:btn-lg text-black px-4 lg:px-6 lg:py-4 rounded-2xl uppercase space-x-2">
              <span>Shop Now</span> <CircleArrowRight />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
