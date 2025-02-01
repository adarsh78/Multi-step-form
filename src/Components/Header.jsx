import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center pt-8 gap-5">
      <div className="border-[1px] border-white rounded-full w-[2rem] h-[2rem] flex items-center justify-center text-white cursor-pointer">
        1
      </div>
      <div className="border-[1px] border-white rounded-full w-[2rem] h-[2rem] flex items-center justify-center text-white cursor-pointer">
        2
      </div>
      <div className="border-[1px] border-white rounded-full w-[2rem] h-[2rem] flex items-center justify-center text-white cursor-pointer">
        3
      </div>
      <div className="border-[1px] border-white rounded-full w-[2rem] h-[2rem] flex items-center justify-center text-white cursor-pointer">
        4
      </div>
    </div>
  );
};

export default Header;
