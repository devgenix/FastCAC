"use client";

import { useEffect } from "react";
import { useHeader } from "./HeaderContext";

interface HeaderToggleProps {
  sticky: boolean;
}

export function HeaderToggle({ sticky }: HeaderToggleProps) {
  const { setSticky } = useHeader();

  useEffect(() => {
    setSticky(sticky);
    // On unmount, reset to default sticky behavior
    return () => setSticky(true);
  }, [sticky, setSticky]);

  return null;
}
