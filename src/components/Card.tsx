import React from "react";

type TCardProps = {
  title: string | JSX.Element;
  children: JSX.Element;
};

export const Card = ({ title, children }: TCardProps): JSX.Element => {
  const isString = typeof title === "string";
  return (
    <div className="card">
      <div className="card__header">
        {isString ? <div className="card__header__title">{title}</div> : title}
      </div>
      <div className="card__body">{children}</div>
    </div>
  );
};
