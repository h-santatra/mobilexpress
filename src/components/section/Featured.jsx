import Featuredcards from "../parts/Featuredcards";
import { ChevronRight } from "lucide-react";

export default function Featured() {
  const smartphones = [
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
  ];

  const accessories = [
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
  ];

  const smartgadgets = [
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
  ];
  return (
    <div className="space-y-4">
      <h2 className="text-3xl uppercase underline font-medium text-center">
        Featured Categories :
      </h2>

      <div className="flex flex-col uppercase md:flex-row justify-between space-x-4 space-y-4 px-8 ">
        <div className="bg-secondary-50  rounded-3xl space-y-4 py-4 w-full h-full">
          <h2 className="text-center  text-xl">smartphones</h2>
          <div className="py-2 px-12">
            <div className="grid grid-cols-2 gap-x-16 gap-y-8 ">
              {smartphones.map((item) => {
                return (
                  <Featuredcards
                    productIcon={item.icon}
                    productTitle={item.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex text-xs underline items-center justify-end pr-4 space-x-2">
            <span>check more</span>
            <ChevronRight size={16} />
          </div>
        </div>

        <div className="bg-secondary-50  rounded-3xl space-y-4 py-4 w-full h-full">
          <h2 className="text-center  text-xl">accessories</h2>
          <div className="py-2 px-12">
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              {accessories.map((item) => {
                return (
                  <Featuredcards
                    productIcon={item.icon}
                    productTitle={item.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex text-xs underline items-center justify-end pr-4 space-x-2">
            <span>check more</span>
            <ChevronRight size={16} />
          </div>
        </div>

        <div className="bg-secondary-50  rounded-3xl space-y-4 py-4 w-full h-full">
          <h2 className="text-center  text-xl">smartgadgets</h2>
          <div className="py-2 px-12 ">
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              {smartgadgets.map((item) => {
                return (
                  <Featuredcards
                    productIcon={item.icon}
                    productTitle={item.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex text-xs underline items-center justify-end pr-4 space-x-2 ">
            <span>check more</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
