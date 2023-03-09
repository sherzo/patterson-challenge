import React from "react";

type TInput = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const Input = ({ hasError = false, ...rest }: TInput) => {
  return (
    <input className={`input ${hasError ? "input--error" : ""}`} {...rest} />
  );
};
