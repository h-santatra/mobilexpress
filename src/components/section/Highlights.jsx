import { Play } from "lucide-react";

export default function Highlights() {
  const highlightsContent = [
    {
      title: "new arrivals",
      sub: "stay ahead with the latest tech drops",
    },
    {
      title: "best sellers",
      sub: "trusted by thousands of happy customers",
    },
    {
      title: "editor's pick",
      sub: "curated selections for performance, style and value",
    },
  ];
  return (
    <div className="uppercase px-4">
      <h2 className="text-2xl md:text-3xl py-4 underline">mobile Highlights</h2>
      <div>
        <div>
          <div className="flex flex-col space-y-2">
            {highlightsContent.map((item) => {
              return (
                <a href="" className="cursor-pointer" key={item.title}>
                  <div className="flex items-center justify-between group">
                    <div>
                      <h4 className="group-hover:underline text-lg">
                        {item.title}
                      </h4>
                      <h6 className="text-xs">{item.sub}</h6>
                    </div>
                    <div>
                      <i>
                        <Play fill="black" size={12} />
                      </i>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
