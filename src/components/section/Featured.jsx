import Featuredcards from '../parts/Featuredcards';
import { ChevronRight } from 'lucide-react';

export default function Featured() {
  const smartphones = [
    {
      icon: '/logo/apple.png',
      title: 'apple',
    },
    {
      icon: '/logo/samsung.png',
      title: 'SAMSUNG',
    },
    {
      icon: '/logo/xiaomi.png',
      title: 'XIAOMI',
    },
    {
      icon: '/logo/huawei.png',
      title: 'HUAWEI',
    },
  ];

  const accessories = [
    {
      icon: '/accessories/charger.jpg',
      title: 'Chargers',
    },
    {
      icon: '/accessories/case.jpg',
      title: 'cases',
    },
    {
      icon: '/accessories/airpods.jpg',
      title: 'earbuds',
    },
    {
      icon: '/accessories/screen.jpg',
      title: 'screen',
    },
  ];

  const smartgadgets = [
    {
      icon: '/smartgadgets/smartwatch.jpg',
      title: 'Smartwatches',
    },
    {
      icon: '/smartgadgets/mibands.jpg',
      title: 'bands',
    },
    {
      icon: '/smartgadgets/speaker.jpg',
      title: 'speakers',
    },
    {
      icon: '/smartgadgets/powerbank.jpg',
      title: 'Powerbank',
    },
  ];
  return (
    <div className="space-y-4 ">
      <h2 className="text-3xl uppercase underline font-medium text-center">
        Featured Categories :
      </h2>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 px-2">
        <div className="bg-neutral-100 rounded-xl space-y-4 py-4 w-md px-4 mx-auto md:mx-2">
          <h2 className="text-center text-xl uppercase">smartphones</h2>
          <div className="">
            <div className="grid grid-cols-2 gap-4">
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

          <a href="">
            <div className="flex text-xs underline items-center justify-end pr-4 space-x-2">
              <span>check more</span>

              <ChevronRight size={16} />
            </div>
          </a>
        </div>

        <div className="bg-neutral-100 rounded-xl space-y-4 py-4 w-md px-4 mx-auto md:mx-2">
          <h2 className="text-center text-xl uppercase">accessories</h2>
          <div className="">
            <div className="grid grid-cols-2 gap-4">
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
          <a href="">
            <div className="flex text-xs underline items-center justify-end pr-4 space-x-2">
              <span>check more</span>

              <ChevronRight size={16} />
            </div>
          </a>
        </div>

        <div className="bg-neutral-100 rounded-xl space-y-4 py-4 w-md px-4 mx-auto md:mx-2">
          <h2 className="text-center text-xl uppercase">smartgadgets</h2>
          <div className="">
            <div className="grid grid-cols-2 gap-4">
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

          <a href="">
            <div className="flex text-xs underline items-center justify-end pr-4 space-x-2">
              <span>check more</span>

              <ChevronRight size={16} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
