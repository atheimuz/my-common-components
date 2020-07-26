import React from "react"
import cx from "classnames"
import "./Button.scss"

interface Props {
    children: any
    className: string
    theme: string
    size: string
    onClick: Function
    disabled: boolean
}

const Button = ({
    children,
    className,
    theme = "default",
    size = "middle",
    onClick,
    disabled
}: Props) => {
    return (
        <button
            type="button"
            className={cx("my-button", className, theme, size)}
            onClick={onClick && onClick()}
            disabled={disabled}
        >
            <div>{children}</div>
        </button>
    )
}

export default Button
