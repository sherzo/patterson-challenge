import React, { ReactNode } from "react";

type TButtonVariant = "sm" | "md";

type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  fullWidth?: boolean;
  variant?: TButtonVariant;
};

export const Button = ({
  children,
  variant = "md",
  fullWidth = false,
  ...rest
}: TButton) => (
  <button
    className={`btn btn--${variant} ${fullWidth ? "btn--full-width" : ""}`}
    {...rest}
  >
    {children}
  </button>
);
