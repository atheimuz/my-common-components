import React from "react"
import cx from "classnames"
import "./Button.scss"
import Spinner from "../Spinner"

export interface Props {
    children: React.ReactNode,
    className?: string,
    theme?: "primary" | "secondary" | "tertiary" | "dashed" | "link" | string,
    size?: "small" | "middle" | "large",
    disabled?: boolean,
    isLoading?: boolean
}

const Button = ({
    children,
    className = "",
    theme = "primary",
    size = "middle",
    disabled = false,
    isLoading = false,
    ...rest
}: Props) => {
    return (
        <button
            type="button"
            className={cx("my-button", className, theme, size)}
            disabled={disabled}
            {...rest}
        >
            {isLoading ? <Spinner /> : children}
        </button>
    )
}

export default Button
