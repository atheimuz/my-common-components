import React from "react"
import cx from "classnames"
import "./Tag.scss"

export interface Props {
    children?: React.ReactNode
    className?: string
    type?: "line" | "fill"
    size?: "x-small" | "small" | "medium" | "large"
    color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "gray"
}

const Tag = ({
    children,
    className = "",
    type = "fill",
    size = "medium",
    color = "gray",
    ...rest
}: Props) => {
    return (
        <span className={cx("my-tag", className, type, color, size)} {...rest}>
            {children}
        </span>
    )
}

export default Tag
