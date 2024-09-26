import { ReactNode } from "react";
import { twJoin } from "tailwind-merge";

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export function GridContainer({ children, className }: GridContainerProps) {
  return (
    <div className={twJoin("w-full max-w-container mx-auto px-3", className)}>
      {children}
    </div>
  );
}
