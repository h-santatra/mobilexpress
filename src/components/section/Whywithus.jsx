import { Package2 } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Truck } from 'lucide-react';

export default function Whywithus() {
  const size = 40;
  const content = [
    {
      icon: <Package2 size={size} />,
      title: 'Authentic Products',
      sub: '100% genuine, brand certified devices',
    },
    /*
    {
      icon: <CircleDollarSign size={size} />,
      title: "best prices",
      sub: "aily deals, seasonal discount and bundle offers",
    },*/
    {
      icon: <ShieldCheck size={size} />,
      title: 'secure checkout',
      sub: 'multiple payment options with top-tier encryption',
    },
    {
      icon: <Truck size={size} />,
      title: 'fast delivery',
      sub: 'natinwide shipping with real-time tracking',
    },
    {
      icon: <Headset size={size} />,
      title: 'after sales support',
      sub: 'hassle-free returns, warranty coverage and live chat assistance',
    },
  ];
  return (
    <div>
      <div className="px-4">
        <div className="flex items-center ">
          <div className="mt-4">
            <h2 className="text-3xl pb-8 uppercase underline">
              Why shop with Mobilexpress ?
            </h2>
            <div className=" grid xs:grid-row sm:grid-cols-2 gap-4 uppercase md:gap-4">
              {content.map((item) => {
                return (
                  <div className="space-y-2 border px-4 py-6 rounded-md  bg-neutral-100  overflow-hidden">
                    <div>
                      <i>{item.icon}</i>
                    </div>
                    <div className="space-y-0.5">
                      <h2 className="text-lg md">{item.title}</h2>
                      <h4 className="text-xs">{item.sub}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:block w-4/6">
            <img src="/purchaseimage.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
