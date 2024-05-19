import { createContext, useContext, useEffect, useState } from "react";

export const ShippingContext = createContext(undefined);
export const ShippingContextProvider = ({ children }) => {
  const [currentPhase, setCurrentPhase] = useState(0);

  return (
    <ShippingContext.Provider
      value={{
        currentPhase,
        setCurrentPhase,
      }}
    >
      {children}
    </ShippingContext.Provider>
  );
};
