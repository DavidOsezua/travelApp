import React from "react";

const Sort = () => {
  return (
    <div className="flex justify-between items-center mt-[2rem] text-[0.8rem]">
      <div className={`text-[#fff]`}>
        <p>300+ properties</p>

        <div>
          <p>How our sort order works</p>

          <img />
        </div>
      </div>

      <select className="bg-transparent text-[#fff]  p-[1rem] rounded-md outline outline-1 outline-[#fff]">
        <option>Sort by Recommended</option>
      </select>
    </div>
  );
};

export default Sort;
