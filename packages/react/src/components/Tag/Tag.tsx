import React from "react"
import cx from "classnames"
import "./Tag.scss"

export interface Props {
    children?: React.ReactNode
    className?: string
    type?: "line" | "fill"
    color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "gray"
}

const Tag = ({
    children,
    className = "",
    type = "fill",
    color = "gray",
    ...rest
}: Props) => {
    return (
        <span className={cx("my-tag", className, type, color)} {...rest}>
            {children}
        </span>
    )
}

export default Tag
