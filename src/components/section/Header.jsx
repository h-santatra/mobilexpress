import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [searchCategory, setsearchCategory] = useState('ALL');
  const [searchItem, setsearchItem] = useState('');

  function handleSearch() {
    console.log(searchItem);
    setsearchItem('');
  }

  function searchSelect(item) {
    setsearchCategory(item);
  }
  const navBar = [
    {
      title: 'HOMEpage',
      link: '',
    },
    {
      title: 'shop',
      link: '',
    },
    {
      title: 'order',
      link: '',
    },
    {
      title: 'faq',
      link: '',
    },
    {
      title: 'about us',
      link: '',
    },
  ];

  const searchList = ['all', 'phone', 'accessories', 'Gadgets'];

  return (
    <div className="space-y-4 mt-4 px-4">
      <div className="flex justify-between items-center">
        <a href="">
          <div className="flex items-center cursor-pointer">
            <Smartphone className="size-8 lg:size-12 " />
            <div className="hidden lg:block font-[Staatliches] uppercase text-[40px]">
              mobilexpress
            </div>
          </div>
        </a>
        <div className="flex space-x-2 items-center font-medium flex-1 mx-12">
          <div className="hidden flex-row  lg:flex">
            <details className="dropdown dropdown-end">
              <summary className="btn bg-white outline-none border-none shadow-none uppercase w-32">
                {searchCategory}
                <i>
                  <ChevronDown />
                </i>
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 shadow-sm ">
                {searchList.map((item) => {
                  return (
                    <>
                      <li className="" key={item} value={item}>
                        <div
                          className="hover:underline w-40 cursor-pointer rounded-lg capitalize"
                          onClick={() => {
                            searchSelect(item);
                          }}
                        >
                          {item}
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </details>
          </div>

          <input
            type="text"
            placeholder="search an item here..."
            className=" bg-neutral-200 border-1 border-neutral-600 rounded-xl px-4 py-1.5  w-full focus:outline-primary-500"
            onChange={(e) => {
              setsearchItem(e.target.value);
            }}
            value={searchItem}
          />
          <button
            className=" hidden md:block cursor-pointer "
            onClick={handleSearch}
          >
            <Search className="size-8" />
          </button>
        </div>
        <div className="flex uppercase space-x-2 items-center">
          <details className="dropdown dropdown-end">
            <summary className=" btn btn-circle lg:hidden cursor-pointer px-1 ">
              <Menu size={32} />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 shadow-sm">
              {navBar.map((item) => {
                return (
                  <>
                    <li className="">
                      <a href={item.link}>
                        <div className="hover:underline w-40 cursor-pointer rounded-lg ">
                          {item.title}
                        </div>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </details>

          <button className="cursor-pointer hidden lg:block">
            <ShoppingBag size={32} />
          </button>
          <div className="hidden lg:block">
            <a href="" className="underline cursor-pointer">
              Log in
            </a>
            <span> | </span>
            <a href="" className="">
              <button className=" btn uppercase border-2 border-secondary-600 rounded-xl px-4 py-2 cursor-pointer hover:text-white hover:bg-secondary-600">
                register
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr className="h-0 border border-gray-500 shadow-lg" />
      <div>
        <div className="hidden lg:flex justify-between uppercase">
          {navBar.map((item) => {
            return (
              <>
                <a href={item.link}>
                  <div className="hover:underline px-8 py-2 cursor-pointer rounded-lg ">
                    {item.title}
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
