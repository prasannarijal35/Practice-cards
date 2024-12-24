import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
// import "@/app/globals.css";

export default function Card7() {
  return (
    // <div className=" w-screen flex items-start justify-center bg-slate-200">
    <div className="w-[800px] bg-white flex items-center justify-center gap-5">
      <div className="pl-3">
        <Image src="/laptop.png" alt="laptop" height={230} width={230} />
      </div>

      <div className="description">
        <div className="mb-3">
          <h1 className="font-semibold text-xl">Apple MacBook Air M1</h1>
        </div>
        <div className="flex gap-0.5 mb-3">
          <button className="bg-blue-500 text-white font-semibold px-1 py-0.5">
            Electronics
          </button>
          <button className="bg-red-500 text-white font-semibold px-1 py-0.5">
            Laptops
          </button>
        </div>
        <div className="mb-3">
          <p className="font-semibold leading-4 ">
            Processor: Apple M1 8-Core Processor, with 7-core integrated GPU
            (8-core GPU also available)...
          </p>
        </div>
        <div className="bottomtext">
          <p className="font-thin ">
            All items from
            <span className="text-blue-800 font-semibold">
              &nbsp;Apple Offical
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add to
            <span className="text-blue-900 font-semibold">&nbsp;Wishlist</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <div className="mr-4 my-3 ">
          <h1 className="font-semibold text-[22px]">$799.99</h1>
        </div>
        <div className="flex mr-4  text-red-600 gap-0.5">
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
          <FaRegStar size={18} className="text-black" />
        </div>
        <div className="text-[12px] font-medium flex items-center justify-center mr-5">
          <p>4591 Reviews</p>
        </div>
        <div className="flex items-center justify-center  text-white bg-purple-700 gap-2 m-3 px-3 py-0.5">
          <FaCartPlus />
          <button className=" font-semibold  w-max h-[25px]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}
