import React, { useState, useEffect } from "react"
import cx from "classnames"
import "./Alert.scss"

export interface Props {
    children: any
    className: string
    status: boolean
}

const Alert = ({ className, children, status, ...rest }: Props) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (!status) {
            setTimeout(() => {
                setIsActive(status)
            }, 1000)
        } else {
            setIsActive(status)
        }
    }, [status])
    return (
        <div
            className={cx("my-alert", className, { active: isActive })}
            {...rest}
        >
            {children}
        </div>
    )
}

export default Alert
