import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Smartphone } from 'lucide-react';

export default function TopNavbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Smartphone size={48} />
        <div className="hidden lg:block font-[Staatliches] uppercase text-[40px]">
          mobilexpress
        </div>
      </div>
      <div className="flex gap-x-4 items-center font-medium">
        <div className="flex flex-row">
          <span>ALL</span>
          <i>
            <ChevronDown />
          </i>
        </div>
        <input
          type="text"
          placeholder="search an item here..."
          className="bg-gray-300 border-2  rounded-xl px-4 py-2 min-w-[400px] md:w-full"
        />
        <button className="cursor-pointer">
          <Search size={32} />
        </button>
      </div>
      <div className="flex uppercase space-x-2 items-center">
      <button className="cursor-pointer">
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
