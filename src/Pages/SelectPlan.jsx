import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/ContextProvider";

const SelectPlan = () => {

  const { isYearly, handleSubscriptionPeriod, selectedPlan, setSelectedPlan} = useContext(AppContext);
  const navigate = useNavigate();

  const [selectedPlanName, setSelectedPlanName] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleNextClick = () => {
    navigate("/add-ons");
  };

  useEffect(() => {
    // Clear the selectedPlan array when the component mounts
    setSelectedPlan([]);
  }, [setSelectedPlan]);

  const handlePlanSelection = (planName, monthlyPrice, yearlyPrice) => {
    setSelectedPlan([ 
      {
        name: planName,
        price: isYearly ? yearlyPrice : monthlyPrice,
      },
    ]);
    setSelectedPlanName(planName);
  }

  return (
    <>
      <div className="flex flex-col gap-[9.6rem]">
        <div className="bg-white w-[350px] mx-auto mt-[2.2rem] px-[1.7rem] py-[1.8rem] rounded-xl">
          <h1 className="text-[hsl(213,96%,18%)] font-bold text-2xl">
            Select your plan
          </h1>
          <p className="text-[hsl(231,11%,63%)] font-medium mt-2 mb-4">
            You have the option of monthly or yearly billing.
          </p>

          <div className="flex flex-col gap-3">

            <div 
            onClick={() => handlePlanSelection("Arcade", "$9/mo", "$90/yr")}
            className={`${selectedPlanName === "Arcade" ? "bg-[hsl(217,100%,97%)] border-[hsl(243,100%,62%)]" : "border-[hsl(229,24%,87%)]"} border-[1px] rounded-md p-3`}>
              <div className="flex gap-3 items-start">
                <img src="../images/icon-arcade.svg" alt="icon-arcade" />
                <div>
                  <p className="text-[hsl(213,96%,18%)] font-medium">Arcade</p>
                  <p className="arcadeValue text-[hsl(231,11%,63%)] font-medium text-[14px]">
                    {isYearly ? "$90/yr" : "$9/mo"}
                  </p>
                  {isYearly && (
                    <p className="text-[hsl(213,96%,18%)] text-[12px]">
                      2 months free
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div 
            onClick={() => handlePlanSelection("Advanced", "$12/mo", "$120/yr")}
            className={`${selectedPlanName === "Advanced" ? "bg-[hsl(217,100%,97%)] border-[hsl(243,100%,62%)]" : "border-[hsl(229,24%,87%)]"} border-[1px] rounded-md p-3`}>
              <div className="flex gap-3 items-start">
                <img src="../images/icon-advanced.svg" alt="icon-advanced" />
                <div>
                  <p className="text-[hsl(213,96%,18%)] font-medium">
                    Advanced
                  </p>
                  <p className="text-[hsl(231,11%,63%)] font-medium text-[14px]">
                    {isYearly ? "$120/yr" : "$12/mo"}
                  </p>
                  {isYearly && (
                    <p className="text-[hsl(213,96%,18%)] text-[12px]">
                      2 months free
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div 
            onClick={() => handlePlanSelection("Pro", "$15/mo", "$150/yr")}
            className={`${selectedPlanName === "Pro" ? "bg-[hsl(217,100%,97%)] border-[hsl(243,100%,62%)]" : "border-[hsl(229,24%,87%)]"} border-[1px] rounded-md p-3`}>
              <div className="flex gap-3 items-start">
                <img src="../images/icon-pro.svg" alt="icon-pro" />
                <div>
                  <p className="text-[hsl(213,96%,18%)] font-medium">Pro</p>
                  <p className="text-[hsl(231,11%,63%)] font-medium text-[14px]">
                    {isYearly ? "$150/yr" : "$15/mo"}
                  </p>
                  {isYearly && (
                    <p className="text-[hsl(213,96%,18%)] text-[12px]">
                      2 months free
                    </p>
                  )}
                </div>
              </div>
            </div>

          </div>

          <div className="flex items-center gap-5 justify-center bg-[hsl(217,100%,97%)] mt-6 p-3 rounded-md">
            <p className="text-[hsl(213,96%,18%)] font-medium text-[14px]">
              Monthly
            </p>
            <div className="btn-radio flex">
              <input
                className="btn-radio"
                type="checkbox"
                name="checkbox-group"
                id="checkbox1"
                checked={isYearly}
                onChange={handleSubscriptionPeriod}
              />
              <div className={`circle ${isYearly ? "checked" : ""}`}></div>
            </div>
            <p className="text-[hsl(231,11%,63%)] font-medium text-[14px]">
              Yearly
            </p>
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
            className="bg-[hsl(213,96%,18%)] py-2 px-4 text-[15px] rounded-md cursor-pointer"
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
