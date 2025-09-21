export default function Footer() {
  return (
    <div className="px-4 uppercase bg-neutral-900 text-neutral-200 pt-8 pb-2">
      <div className="flex flex-col md:flex-row space-y-8 space-x-8">
        <div className="space-y-4 lg:w-1/2 ">
          <h3 className="text-sm">stay connected</h3>
          <div className=" flex md:flex-col text-[10px] space-y-4 space-x-8 ">
            <div className="space-y-2">
              <h4>subscribe to our newsletter for exclusive deals</h4>
              <div className="flex space-x-2 lg:mr-32">
                <input
                  type="text"
                  placeholder="your email"
                  className="focus:outline-1 border-1 border-neutral-100 rounded-md placeholder:uppercase placeholder:text-[10px] px-2 w-full"
                />
                <button className="bg-primary px-4 py-2 rounded-md cursor-pointer uppercase text-black">
                  subscribe
                </button>
              </div>
            </div>
            <div className="">
              <h4>follow us on social media :</h4>{' '}
              <h6>
                <a href=""> instagram</a> | <a href="">facebook</a> |{' '}
                <a href="">twitter</a> | <a href="">tiktok</a>
              </h6>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="space-y-4">
            <h3 className="text-sm">quick link</h3>
            <div className="text-[10px] flex flex-col space-y-0.5">
              <a href="" className="underline">
                about us
              </a>
              <a href="" className="underline">
                faqs
              </a>
              <a href="" className="underline">
                return policy
              </a>
              <a href="" className="underline">
                terms & conditions
              </a>
              <a href="" className="underline">
                privacy policy
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm">support</h3>
            <div className="text-[10px] space-y-0.5">
              <h5>customer support : +261 34 01 002 03</h5>
              <h5>
                email :{' '}
                <a href="mailto:support@mobilexpress.com" className="underline">
                  support@mobilexpress.com
                </a>
              </h5>
              <h5>hours : mon-frid, sam-6pm</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[10px] text-center font-light text-neutral-300">
        2025 mobilexpress, all rights reserved
      </div>
    </div>
  );
}
