import React from "react"
import cx from "classnames"
import "./Message.scss"

export interface Props {
    children: any
    className: string
    type: string
}

const Message = ({ children, className, type = "receive" }: Props) => {
    return (
        <div className={cx("my-message", className, type)}>
            <div className="my-message-content">{children}</div>
        </div>
    )
}

export default Message
