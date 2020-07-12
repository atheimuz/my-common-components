import React from 'react'
import cx from "classnames";
import "./Button.scss";

interface Props {
  children: any,
  className: string,
  theme: string
}

const Button = ({ children, className, theme }: Props) => {
  return <button type="button" className={cx("my-button", className, theme)}>{children}</button>
}

export default Button;