"use client";
import { useState } from "react";

const Card4 = ({ title, age }: { title: string; age: number }) => {
  const [home, setHome] = useState<string>("hello");
  return (
    <div>
      <div>{home}</div>
      <div>
        <h1>{title}</h1>
      </div>
      <h5>{age}</h5>
    </div>
  );
};
export default Card4;
