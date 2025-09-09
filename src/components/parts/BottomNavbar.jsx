export default function TopNavbar() {
  return (
    <div className=" hidden lg:flex justify-between uppercase ">
      <div className="hover:underline px-8 py-2 cursor-pointer rounded-lg ">
        HOMEpage
      </div>
      <div className="hover:underline px-8 py-2 cursor-pointer rounded-lg">
        shop phones
      </div>
      <div className="hover:underline px-8 py-2 cursor-pointer rounded-lg">
        accessories
      </div>
      <div className="hover:underline px-8 py-2 cursor-pointer rounded-lg">
        orders
      </div>
      <div className="hover:underline px-8 py-2 cursor-pointer rounded-lg">
        about us
      </div>
    </div>
  );
}
