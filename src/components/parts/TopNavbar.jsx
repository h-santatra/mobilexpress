import { Search } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Menu } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="flex  justify-between items-center">
      <div className="flex items-center">
        <Smartphone className="size-8 lg:size-12" />
        <div className="hidden lg:block font-[Staatliches] uppercase text-[40px]">
          mobilexpress
        </div>
      </div>
      <div className="flex space-x-2 items-center font-medium flex-1 mx-12">
        <div className="hidden flex-row  lg:flex">
          <span>ALL</span>
          <i>
            <ChevronDown />
          </i>
        </div>
        <input
          type="text"
          placeholder="search an item here..."
          className=" bg-gray-300 border-1  rounded-xl px-4 py-1.5  md:w-full"
        />
        <button className="cursor-pointer">
          <Search className="size-8" />
        </button>
      </div>
      <div className="flex uppercase space-x-2 items-center">
        <button className="= lg:hidden">
          <Menu size={32} />
        </button>
        <button className="cursor-pointer hidden lg:block">
          <ShoppingBag size={32} />
        </button>
        <div className="hidden lg:block">
          <a href="" className="underline cursor-pointer">
            Log in
          </a>
          <span> | </span>
          <a href="" className="">
            <button className="uppercase border-2 border-secondary-600 rounded-xl px-4 py-2 cursor-pointer">
              register
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
