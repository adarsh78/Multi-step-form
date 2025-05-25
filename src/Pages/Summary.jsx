import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/ContextProvider";

const Summary = () => {
  const { isYearly, selectedPlan, isChecked, setIsChecked } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/add-ons");
  };

  const handleNextClick = () => {
    navigate("/thankyou");
  };

  const handleClick = () => {
    navigate("/select-plan");
  };

  const allAddOns = (addOnsObject) => {
    return Object.keys(addOnsObject).filter((key) => addOnsObject[key]);
  };

  let addOnsArray = allAddOns(isChecked);
  console.log(addOnsArray);

  const prices = {
    onlineService: isYearly ? "10" : "1",
    largerStorage: isYearly ? "20" : "2",
    customizableProfile: isYearly ? "20" : "2",
  };

  const totalPrice =
    parseInt(Number(selectedPlan[0]?.price.replace(/[^0-9]/g, "")) || "0", 10) + // Ensure price is parsed as an integer
    addOnsArray.reduce((sum, addOn) => {
      const addOnPrice = parseInt(prices[addOn] || "0", 10); // Parse add-on price
      return sum + addOnPrice;
    }, 0);

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
                  {selectedPlan[0]?.name} ({isYearly ? "Yearly" : "Monthly"})
                </p>
                <span
                  onClick={handleClick}
                  className="text-[hsl(231,11%,63%)] font-medium text-[14px] underline cursor-pointer"
                >
                  Change
                </span>
              </div>

              <div>
                <span className="text-[hsl(213,96%,18%)] font-medium text-[15px]">
                  {selectedPlan[0]?.price}
                </span>
              </div>
            </div>
            <hr />

            <div className="mt-3 flex flex-col gap-2">
              {addOnsArray.map((arr) => (
                <div className="flex justify-between" key={arr}>
                  <p className="text-[hsl(231,11%,63%)] font-medium text-[14px]">
                    {arr}
                  </p>
                  <p className="text-[hsl(213,96%,18%)] font-medium text-[14px]">
                    +${prices[arr]}
                    {isYearly ? "/yr" : "/mo"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between px-4 mt-3">
            <p className="text-[hsl(231,11%,63%)] font-medium text-[14px]">
              Total ({isYearly ? "per year" : "per month"})
            </p>
            <p className="text-[hsl(243,100%,62%)] font-bold text-[15px]">
              +${totalPrice}
              {isYearly ? "/yr" : "/mo"}
            </p>
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
