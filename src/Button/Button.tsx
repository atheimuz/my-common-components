import React from "react";
import cx from "classnames";
import "./Button.scss";

export interface Props {
    children: any;
    className: string;
    theme: string;
    size: string;
}

const Button = ({
    children,
    className,
    theme = "primary",
    size = "middle",
    ...rest
}: Props) => {
    return (
        <button
            type="button"
            className={cx("my-button", className, theme, size)}
            {...rest}
        >
            <div>{children}</div>
        </button>
    );
};

export default Button;
