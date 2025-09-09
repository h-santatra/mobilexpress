export default function Featuredcards({ productIcon, productTitle }) {
  return (
    <a href="" className="group">
      <div className="flex flex-col justify-center items-center cursor-pointer group-hover:underline space-y-2 transition-color duration-500">
        <div>
          <img
            src={productIcon}
            alt={productTitle}
            className=" rounded-lg h-[100px] scale-100 group-hover:scale-115 transition-transform transition-color duration-500"
          />
        </div>
        <h6>{productTitle}</h6>
      </div>
    </a>
  );
}
