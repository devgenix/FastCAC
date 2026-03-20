"use client";

import React from "react";

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Horizontal Lines */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "100% 80px",
        }} 
      />
      {/* Vertical Lines */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "80px 100%",
        }} 
      />
      {/* Intersection Dots */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--grid-dot) 1.5px, transparent 0)`,
          backgroundSize: "80px 80px",
        }} 
      />
      {/* Subtle radial vignette for depth */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_90%)] opacity-40" 
      />
    </div>
  );
};
