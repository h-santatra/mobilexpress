export default function Dealsitem({
  productImage,
  productTitle,
  dealInfo,
  itemRating,
  ratingComment,
  itemStar,
}) {
  return (
    <div className="flex items-center md:items-stretch gap-x-4">
      <div className="">
        <img
          src={productImage}
          alt=""
          className="max-h-[100px] max-w-[100px] md:max-h-[200px] md:max-w-[200px]"
        />
      </div>
      <div className="grid content-around space-y-2">
        <div className="uppercase space-y-1 overflow-hidden">
          <h3 className="text-md md:text-xl ">{productTitle}</h3>
          <h3 className="bg-tertiary text-white px-2 md:px-4 py-1 w-fit text-xs md:text-md text-nowrap">
            {dealInfo}
          </h3>
        </div>
        <div className="hidden md:flex flex-col lg:flex-row space-x-0.5 space-y-1 text-sm md:text-md">
          <div className="flex flex-col md:flex-row">
            <span>{itemStar}</span>
            <span className="hidden md:block">{itemRating}</span>
          </div>
          <div className="flex flex-col md:flex-row">
            <span>{ratingComment}</span>
            <span className="hidden md:block">
              <span>, </span>
              <a href="" className="underline cursor-pointer">
                read comments
              </a>
            </span>
          </div>
        </div>
        <a href="">
          <button className="btn btn-xs md:btn-md btn-outline btn-error text-black uppercase font-medium text-[8px] md:text-md rounded-lg border-2">
            view details
          </button>
        </a>
      </div>
    </div>
  );
}
