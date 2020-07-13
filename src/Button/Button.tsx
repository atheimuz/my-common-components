import React from "react"
import cx from "classnames"
import "./Button.scss"

interface Props {
    children: any
    className: string
    theme: string
    size: string
    disabled: boolean
}

const Button = ({
    children,
    className,
    theme = "default",
    size = "middle",
    disabled
}: Props) => {
    return (
        <button
            type="button"
            className={cx("my-button", className, theme, size)}
            disabled={disabled}
        >
            <div>{children}</div>
        </button>
    )
}

export default Button
