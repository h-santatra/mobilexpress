import { Package2 } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Headset } from "lucide-react";
import { Truck } from "lucide-react";
export default function Whywithus() {
  return (
    <div>
      <div className="flex flex-col gap-y-4 uppercase">
        <div className="flex flex-col">
          <div>
            <i>
              <Package2 />
            </i>
          </div>
          <div className="border">
            <h2 className="text-4xl">Authentic Products</h2>
            <h4 className="text-lg">100% genuine, brand certified devices</h4>
          </div>
        </div>
        <div>
          <div>
            <i>
              <CircleDollarSign />
            </i>
          </div>
          <div>
            <h2></h2>
            <h4></h4>
          </div>
        </div>
        <div>
          <div>
            <i>
              <ShieldCheck />
            </i>
          </div>
          <div>
            <h2></h2>
            <h4></h4>
          </div>
        </div>
        <div>
          <div>
            <i>
              <Truck />
            </i>
          </div>
          <div>
            <h2></h2>
            <h4></h4>
          </div>
        </div>
        <div>
          <div>
            <i>
              <Headset />
            </i>
          </div>
          <div>
            <h2></h2>
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  );
}
