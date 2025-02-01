import React from "react";

const Thankyou = () => {
  return (
      <div className="flex flex-col items-center text-center bg-white w-[350px] mx-auto mt-[2.2rem] px-[1.7rem] py-[5rem] rounded-xl">
        <img src="../images/icon-thank-you.svg" alt="icon-thank-you" width={55}/>
        <h2 className="text-[hsl(213,96%,18%)] font-bold text-2xl mt-5 mb-2">Thank you!</h2>
        <p className="text-[hsl(231,11%,63%)]">
          {" "}
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
  );
};

export default Thankyou;
