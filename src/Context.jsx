import React, { createContext, useState } from "react";


export const globalBoolC = createContext();

export const GlobalBoolCProvider = ({children}) => {
   const [globalBool, setGB] = useState(true);
   return (
   <globalBoolC.Provider value = {{globalBool, setGB}}>
   {children}
   </globalBoolC.Provider>
);
};