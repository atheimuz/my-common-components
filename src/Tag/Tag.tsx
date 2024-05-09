import React from "react"
import cx from "classnames"
import "./Tag.scss"

export interface Props {
    children?: React.ReactNode
    className?: string
}

const Tag = ({ children, className = "", ...rest }: Props) => {
    return (
        <span className={cx("my-tag", className)} {...rest}>
            {children}
        </span>
    )
}

export default Tag
