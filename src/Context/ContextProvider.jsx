import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [isChecked, setIsChecked] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleSubscriptionPeriod = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        isYearly,
        handleSubscriptionPeriod,
        selectedPlan,
        setSelectedPlan,
        isChecked,
        setIsChecked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
