import React, { ReactNode } from "react";

type TButtonSize = "sm" | "md";
type TButtonVariant = "fill" | "default" | "light";

type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  fullWidth?: boolean;
  size?: TButtonSize;
  variant?: TButtonVariant;
};

export const Button = ({
  children,
  size = "md",
  variant = "fill",
  fullWidth = false,
  ...rest
}: TButton) => (
  <button
    className={`btn btn--${variant} btn--${size} ${
      fullWidth ? "btn--full-width" : ""
    }`}
    {...rest}
  >
    {children}
  </button>
);
