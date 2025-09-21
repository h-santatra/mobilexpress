export default function Featuredcards({ productIcon, productTitle }) {
  return (
    <a
      href=""
      className="group flex flex-col justify-center items-center cursor-pointer group-hover:underline space-y-2 transition-all duration-500  aspect-square ease-in-out "
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={productIcon}
          alt={productTitle}
          className="size-40 md:size-25 rounded-lg scale-95 group-hover:scale-100 group-hover:brightness-70 transition-all duration-500 ease-in-out "
        />
      </div>
      <h6 className="uppercase md:text-sm lg:text-md group-hover:underline">
        {productTitle}
      </h6>
    </a>
  );
}
