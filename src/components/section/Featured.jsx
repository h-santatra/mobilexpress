import Featuredcards from "../parts/Featuredcards";
import { ChevronRight } from "lucide-react";

export default function Featured() {
  const featuredList = [
    {
      name: "smartphones",
      details: [
        {
          icon: "/logo/apple.png",
          title: "apple",
        },
        {
          icon: "/logo/samsung.png",
          title: "SAMSUNG",
        },
        {
          icon: "/logo/xiaomi.png",
          title: "XIAOMI",
        },
        {
          icon: "/logo/huawei.png",
          title: "HUAWEI",
        },
      ],
    },
    {
      name: "accessories",
      details: [
        {
          icon: "/accessories/charger.jpg",
          title: "Chargers",
        },
        {
          icon: "/accessories/case.jpg",
          title: "cases",
        },
        {
          icon: "/accessories/airpods.jpg",
          title: "earbuds",
        },
        {
          icon: "/accessories/screen.jpg",
          title: "screen",
        },
      ],
    },
    {
      name: "smartgadgets",
      details: [
        {
          icon: "/smartgadgets/smartwatch.jpg",
          title: "Smartwatches",
        },
        {
          icon: "/smartgadgets/mibands.jpg",
          title: "bands",
        },
        {
          icon: "/smartgadgets/speaker.jpg",
          title: "speakers",
        },
        {
          icon: "/smartgadgets/powerbank.jpg",
          title: "Powerbank",
        },
      ],
    },
  ];

  return (
    <div className="space-y-4 ">
      <h2 className="text-2xl md:text-3xl py-4 underline uppercase text-center">
        Featured section
      </h2>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 px-2 justify-around">
        {featuredList.map((item) => {
          return (
            <>
              <div className="bg-neutral-100 rounded-xl md:space-y-4 py-4 px-4 w-xs mx-auto md:mx-2 ">
                <h2 className="text-center text-lg md:text-xl uppercase">
                  {item.name}
                </h2>
                <div className="">
                  <div className="grid grid-cols-2 gap-1 md:gap-4">
                    {item.details.map((list) => {
                      return (
                        <Featuredcards
                          key={list.title}
                          productIcon={list.icon}
                          productTitle={list.title}
                        />
                      );
                    })}
                  </div>
                </div>
                <a href="">
                  <div className="flex text-xs underline items-center justify-end pr-4 space-x-2">
                    <span>check more</span>

                    <ChevronRight size={16} />
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
