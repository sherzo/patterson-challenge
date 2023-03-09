import React, { ReactNode } from "react";

type TButton = { children: string | ReactNode };

export const Button = ({ children }: TButton) => (
  <button className="btn">{children}</button>
);
