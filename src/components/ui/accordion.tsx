"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Accordion = ({ 
  children, 
  className, 
  type = "single", 
  collapsible = false 
}: { 
  children: React.ReactNode, 
  className?: string,
  type?: "single" | "multiple",
  collapsible?: boolean
}) => (
  <div className={cn("space-y-4", className)}>{children}</div>
)

const AccordionItem = ({ children, className, value }: { children: React.ReactNode, className?: string, value: string }) => (
  <div className={cn("border-b", className)}>{children}</div>
)

const AccordionTrigger = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <div 
    className={cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline cursor-pointer", className)}
    onClick={onClick}
  >
    {children}
    <span className="material-symbols-outlined transition-transform duration-200">expand_more</span>
  </div>
)

const AccordionContent = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("overflow-hidden text-sm transition-all pb-4", className)}>
    {children}
  </div>
)

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
