import React, { createContext, useState } from 'react'

export const AppContext = createContext();

const ContextProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState(1);

  return (
    <AppContext.Provider value={{ currentPage }}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider