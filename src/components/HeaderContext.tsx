"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface HeaderContextType {
  isSticky: boolean;
  setSticky: (sticky: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [isSticky, setSticky] = useState(true);

  return (
    <HeaderContext.Provider value={{ isSticky, setSticky }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
}
