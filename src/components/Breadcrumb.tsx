import React from "react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  name: string;
  link: string;
  isActive?: boolean;
};

type BreadcrumbProps = { items: Array<BreadcrumbItem> };

export const Breadcrumb = ({ items }: BreadcrumbProps): JSX.Element => (
  <ul className="breadcrumb">{items.map(BreadcrumbItem)}</ul>
);

export const BreadcrumbItem = ({
  name,
  link,
  isActive,
}: BreadcrumbItem): JSX.Element => {
  return (
    <li
      className={`breadcrumb__item ${
        isActive ? "breadcrumb__item--active" : ""
      }`}
      key={name}
    >
      <Link to={link}>{name}</Link>
    </li>
  );
};
