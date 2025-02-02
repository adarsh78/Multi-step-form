import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const locationArray = [
    { 1: "/" },
    { 2: "/select-plan" },
    { 3: "/add-ons" },
    { 4: "/summary" },
  ];

  const getPagePath = (path) => {
    switch (path) {
      case "/":
        return "/";
      case "/select-plan":
        return "/select-plan";
      case "/add-ons":
        return "/add-ons";
      case "/summary":
        return "/summary";
      case "/thankyou":
        return "/summary";
      default:
        return "/";
    }
  };

  const currentPage = getPagePath(location.pathname);

  return (
    <div className="flex justify-center pt-8 gap-5">
      {locationArray.map((path) => (
        <div
        key={Object.keys(path)[0]}
          className={`rounded-full w-[2rem] h-[2rem] flex items-center justify-center cursor-pointer font-medium ${
            path[Object.keys(path)] === currentPage
              ? "bg-[hsl(206,94%,87%)] text-[hsl(213,96%,18%)]"
              : "text-white border-[1px] border-white"
          }`}
        >
          {Object.keys(path)[0]}
        </div>
      ))}
    </div>
  );
};

export default Header;
