import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";

export default function Card6() {
  return (
    <div className="flex justify-center items-center h-screen  bg-slate-2   00 flex-col gap-4">
      <div className="bg-white rounded-lg w-[300px] shadow-md">
        <div className="image">
          <Image
            src="/dress.jpg"
            alt="dress"
            height={250}
            width={250}
            className="w-full rounded-md"
          />
          <div className="flex justify-between items-center relative bottom-[190px] px-2">
            <div className="text-white font-bold bg-red-500 rounded-md h-7 w-11">
              -25%
            </div>
            <div className="bg-white rounded-full">
              <CiHeart size={22} />
            </div>
          </div>
        </div>
        <div className="flex justify-between px-3 gap-3">
          <div className="">
            <div className="font-semibold text-xl leading-5">
              <p>White traditional long dress.</p>
            </div>
            <div className="flex gap-1 py-3">
              <div className="rounded-full border-2 border-red-500 h-5 w-5"></div>
              <div className="rounded-full border-2 border-blue-500 h-5 w-5"></div>
              <div className="rounded-full border-2 border-green-500 h-5 w-5"></div>
            </div>
            <div className="flex  justify-start items-center gap-2  font-semibold">
              <FaRegStar /> 4.8
            </div>
          </div>
          <div className="rightside">
            <div className="flex flex-col mb-2">
              <div className="font-semibold text-red-500 text-2xl ">$39.99</div>
              <div className="font-normal text-[12px] ">$39.99</div>
            </div>
            <div className="flex gap-2 ">
              <div className="rounded-full h-5 w-5 border-2 border-gray-300 flex justify-center items-center ">
                L
              </div>
              <div className="rounded-full h-5 w-5 border-2 border-gray-300 flex justify-center items-center ">
                M
              </div>
              <div className="rounded-full h-5 w-5 border-2 border-gray-300 flex justify-center items-center ">
                S
              </div>
            </div>
            <div className="my-2">
              <button className="uppercase font-normal text-blue-800 text-2xl">
                buy+
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] bg-white rounded-md shadow-md flex">
        <div className="flex flex-col justify-center items-center w-[70%]">
          <p className="text-gray-300">Monday Happy</p>
          <h2 className="text-orange-600 font-semibold text-[20px]">#MONHPY</h2>
        </div>
        <div className="w-[30%] bg-[purple] flex items-center justify-center rounded-r-lg">
          <h2 className="text-white font-semibold">20% off</h2>
        </div>
      </div>
    </div>
  );
}
