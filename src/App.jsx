import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <div className='bg-[hsl(217,100%,97%)] h-screen bg-[url("../images/bg-sidebar-mobile.svg")] bg-no-repeat'>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default App;
