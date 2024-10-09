"use client"

import React from "react"
import cx from "classnames"
import "./Message.scss"

export interface Props {
    children: React.ReactNode
    className?: string
    color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "gray"
}

const Message = ({ children, className, color = "gray" }: Props) => {
    return (
        <div className={cx("my-message", className, color)}>
            <div className="my-message-content">{children}</div>
        </div>
    )
}

export default Message
