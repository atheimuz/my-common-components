import React, { useState, useEffect } from "react"
import cx from "classnames"
import "./Collapse.scss"

export interface Props {
    className: string
    children: React.ReactNode
}

export interface PanelProps {
    className: string
    title: React.ReactNode
    active: boolean
    children: React.ReactNode
}

const Collapse = ({ className, children, ...rest }: Props) => {
    return (
        <div className={cx("my-collapse", className)} {...rest}>
            {children}
        </div>
    )
}

export const Panel = ({
    className,
    title,
    active = false,
    children,
    ...rest
}: PanelProps) => {
    const [status, setStatus] = useState(active)

    useEffect(() => {
        setStatus(active)
    }, [active])

    return (
        <div
            className={cx("my-panel", className, { active: status })}
            tabIndex={0}
            onClick={() => setStatus(!status)}
            {...rest}
        >
            <div className="my-panel-title">{title}</div>
            <div className="my-panel-content">{children}</div>
        </div>
    )
}

export default Collapse
