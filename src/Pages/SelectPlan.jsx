import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SelectPlan = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  }

  const handleBackClick = () => {
    navigate("/");
  }

  const handleNextClick = () => {
    navigate("/add-ons");
  }
  return (
   <>
   <div className='flex flex-col gap-[9.6rem]'>
   <div className='bg-white w-[350px] mx-auto mt-[2.2rem] px-[1.7rem] py-[1.8rem] rounded-xl'>
    <h1 className='text-[hsl(213,96%,18%)] font-bold text-2xl'>Select your plan</h1>
    <p className='text-[hsl(231,11%,63%)] font-medium mt-2 mb-4'>You have the option of monthly or yearly billing.</p>

    <div className='flex flex-col gap-3'>
    <div className='border-[1px] border-[hsl(229,24%,87%)] rounded-md p-3'>
      <div className='flex gap-3 items-start'>
        <img src="../images/icon-arcade.svg" alt="icon-arcade" />
        <div>
          <p className='text-[hsl(213,96%,18%)] font-medium'>Arcade</p>
          <p className='text-[hsl(231,11%,63%)] font-medium text-[14px]'>{isChecked ? "$90/yr" : "$9/mo"}</p>
          {isChecked && <p className='text-[hsl(213,96%,18%)] text-[12px]'>2 months free</p>}
        </div>
      </div>
    </div>

    <div className='border-[1px] border-[hsl(229,24%,87%)] rounded-md p-3'>
      <div className='flex gap-3 items-start'>
        <img src="../images/icon-advanced.svg" alt="icon-advanced" />
        <div>
          <p className='text-[hsl(213,96%,18%)] font-medium'>Advanced</p>
          <p className='text-[hsl(231,11%,63%)] font-medium text-[14px]'>{isChecked ? "$120/yr" : "$12/mo"}</p>
          {isChecked && <p className='text-[hsl(213,96%,18%)] text-[12px]'>2 months free</p>}
        </div>
      </div>
    </div>

    <div className='border-[1px] border-[hsl(229,24%,87%)] rounded-md p-3'>
      <div className='flex gap-3 items-start'>
        <img src="../images/icon-pro.svg" alt="icon-pro" />
        <div>
          <p className='text-[hsl(213,96%,18%)] font-medium'>Pro</p>
          <p className='text-[hsl(231,11%,63%)] font-medium text-[14px]'>{isChecked ? "$150/yr" : "$15/mo"}</p>
          {isChecked && <p className='text-[hsl(213,96%,18%)] text-[12px]'>2 months free</p>}
        </div>
      </div>
    </div>
    </div>

    <div className='flex items-center gap-5 justify-center bg-[hsl(217,100%,97%)] mt-6 p-3 rounded-md'>
      <p className='text-[hsl(213,96%,18%)] font-medium text-[14px]'>Monthly</p>
      <div className='btn-radio flex'>
        <input 
        className='btn-radio'
        type="checkbox" 
        name='checkbox-group'
        id='checkbox1'
        checked={isChecked}
        onChange={handleChange}
        />
        <div className={`circle ${isChecked ? "checked" : ""}`}></div>
      </div>
      <p className='text-[hsl(231,11%,63%)] font-medium text-[14px]'>Yearly</p>     
    </div>

   </div>

   <div className='bg-white w-full h-[5rem] flex justify-between items-center px-5 text-white'>
    <button 
    onClick={handleBackClick}
    className='text-[hsl(231,11%,63%)] cursor-pointer'>Go Back</button>

    <button 
    onClick={handleNextClick}
    className='bg-[hsl(213,96%,18%)] py-2 px-4 text-[15px] rounded-md cursor-pointer'
    >Next Step</button>
   </div>
   </div>
   </>
  )
}

export default SelectPlan