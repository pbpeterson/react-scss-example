import { HTMLAttributes } from "react";
import styles from "./button-styles.module.scss";

type ButtonParams = {
  children: React.ReactNode;
  className: string;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className }: ButtonParams) => {
  return (
    <button className={[styles.button, className].join(" ")}>{children}</button>
  );
};
