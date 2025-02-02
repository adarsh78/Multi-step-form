import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/ContextProvider';

const YourInfo = () => {

  const { data } = useContext(AppContext);
  

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/select-plan")
  }

  const [infoData, setInfoData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setInfoData((prevData) => (
      {
        ...prevData, 
        [name] : value,
      }
    ))
  }

  console.log("User info: ", infoData);

  return (
   <>
   <div className='flex flex-col gap-[16.1rem]'>
   <div className='bg-white  w-[350px] mx-auto mt-[2.2rem] px-[1.7rem] py-[1.8rem] rounded-xl'>
    <h1 className='text-[hsl(213,96%,18%)] font-bold text-2xl'>Personal Info</h1>
    <p className='text-[hsl(231,11%,63%)] font-medium mt-2 mb-4'>Please provide your name, email address, and phone number.</p>

      <form>
        <div className='flex flex-col'>
        <label htmlFor="name" className='text-[hsl(213,96%,18%)] text-[12px]'>Name</label>
        <input 
        className='border-[1px] text-[hsl(213,96%,18%)] border-[hsl(231,11%,63%)] rounded-md py-[7px] px-4 mb-4 font-medium text-[15px] focus:outline-[hsl(243,100%,62%)] focus:outline-[1px]'
        type="text" 
        name='name'
        placeholder='e.g. Stephen King'
        value={infoData.name}
        onChange={handleInfoChange}
        />
        </div>

        <div className='flex flex-col'>
        <label htmlFor="email" className='text-[hsl(213,96%,18%)] text-[12px]'>Email Address</label>
        <input 
        className='border-[1px] text-[hsl(213,96%,18%)] border-[hsl(231,11%,63%)] rounded-md py-[7px] px-4 mb-4 font-medium text-[15px] focus:outline-[hsl(243,100%,62%)] focus:outline-[1px]'
        type="text" 
        name='email'
        placeholder='e.g. stephenking@lorem.com'
        value={infoData.email}
        onChange={handleInfoChange}
        />
        </div>

        <div className='flex flex-col'>
        <label htmlFor="number" className='text-[hsl(213,96%,18%)] text-[12px]'>Phone Number</label>
        <input 
        className='border-[1px] text-[hsl(213,96%,18%)] border-[hsl(231,11%,63%)] rounded-md py-[7px] px-4 font-medium text-[15px] focus:outline-[hsl(243,100%,62%)] focus:outline-[1px]'
        type="number" 
        name='number'
        placeholder=' e.g. +1 234 567 890'
        value={infoData.number}
        onChange={handleInfoChange}
        />
        </div>
      </form>
    
   </div>

   <div className='bg-white w-full h-[5rem] flex justify-end items-center px-5 text-white'>
    <button 
    onClick={handleNextClick}
    className='bg-[hsl(213,96%,18%)] py-2 px-4 text-[15px] rounded-md cursor-pointer'>Next Step</button>
   </div>
   </div>
   </>
  )
}

export default YourInfo