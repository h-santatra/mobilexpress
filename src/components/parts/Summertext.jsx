import 'animate.css';

export default function Summertext() {
  return (
    <div className="flex font-bold uppercase space-x-16 items-center">
      <div className="flex flex-col text-7xl items-between  font-semibold h-full">
        <span>Summer</span>
        <span>SALES</span>
      </div>
      <div className="flex flex-col space-y-1">
        <span className="text-3xl">Up TO</span>
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-5xl tracking-tighter font-extrabold">40</span>
          <div className="flex flex-col text-xl/4 ">
            <span>%</span>
            <span>OfF</span>
          </div>
        </div>
        <button className="btn btn-sm btn-neutral rounded-lg px-4 p-y-2 animate__animated animate__pulse animate__infinite	infinite text-nowrap">
          check it now !
        </button>
      </div>
    </div>
  );
}
