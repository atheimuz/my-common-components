import React from "react"
import cx from "classnames"
import "./Tooltip.scss"

export interface Props {
    children?: React.ReactNode
    className?: string
    title?: React.ReactNode
    direction: "top" | "bottom" | "left" | "right"
}

const Tooltip = ({
    children,
    className = "",
    title,
    direction = "bottom",
    ...rest
}: Props) => {
    return (
        <div className={cx("my-tooltip", className)} {...rest}>
            {children}
            <div className={cx("my-tooltip-msg", direction)}>{title}</div>
        </div>
    )
}

export default Tooltip
