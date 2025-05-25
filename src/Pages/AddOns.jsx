import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/ContextProvider";

const AddOns = () => {
  const { isYearly, selectedPlan, isChecked, setIsChecked } = useContext(AppContext);


  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/select-plan");
  };

  const handleNextClick = () => {
    navigate("/summary");
    // console.log("Arcade: ", selectedPlan);
    console.log("Checked values: ", isChecked);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target; // Get the name and checked status of the checkbox
    setIsChecked((prevState) => ({
      ...prevState,
      [name]: checked, // Update the specific checkbox state
    }));
  };

  const prices = {
    onlineService: isYearly ? "10" : "1",
    largerStorage: isYearly ? "20" : "2",
    customizableProfile: isYearly ? "20" : "2",
  };

  return (
    <div className="flex flex-col gap-[14.7rem]">
      <div className="bg-white  w-[350px] mx-auto mt-[2.2rem] px-[1.7rem] py-[1.8rem] rounded-xl">
        <h1 className="text-[hsl(213,96%,18%)] font-bold text-2xl">
          Pick add-ons
        </h1>
        <p className="text-[hsl(231,11%,63%)] font-medium mt-2 mb-4">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="flex flex-col gap-3">
          <div className="border-[1px] border-[hsl(229,24%,87%)] rounded-md p-3 flex items-center gap-4">
            <input
              type="checkbox"
              id="onlineService"
              name="onlineService"
              value="onlineService"
              checked={isChecked.onlineService}
              onChange={handleCheckboxChange}
              className="w-[17px] h-[17px]"
            />
            <div>
              <p className="text-[hsl(213,96%,18%)] font-medium text-[15px]">
                Online service
              </p>
              <p className="text-[hsl(231,11%,63%)] font-medium text-[12px]">
                Access to multiplayer games
              </p>
            </div>

            <div className="text-[hsl(243,100%,62%)] font-medium text-[12px] ml-4">
              +${prices.onlineService}{isYearly ? "/yr" : "/mo"}
            </div>
          </div>

          <div className="border-[1px] border-[hsl(229,24%,87%)] rounded-md p-3 flex items-center gap-4">
            <input
              type="checkbox"
              id="largerStorage"
              name="largerStorage"
              value="largerStorage"
              checked={isChecked.largerStorage}
              onChange={handleCheckboxChange}
              className="w-[17px] h-[17px]"
            />
            <div>
              <p className="text-[hsl(213,96%,18%)] font-medium text-[15px]">
                Larger storage
              </p>
              <p className="text-[hsl(231,11%,63%)] font-medium text-[12px]">
                Extra 1TB of cloud save
              </p>
            </div>

            <div className="text-[hsl(243,100%,62%)] font-medium text-[12px] ml-11">
              +${prices.largerStorage}{isYearly ? "/yr" : "/mo"}
            </div>
          </div>

          <div className="border-[1px] border-[hsl(229,24%,87%)] rounded-md p-3 flex items-center gap-4">
            <input
              type="checkbox"
              id="customizableProfile"
              name="customizableProfile"
              value="customizableProfile"
              checked={isChecked.customizableProfile}
              onChange={handleCheckboxChange}
              className="w-[17px] h-[17px]"
            />
            <div>
              <p className="text-[hsl(213,96%,18%)] font-medium text-[15px]">
                Customizable profile
              </p>
              <p className="text-[hsl(231,11%,63%)] font-medium text-[12px]">
                Custom theme on your profile
              </p>
            </div>

            <div className="text-[hsl(243,100%,62%)] font-medium text-[12px] ml-2">
              +${prices.customizableProfile}{isYearly ? "/yr" : "/mo"}
            </div>
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
          className="bg-[hsl(213,96%,18%)] py-2 px-4 text-[15px] rounded-md cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOns;
