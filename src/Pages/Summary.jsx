import React from "react";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/add-ons");
  };

  const handleNextClick = () => {
    navigate("/thankyou");
  };

  return (
    <div className="flex flex-col gap-[16.7rem]">
      <div className="bg-white  w-[350px] mx-auto mt-[2.2rem] px-[1.7rem] py-[1.8rem] rounded-xl">
        <h1 className="text-[hsl(213,96%,18%)] font-bold text-2xl">
          Finishing up
        </h1>
        <p className="text-[hsl(231,11%,63%)] font-medium mt-2 mb-4">
          Double-check everything looks OK before confirming.
        </p>

        <div className="flex flex-col gap-3">
          <div className="bg-[hsl(231,100%,99%)] p-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-[hsl(213,96%,18%)] font-medium text-[14px]">
                  Arcade (Monthly)
                </p>
                <p className="text-[hsl(231,11%,63%)] font-medium text-[14px] underline cursor-pointer">
                  Change
                </p>
              </div>

              <div>
                <span className="text-[hsl(213,96%,18%)] font-medium text-[15px]">
                  $9/mo
                </span>
              </div>
            </div>
            <hr />

            <div className="mt-3 flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-[hsl(231,11%,63%)] font-medium text-[14px]">Online service</p>
                <p className="text-[hsl(213,96%,18%)] font-medium text-[14px]">+$1/mo</p>
              </div>

              <div className="flex justify-between">
                <p className="text-[hsl(231,11%,63%)] font-medium text-[14px]">Larger storage</p>
                <p className="text-[hsl(213,96%,18%)] font-medium text-[14px]">+$2/mo</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between px-4 mt-3">
            <p className="text-[hsl(231,11%,63%)] font-medium text-[14px]">Total (per month)</p>
            <p className="text-[hsl(243,100%,62%)] font-bold text-[15px]">+$12/mo</p>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-[5rem] flex justify-between items-center px-5 text-white">
        <button
          onClick={handleBackClick}
          className="text-[hsl(231,11%,63%)] cursor-pointer"
        >
          Go Back
        </button>

        <button
          onClick={handleNextClick}
          className="bg-[hsl(243,100%,62%)] py-2 px-4 text-[15px] rounded-md cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default Summary;
