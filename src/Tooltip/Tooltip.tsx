import React, { useState } from "react"
import cx from "classnames"
import "./Tooltip.scss"

export interface Props {
    children?: React.ReactNode
    className?: string
    title?: React.ReactNode
    type: "keep" | "hover" | "click"
    direction: "top" | "bottom" | "left" | "right"
}

const Tooltip = ({
    children,
    className = "",
    title,
    type = "keep",
    direction = "bottom",
    ...rest
}: Props) => {
    const [status, setStatus] = useState(true)

    return (
        <div className={cx("my-tooltip", className, type)} {...rest}>
            {children}

            {status && (
                <div className={cx("my-tooltip-msg", direction)}>
                    {title}
                    {type === "click" && (
                        <button
                            type="button"
                            className="my-tooltip-close-btn"
                            onClick={() => setStatus(false)}
                        >
                            X
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default Tooltip
