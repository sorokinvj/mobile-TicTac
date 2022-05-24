import React, { useCallback, useState } from "react";

export type SideType = "X" | "O" | undefined;

interface XOProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

interface SideContext {
  side: SideType;
  chooseSide: (side: SideType) => void;
}

export const SideContext = React.createContext<SideContext | null>(null);

export const XOSideProvider: React.FC<XOProviderProps> = ({ children }) => {
  const [side, setSide] = useState<SideType>(undefined);

  const chooseSide = useCallback((side: SideType) => {
    setSide(side);
  }, []);

  return (
    <SideContext.Provider value={{ side, chooseSide }}>
      {children}
    </SideContext.Provider>
  );
};
