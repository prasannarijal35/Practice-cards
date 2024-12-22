"use client";
import { ChangeEvent, useState } from "react";

export default function Use() {
  const [value, setValue] = useState<number>(10);
  const [name, setName] = useState<string>("prasanna");
  const [naya, setNaya] = useState<string>("");
  const [nayaa, setNayaa] = useState<number>();
  const changeName = () => {
    setNaya(name);
    setNayaa(value);
  };
  const handleChange = (elo: ChangeEvent<HTMLInputElement>) => {
    setName(elo.target.value);
  };

  const decrement = () => {
    if (value === 0) {
      alert("Zero vanda tala nagar jatha");
    } else {
      setValue(value - 1);
    }
  };

  const increment = () => {
    if (value === 10) {
      alert("10 vanda mildaina vai");
    } else {
      setValue(value + 1);
    }
  };
  return (
    <div className="flex  h-screen justify-center items-center flex-col">
      <div className="text-slate-500 font-bold text-2xl p-2">
        The number in counter is {nayaa} counter and name is {naya}
      </div>
      <div>
        <div className="flex justify-center items-center">
          <button
            className="bg-red-500 h-[80px] w-[80px] text-white justify-center items-center"
            onClick={decrement}
          >
            -
          </button>
          <div className="flex bg-slate-50 h-[80px] w-[100px] text-orange-500 justify-center items-center">
            {value}
          </div>
          <button
            className="bg-violet-500 h-[80px] w-[80px] text-white justify-center items-center"
            onClick={increment}
          >
            +
          </button>
          <div className="flex justify-center items-center pl-4">
            <input
              type="text"
              className="h-[80px] border-[2px] border-gray-500 outline-none"
              value={name}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-purple-500 h-[80px] w-[80px] text-white"
            onClick={changeName}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
