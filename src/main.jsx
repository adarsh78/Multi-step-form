import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import YourInfo from "./Pages/YourInfo.jsx";
import SelectPlan from "./Pages/SelectPlan.jsx";
import AddOns from "./Pages/AddOns.jsx";
import Summary from "./Pages/Summary.jsx";
import Thankyou from "./Pages/Thankyou.jsx";
import ContextProvider from './Context/ContextProvider.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<YourInfo />}/>
      <Route path='/select-plan' element={<SelectPlan />}/>
      <Route path='/add-ons' element={<AddOns />}/>
      <Route path='/summary' element={<Summary />}/>
      <Route path='/thankyou' element={<Thankyou />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router}/>
    </ContextProvider>
  </StrictMode>,
)
