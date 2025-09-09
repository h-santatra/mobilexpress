export default function Dealsitem({
  productImage,
  productTitle,
  dealInfo,
  itemRating,
  ratingComment,
  itemStar,
}) {
  return (
    <div className="flex items-stretch gap-x-4">
      <div className="">
        <img src={productImage} alt="" className="h-[200px] w-[200px]" />
      </div>
      <div className=" grid content-around">
        <div className="uppercase space-y-1">
          <h3 className="text-xl ">{productTitle}</h3>
          <h3 className="bg-tertiary text-white px-4 py-1 w-fit">{dealInfo}</h3>
        </div>
        <div className=" flex">
          {itemStar}
          <span>{`${itemRating} ${ratingComment}`}</span>
          <span>
            ,{" "}
            <a href="" className="underline cursor-pointer">
              read comments
            </a>
          </span>
        </div>
        <a href="">
          <button className="btn btn-outline btn-error text-black uppercase font-medium text-xs rounded-lg border-2">
            view details
          </button>
        </a>
      </div>
    </div>
  );
}
